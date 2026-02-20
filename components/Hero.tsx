
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import BinaryClock from './BinaryClock';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fadeIn">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Hi,<br />
              I'm <span className="text-primary">Ravi Kalauni</span>
            </h1>
            
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium text-sm md:text-base">
              Studying Bachelors in Computer Application (BCA)
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-transform active:scale-95 shadow-lg shadow-secondary/20"
            >
              Contact me
            </a>
            <a 
              href="/cv.pdf" 
              className="px-8 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-2 border-primary/40 font-bold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all active:scale-95"
            >
              View CV
            </a>
          </div>

          <div className="flex space-x-4">
            {[
              // Fix: Pass component references instead of elements to avoid React.cloneElement typing issues
              { Icon: Github, href: "https://github.com", color: "bg-[#0a3622] text-primary" },
              { Icon: Linkedin, href: "https://linkedin.com", color: "bg-[#0a3622] text-primary" },
              { Icon: Mail, href: "mailto:ravi@example.com", color: "bg-[#0a3622] text-primary" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all hover:-translate-y-1 ${social.color}`}
              >
                {/* Fix: Directly render the icon component with the desired size */}
                <social.Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-slideInRight">
          <BinaryClock />
        </div>
      </div>
      <hr className="mt-16 border-t-2 border-primary/20" />
    </section>
  );
};

export default Hero;
