
import React from 'react';
import { PROJECTS } from '../constants.tsx';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Projects</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          A showcase of my latest work, featuring cutting-edge technologies and innovative solutions for real clients across various industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="aspect-[3/2] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="p-3 bg-white text-zinc-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </button>
                <button className="p-3 bg-white text-zinc-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Github size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{project.title}</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">{project.category}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="px-10 py-3 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all active:scale-95 shadow-lg shadow-primary/5">
          See All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
