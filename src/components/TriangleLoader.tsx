import { motion } from "motion/react";

export default function TriangleLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm transition-colors duration-300">
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M50 15 L90 85 L10 85 Z"
          fill="none"
          stroke="#EF4444" // brand-red
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        />
        <motion.path
          d="M50 15 L90 85 L10 85 Z"
          fill="#EF4444"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180, 360],
            transition: {
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }}
          style={{ originX: "50px", originY: "55px" }} // Approximate center
        />
      </motion.svg>
    </div>
  );
}
