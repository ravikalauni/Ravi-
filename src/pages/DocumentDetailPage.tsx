import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Calendar, Loader2, AlertCircle } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { useDocuments } from "../hooks/useDocuments";

export default function DocumentDetailPage() {
  const { id } = useParams();
  const { documents, loading, error } = useDocuments();
  
  const document = documents.find((doc) => doc.id === id);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-grid bg-grid-pattern dark:bg-black pt-24 pb-20 px-4 flex items-center justify-center transition-colors duration-300">
        <div className="flex flex-col items-center">
          <Loader2 className="w-10 h-10 text-brand-red animate-spin mb-4" />
          <p className="text-gray-500 font-medium">Loading document...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-bg-grid bg-grid-pattern dark:bg-black pt-24 pb-20 px-4 flex items-center justify-center transition-colors duration-300">
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-8 rounded-2xl flex items-center space-x-4 text-red-600 dark:text-red-400 max-w-lg">
          <AlertCircle className="w-8 h-8 shrink-0" />
          <p className="font-medium">Failed to load document: {error}</p>
        </div>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="min-h-screen bg-bg-grid bg-grid-pattern dark:bg-black pt-24 pb-20 px-4 flex items-center justify-center transition-colors duration-300">
        <div className="text-center bg-white dark:bg-neutral-800 p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Document Not Found</h2>
          <Link to="/documents" className="text-brand-red dark:text-red-500 font-medium hover:underline">Back to Documents</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-grid bg-grid-pattern dark:bg-black pt-24 pb-20 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <Link to="/documents" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-red-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Documents
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-neutral-800 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-neutral-700"
        >
          <div className="flex items-center space-x-3 text-brand-red dark:text-red-500 mb-6">
            <FileText className="w-6 h-6" />
            <span className="text-sm font-bold uppercase tracking-wider">Document</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">{document.title}</h1>
          
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-10 border-b border-gray-100 dark:border-neutral-700 pb-8">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">{document.date}</span>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            {document.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
