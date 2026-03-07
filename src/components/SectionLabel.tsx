import { motion } from "motion/react";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.1, rotate: -2, x: 10 }}
      viewport={{ once: true }}
      className={`bg-brand-red text-white inline-block px-6 py-2 text-2xl font-bold rounded-md shadow-md mb-8 cursor-default ${className}`}
    >
      {text.toUpperCase()}
    </motion.div>
  );
}
