
import React from 'react';
import { SKILL_GROUPS } from '../constants.tsx';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950/40 rounded-3xl my-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">My skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_GROUPS.map((group, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              {group.category}
            </h3>
            
            <div className="space-y-6">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-mono text-xs">{skill.icon}</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                    </div>
                    <span className="text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-green-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
