import { useState, useEffect } from 'react';
import { Document } from '../data/documents';

// Your Google Apps Script Web App URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxlSJelSc2dSRpPVREn_AYYpgbAWBmNBPdSREqrS8jCjBih0__rLJ3wxlcngk8POtzGgg/exec';

export function useDocuments() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Generate a unique callback name to avoid collisions
    const callbackName = `jsonp_callback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    let isComponentMounted = true;
    let scriptElement: HTMLScriptElement | null = null;

    // Create the callback function
    (window as any)[callbackName] = (data: any) => {
      if (!isComponentMounted) return;

      try {
        // Check for error response
        if (data && data.error) {
          throw new Error(`Apps Script Error: ${data.error}`);
        }

        // Ensure data is an array
        if (!Array.isArray(data)) {
          throw new Error("Invalid format received from server");
        }

        // Process the documents
        const parsedDocuments: Document[] = [];

        for (let i = 0; i < data.length; i++) {
          const row = data[i];

          // Helper function for case-insensitive property access
          const getProp = (obj: any, propName: string): string => {
            if (!obj || typeof obj !== 'object') return '';
            const key = Object.keys(obj).find(
              k => k.toLowerCase().trim() === propName.toLowerCase().trim()
            );
            return key && obj[key] ? String(obj[key]).trim() : '';
          };

          const dateVal = getProp(row, 'Date');
          const title = getProp(row, 'Title');
          const content = getProp(row, 'Content');

          // Skip completely empty rows
          if (!title && !content) continue;

          // Generate a preview from content
          const cleanContent = content.replace(/\s+/g, ' ').trim();
          const preview = cleanContent.length > 120
            ? cleanContent.substring(0, 120).trim() + '...'
            : cleanContent;

          // Generate ID from title or use fallback
          const id = title
            ? title.toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)+/g, '') + '_' + i
            : `doc-${i}`;

          parsedDocuments.push({
            id,
            title: title || 'Untitled',
            content: content || '',
            date: dateVal || new Date().toISOString().split('T')[0],
            preview: preview || 'No content available'
          });
        }

        // Reverse array so newest is first (assuming first rows are newest)
        setDocuments(parsedDocuments.reverse());
        setError(null);

      } catch (err: any) {
        console.error("Error processing documents:", err);
        setError(err.message || 'An unknown error occurred while processing documents.');
      } finally {
        setLoading(false);

        // Cleanup the script tag and callback
        if (scriptElement && scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }

        // Small delay before deleting callback to ensure it's not needed anymore
        setTimeout(() => {
          delete (window as any)[callbackName];
        }, 100);
      }
    };

    // Handle script load error
    const handleScriptError = () => {
      if (!isComponentMounted) return;

      console.error("Network error while trying to fetch JSONP script");
      setError("No documents are published till now!");
      setLoading(false);

      // Cleanup
      delete (window as any)[callbackName];
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };

    // Create and inject the script tag
    try {
      scriptElement = document.createElement('script');
      scriptElement.src = `${APPS_SCRIPT_URL}?callback=${callbackName}`;
      scriptElement.id = callbackName;
      scriptElement.onerror = handleScriptError;

      // Add a timeout to handle cases where script never loads
      const timeoutId = setTimeout(() => {
        if (isComponentMounted && loading) {
          handleScriptError();
        }
      }, 10000); // 10 second timeout

      document.head.appendChild(scriptElement);

      // Cleanup timeout on success
      const originalCallback = (window as any)[callbackName];
      (window as any)[callbackName] = (data: any) => {
        clearTimeout(timeoutId);
        originalCallback(data);
      };

    } catch (err: any) {
      console.error("Error creating script element:", err);
      setError("Failed to initialize data fetch.");
      setLoading(false);
    }

    // Cleanup if component unmounts
    return () => {
      isComponentMounted = false;

      // Clean up script if it hasn't loaded yet
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }

      // Clean up callback (with small delay to avoid errors)
      setTimeout(() => {
        delete (window as any)[callbackName];
      }, 100);
    };
  }, []); // Empty dependency array means this runs once on mount

  return { documents, loading, error };
}