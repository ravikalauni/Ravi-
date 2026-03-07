import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { useLanguage } from "../context/LanguageContext";

export default function AboutLipiksaPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg-grid bg-grid-pattern dark:bg-black pt-24 pb-20 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-red-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> {t("lipiksaPage.backHome")}
        </Link>
        
        <SectionLabel text={t("lipiksaPage.title")} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-neutral-700 p-8 md:p-12 mt-8 transition-colors"
        >
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <p className="lead text-xl text-gray-800 dark:text-gray-200 font-medium mb-6">
              {t("lipiksaPage.lead")}
            </p>
            
            <p className="mb-6">
              {t("lipiksaPage.desc1")}
            </p>

            <h3 className="text-2xl font-bold text-brand-red dark:text-red-500 mt-8 mb-4">{t("lipiksaPage.keyComponents")}</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl border border-gray-200 dark:border-neutral-600 transition-colors">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">{t("lipiksaPage.typingTutor")}</h4>
                <p className="text-sm">
                  {t("lipiksaPage.typingTutorDesc")}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl border border-gray-200 dark:border-neutral-600 transition-colors">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">{t("lipiksaPage.translator")}</h4>
                <p className="text-sm">
                  {t("lipiksaPage.translatorDesc")}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl border border-gray-200 dark:border-neutral-600 transition-colors">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">{t("lipiksaPage.eduGames")}</h4>
                <p className="text-sm">
                  {t("lipiksaPage.eduGamesDesc")}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-red dark:text-red-500 mt-8 mb-4">{t("lipiksaPage.vision")}</h3>
            <p>
              {t("lipiksaPage.visionDesc")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
