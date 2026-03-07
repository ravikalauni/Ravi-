import SectionLabel from "./SectionLabel";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 container mx-auto px-4">
      <SectionLabel text={t("projects.title")} />
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            variants={item}
            whileHover={{ y: -15, scale: 1.02 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-neutral-700 group"
          >
            <div className="h-64 overflow-hidden relative bg-gray-100 dark:bg-neutral-700">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                {project.type}
              </div>
              <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/20 transition-colors duration-500"></div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-brand-red dark:text-red-500 mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-2 font-medium">{project.description}</p>
              <Link 
                to={`/projects/${project.id}`}
                className="inline-block bg-brand-red text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-dark transition-colors shadow-md uppercase tracking-wide text-sm"
              >
                {t("projects.viewProject")}
              </Link>
            </div>
          </motion.div>
        ))}

        <motion.div 
          variants={item}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="bg-brand-red rounded-2xl overflow-hidden shadow-lg flex items-center justify-center min-h-[350px] p-8 text-center group relative cursor-pointer"
        >
           <Link to="/projects/overview" className="absolute inset-0 z-20"></Link>
           <div className="absolute inset-0 border-4 border-white/10 m-4 rounded-xl pointer-events-none transition-all group-hover:border-white/30"></div>
           <div className="z-10 flex flex-col items-center">
             <div className="w-24 h-24 rounded-full border-4 border-white/30 flex items-center justify-center mb-6 text-white text-5xl font-serif italic group-hover:bg-white group-hover:text-brand-red transition-colors duration-300">
               i
             </div>
             <button className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-red transition-all duration-300 shadow-lg uppercase tracking-wider text-sm pointer-events-none">
               {t("projects.knowMore")}
             </button>
           </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
