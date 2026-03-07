import SectionLabel from "./SectionLabel";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contact from Portfolio: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=unotat5@gmail.com&su=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 container mx-auto px-4">
      <SectionLabel text={t("contact.title")} />
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-brand-red dark:text-red-500 text-2xl mb-12 font-bold"
      >
        {t("contact.subtitle")}
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Social Links */}
        <div className="flex gap-6 lg:flex-col lg:w-1/4">
          <motion.a 
            href="https://www.linkedin.com/in/ravi-kalauni-66044731b/" 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start group"
          >
            <div className="w-32 h-32 bg-brand-red rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:bg-red-700 transition-colors mb-4">
              <Linkedin size={50} />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-brand-red dark:group-hover:text-red-500 pl-2">{t("contact.linkedin")}</span>
          </motion.a>

          <motion.a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=unotat5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center lg:items-start group"
          >
            <div className="w-32 h-32 bg-brand-red rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:bg-red-700 transition-colors mb-4">
              <Mail size={50} />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-brand-red dark:group-hover:text-red-500 pl-2">{t("contact.email")}</span>
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="flex-1 bg-brand-red p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.namePlaceholder")}
                required
                className="w-full bg-white p-5 rounded-xl text-gray-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-4 focus:ring-red-900/30 transition-all"
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.emailPlaceholder")}
                required
                className="w-full bg-white p-5 rounded-xl text-gray-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-4 focus:ring-red-900/30 transition-all"
              />
            </div>
            <div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.messagePlaceholder")}
                rows={6}
                required
                className="w-full bg-white p-5 rounded-xl text-gray-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-4 focus:ring-red-900/30 resize-none transition-all"
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-brand-dark text-white font-bold py-5 rounded-xl hover:bg-white hover:text-brand-red transition-all duration-300 uppercase tracking-widest shadow-lg text-lg"
            >
              {t("contact.send")}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
