import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { useLanguage } from "../context/LanguageContext";
import { useDocuments } from "../hooks/useDocuments";

export default function DocumentsPage() {
  const { t } = useLanguage();
  const { documents, loading, error } = useDocuments();

  return (
    <div className="min-h-screen bg-bg-grid bg-grid-pattern dark:bg-black pt-24 pb-20 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" state={{ targetId: "documents" }} className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-red-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> {t("documentsPage.backHome")}
        </Link>

        <SectionLabel text={t("documentsPage.title")} />

        <div className="grid gap-8 mt-12">
          {loading ? (
            <div className="bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-neutral-800 p-12 rounded-2xl shadow-sm flex flex-col items-center justify-center">
              <Loader2 className="w-8 h-8 text-brand-red animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading documents...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-8 rounded-2xl flex items-center space-x-4 text-red-600 dark:text-red-400">
              <AlertCircle className="w-6 h-6 shrink-0" />
              <p className="font-medium">Failed to load documents: {error}</p>
            </div>
          ) : documents.length === 0 ? (
            <div className="bg-gray-50 dark:bg-neutral-800/50 p-12 rounded-2xl text-center text-gray-500 border border-gray-100 dark:border-neutral-800">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="font-medium text-lg">No documents found.</p>
            </div>
          ) : (
            documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-neutral-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3 text-gray-400 dark:text-gray-500">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">{doc.date}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{doc.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{doc.preview}</p>

                <Link
                  to={`/documents/${doc.id}`}
                  className="inline-flex items-center text-brand-red dark:text-red-500 font-bold hover:underline underline-offset-4 group"
                >
                  {t("documentsPage.readDocument")} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
