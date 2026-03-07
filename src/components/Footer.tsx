import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const closePopup = () => setActivePopup(null);

  return (
    <>
      <footer className="bg-brand-red text-white pt-20 pb-0 mt-20 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-end justify-between relative z-10 pb-12">

          {/* Left: Profile Cutout Bottom */}
          <motion.div
            whileHover={{ y: -10 }}
            className="hidden md:block absolute bottom-12 left-10 w-70 h-70 pointer-events-none"
          >
            <div className="w-full h-full rounded-t-full overflow-hidden relative translate-y-1/4">
              <img
                src="/images/profile.png"
                alt="Profile Footer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-red/50 mix-blend-multiply"></div>
            </div>
          </motion.div>

          {/* Spacer for the image on desktop */}
          <div className="hidden md:block w-64"></div>

          {/* Center/Right: Links & Copyright */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-end w-full md:w-auto pl-0 md:pl-12 ml-auto">

            <div className="flex flex-col space-y-2 text-sm font-medium">
              <div className="font-serif italic text-2xl mb-4 opacity-80">{t("about.name").replace(/\n/g, " ")}</div>
              <div className="opacity-60">2026 {t("footer.rights")}</div>
            </div>

            <div className="flex gap-12 text-sm underline underline-offset-4">
              <div className="flex flex-col space-y-2">
                <Link to="/documents" className="hover:text-red-200 block transition-colors">{t("footer.documents")}</Link>
                <button onClick={() => setActivePopup("experience")} className="text-left hover:text-red-200 block transition-colors">{t("footer.experience")}</button>
                <a href="https://brixtoncollege.edu.np" target="_blank" rel="noopener noreferrer" className="hover:text-red-200 block transition-colors">{t("footer.college")}</a>
              </div>
              <div className="flex flex-col space-y-2">
                <Link to="/projects/overview" className="hover:text-red-200 block transition-colors">{t("footer.projects")}</Link>
                <button onClick={() => setActivePopup("gudiya")} className="text-left hover:text-red-200 block transition-colors">{t("footer.gudiya")}</button>
                <Link to="/about-lipiksa" className="hover:text-red-200 block transition-colors">{t("footer.lipiksa")}</Link>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-brand-dark"></div>
      </footer>

      {/* Popups */}
      <AnimatePresence>
        {activePopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-8 max-w-md w-full relative z-10 shadow-2xl"
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center py-8">
                {activePopup === "experience" && (
                  <>
                    <h3 className="text-2xl font-bold text-brand-red dark:text-red-500 mb-4">{t("footer.experience")}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">{t("footer.comingSoon")}</p>
                  </>
                )}

                {activePopup === "gudiya" && (
                  <>
                    <h3 className="text-2xl font-bold text-brand-red dark:text-red-500 mb-4">{t("footer.gudiya")}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">{t("footer.noInfo")}</p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
