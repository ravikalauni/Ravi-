import SectionLabel from "./SectionLabel";
import { ArrowRight, FileText, Loader2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useDocuments } from "../hooks/useDocuments";

export default function Documents() {
  const { t } = useLanguage();
  const { documents, loading, error } = useDocuments();

  // Get the most recent document
  const latestDoc = documents.length > 0 ? documents[0] : null;

  return (
    <section id="documents" className="py-20 container mx-auto px-4">
      <SectionLabel text={t("documents.title")} />
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-gray-500 dark:text-gray-400 mb-8 -mt-6 italic font-medium"
      >
        {t("documents.subtitle")}
      </motion.p>

      <div className="w-full max-w-4xl">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider text-xs">{t("documents.latest")}</h3>

        {loading ? (
          <div className="bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-neutral-800 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center min-h-[300px]">
            <Loader2 className="w-8 h-8 text-brand-red animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Loading latest document...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-8 md:p-10 rounded-2xl flex items-center space-x-4 text-red-600 dark:text-red-400">
            <AlertCircle className="w-6 h-6 shrink-0" />
            <p className="font-medium">Failed to load documents: {error}</p>
          </div>
        ) : latestDoc ? (
          <Link to={`/documents/${latestDoc.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="bg-brand-red text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden group cursor-pointer transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform rotate-12">
                <FileText size={200} />
              </div>

              <h4 className="text-3xl font-bold mb-4 group-hover:underline underline-offset-4 decoration-2">{latestDoc.title}</h4>
              <p className="opacity-90 leading-relaxed mb-8 text-lg max-w-2xl">
                {latestDoc.preview}
              </p>

              <div className="flex items-center text-sm font-bold opacity-75 uppercase tracking-widest">
                <span>{latestDoc.date}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="ml-3 w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        ) : (
          <div className="bg-gray-50 dark:bg-neutral-800/50 p-8 md:p-10 rounded-2xl text-center text-gray-500">
            No documents available yet.
          </div>
        )}

        <Link to="/documents">
          <motion.button
            whileHover={{ x: 5 }}
            className="mt-6 text-brand-red dark:text-red-500 font-bold hover:underline underline-offset-4 flex items-center"
          >
            {t("documents.seeMore")} <ArrowRight className="ml-1 w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
