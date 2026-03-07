import SectionLabel from "./SectionLabel";
import { Hash } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import React from "react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 container mx-auto px-4">
      <SectionLabel text={t("about.title")} />
      
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-brand-red dark:text-red-500 mb-6 leading-none tracking-tight">
            {t("about.name").split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t("about.name").split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
            {t("about.description")}
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="lg:w-2/3 w-full bg-brand-red text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden cursor-pointer"
        >
          
          {/* Big Hash Icon */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="text-white/10 absolute -right-20 -bottom-20"
          >
             <Hash size={400} />
          </motion.div>
          
          <div className="flex-shrink-0 bg-white text-brand-red p-6 rounded-2xl shadow-lg z-10">
             <Hash size={80} strokeWidth={4} />
          </div>

          <div className="flex flex-col space-y-8 z-10 w-full pt-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold opacity-80 mb-1 uppercase tracking-wider text-xs">{t("about.addressTitle")}</h3>
              <p className="text-2xl font-bold">{t("about.address")}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold opacity-80 mb-1 uppercase tracking-wider text-xs">{t("about.ageTitle")}</h3>
              <p className="text-2xl font-bold">{t("about.age")}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold opacity-80 mb-1 uppercase tracking-wider text-xs">{t("about.educationTitle")}</h3>
              <p className="text-2xl font-bold">{t("about.education")}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
