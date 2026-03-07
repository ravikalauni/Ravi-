import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import React from "react";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import TriangleLoader from "./TriangleLoader";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  const navItems = [
    { key: "about", label: t("nav.about") },
    { key: "skills", label: t("nav.skills") },
    { key: "documents", label: t("nav.documents") },
    { key: "projects", label: t("nav.projects") },
    { key: "contact", label: t("nav.contact") },
  ];

  return (
    <>
      {isLoading && <TriangleLoader />}
      <nav 
        className={`w-full flex justify-between items-center z-50 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md transition-all duration-300 px-6 md:px-12 ${
          isScrolled ? "py-3 shadow-md dark:shadow-neutral-900/50" : "py-6 shadow-sm dark:shadow-none"
        }`}
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: -2 }}
          className={`font-bold tracking-tighter font-serif text-brand-red cursor-pointer transition-all duration-300 ${
            isScrolled ? "text-3xl" : "text-4xl"
          }`}
        >
          Ravi
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex space-x-8 text-sm font-medium uppercase tracking-wide text-gray-800 dark:text-gray-200"
          >
            {navItems.map((item) => (
              <motion.a 
                key={item.key} 
                href={`#${item.key}`} 
                onClick={(e) => handleNavClick(e, item.key)}
                whileHover={{ scale: 1.1, y: -2 }}
                className="hover:text-brand-red dark:hover:text-brand-red transition-colors relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </motion.div>

          <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-700 pl-6">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm font-bold text-brand-red border border-brand-red/20 px-3 py-1 rounded-full hover:bg-brand-red/5 dark:hover:bg-brand-red/10 transition-colors"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'NEP' : 'ENG'}</span>
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-xs font-bold text-brand-red border border-brand-red/20 px-2 py-1 rounded-full"
          >
            <span>{language === 'en' ? 'NEP' : 'ENG'}</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </motion.button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-800 dark:text-gray-200 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-md md:hidden overflow-hidden border-t border-gray-100 dark:border-neutral-800"
            >
              <div className="flex flex-col items-center py-6 space-y-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.key}
                    href={`#${item.key}`}
                    onClick={(e) => handleNavClick(e, item.key)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-lg font-medium uppercase tracking-wide text-gray-800 dark:text-gray-200 hover:text-brand-red dark:hover:text-brand-red transition-colors w-full text-center py-2"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
