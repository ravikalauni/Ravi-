import SectionLabel from "./SectionLabel";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  const { t } = useLanguage();

  const skillsData = [
    {
      category: t("skills.frontend"),
      items: ["React/Next.js", "Typescript", "Tailwind CSS", "Three.js"],
    },
    {
      category: t("skills.backend"),
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      category: t("skills.modernTech"),
      items: ["AI/ML integration", "Blockchain/web3", "Cloud platforms", "DevOps"],
    },
    {
      category: t("skills.creativity"),
      items: ["Adobe Premiere pro", "Adobe After effects", "Adobe Photoshop", "Adobe Illustrator"],
    },
  ];

  return (
    <section id="skills" className="py-20 container mx-auto px-4">
      <SectionLabel text={t("skills.title")} />
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            variants={item}
            whileHover={{ y: -10, scale: 1.05, rotate: 1 }}
            className="bg-brand-red text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-300 flex flex-col h-full cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-6 border-b-2 border-white/20 pb-3 uppercase tracking-wide">{skill.category}</h3>
            <ul className="space-y-3 flex-grow">
              {skill.items.map((item, i) => (
                <li key={i} className="text-lg font-medium opacity-90 hover:opacity-100 hover:translate-x-2 transition-transform cursor-default flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-50"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
