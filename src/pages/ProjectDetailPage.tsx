import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Code, Layers } from "lucide-react";
import { projects } from "../data/projects";
import SectionLabel from "../components/SectionLabel";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { t } = useLanguage();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-grid bg-grid-pattern dark:bg-neutral-900 transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Project Not Found</h2>
          <Link to="/" className="text-brand-red dark:text-red-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-grid bg-grid-pattern dark:bg-black pt-24 pb-20 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <Link to="/#projects" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-red-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> {t("projectDetail.backProjects")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-neutral-700 mb-8 transition-colors">
            <div className="h-64 md:h-96 overflow-hidden relative bg-gray-100 dark:bg-neutral-700 transition-colors">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                {project.type}
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-red dark:text-red-500 mb-6">{project.title}</h1>
              
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-8">
                <p>{project.longDescription}</p>
              </div>

              {project.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                    <Layers className="w-5 h-5 mr-2 text-brand-red dark:text-red-500" /> {t("projectDetail.features")}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-brand-red dark:text-red-500" /> {t("projectDetail.technologies")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-neutral-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.link && project.link !== "#" && (
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-neutral-700 transition-colors">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand-red dark:bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-dark dark:hover:bg-red-700 transition-colors shadow-md uppercase tracking-wide text-sm"
                  >
                    {t("projectDetail.visitLink")} <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
