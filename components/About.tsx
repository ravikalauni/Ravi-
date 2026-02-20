
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">About me</h2>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div className="relative group">
          <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-primary/20 rounded-full -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/30 bg-zinc-100 dark:bg-zinc-800">
            <img 
              src="https://picsum.photos/seed/ravi-portrait/400/400" 
              alt="Ravi Kalauni" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full shadow-lg border-4 border-white dark:border-zinc-950"></div>
        </div>

        <div className="flex-1 p-8 rounded-2xl border-2 border-primary/20 bg-primary/5 dark:bg-primary/10">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg md:text-xl font-medium italic">
            "I am Ravi Kalauni, a BCA student with an interest in web development and UI design. I work with HTML, CSS, and JavaScript to build functional and user-friendly web applications. I have experience in academic and real-world projects, along with teaching basic computer applications and contributing to a digital marketing startup. I aim to continuously improve my skills and develop practical software solutions."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl border-2 border-primary/20 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-primary/5 dark:hover:bg-primary/5 transition-colors group">
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-3 h-3 rounded-full bg-primary flex-shrink-0"></span>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">Full Stack architecture</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">React, Next.js, Node.js, and Python, including AI/ML integration</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-3 h-3 rounded-full bg-primary flex-shrink-0"></span>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">Performance optimization</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">performance optimization, building scalable systems with high availability (99.99% uptime) and sub-second load times</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl border-2 border-primary/20 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-primary/5 dark:hover:bg-primary/5 transition-colors group flex flex-col justify-center">
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-3 h-3 rounded-full bg-primary flex-shrink-0"></span>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">Revenue generation</h3>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-3 h-3 rounded-full bg-primary flex-shrink-0"></span>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">User experience</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
