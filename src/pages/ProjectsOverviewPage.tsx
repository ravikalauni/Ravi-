import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Code, Layers } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsOverviewPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg-grid bg-grid-pattern dark:bg-black pt-24 pb-20 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <Link to="/#projects" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-red-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> {t("projectsOverview.backProjects")}
        </Link>
        
        <SectionLabel text={t("projectsOverview.title")} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-neutral-700 p-8 md:p-12 transition-colors">
            <h2 className="text-3xl font-bold text-brand-red dark:text-red-500 mb-6">{t("projectsOverview.projectTypes")}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {t("projectsOverview.projectTypesDesc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl border border-gray-200 dark:border-neutral-600 transition-colors">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">{t("projectsOverview.webApps")}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t("projectsOverview.webAppsDesc")}</p>
              </div>
              <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl border border-gray-200 dark:border-neutral-600 transition-colors">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">{t("projectsOverview.algorithms")}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t("projectsOverview.algorithmsDesc")}</p>
              </div>
              <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl border border-gray-200 dark:border-neutral-600 transition-colors">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">{t("projectsOverview.games")}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t("projectsOverview.gamesDesc")}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-neutral-700 p-8 md:p-12 transition-colors">
            <h2 className="text-3xl font-bold text-brand-red dark:text-red-500 mb-6">{t("projectsOverview.gudiya")}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {t("projectsOverview.gudiyaDesc")}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>{t("projectsOverview.gudiyaList1")}</li>
              <li>{t("projectsOverview.gudiyaList2")}</li>
              <li>{t("projectsOverview.gudiyaList3")}</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-neutral-700 p-8 md:p-12 transition-colors">
            <h2 className="text-3xl font-bold text-brand-red dark:text-red-500 mb-6">{t("projectsOverview.lipiksa")}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {t("projectsOverview.lipiksaDesc")}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="bg-brand-red/10 dark:bg-red-500/20 text-brand-red dark:text-red-500 px-4 py-2 rounded-full font-medium text-sm transition-colors">{t("projectsOverview.typingTutor")}</span>
              <span className="bg-brand-red/10 dark:bg-red-500/20 text-brand-red dark:text-red-500 px-4 py-2 rounded-full font-medium text-sm transition-colors">{t("projectsOverview.translator")}</span>
              <span className="bg-brand-red/10 dark:bg-red-500/20 text-brand-red dark:text-red-500 px-4 py-2 rounded-full font-medium text-sm transition-colors">{t("projectsOverview.eduGames")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
