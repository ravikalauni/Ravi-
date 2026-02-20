
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 px-4 bg-zinc-900 dark:bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Get in touch</h2>
            <p className="text-zinc-400 text-lg">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-800 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">Email</p>
                  <p className="font-semibold">ravi.kalauni@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-800 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">Phone</p>
                  <p className="font-semibold">+977 98XXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-800 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">Location</p>
                  <p className="font-semibold">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about project" 
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Your message here..." 
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-primary hover:bg-green-600 text-zinc-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <hr className="border-zinc-800 mb-10" />
        
        <div className="flex flex-col md:row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Ravi Kalauni. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
