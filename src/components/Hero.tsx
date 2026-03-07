import { motion } from "motion/react";
import BinaryClock from "./BinaryClock";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-visible mb-20">
      <div className="container mx-auto px-4 mt-12 relative">

        {/* Floating Shapes (Behind Head) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-0 left-[10%] md:left-[15%] w-32 h-20 bg-brand-red rounded-2xl z-0 hidden md:block"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-10 left-[35%] md:left-[32%] w-20 h-20 bg-brand-red rounded-2xl z-0 hidden md:block"
        />

        {/* Profile Image (Overlapping) */}
        {/* We position this absolutely so it sits on top of the banner boundary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.6 }}
          className="absolute top-[-40px] left-[50%] md:left-[25%] transform -translate-x-1/2 z-20 w-64 h-80 md:w-80 md:h-96 cursor-pointer"
        >
          {/* Image Mask/Cutout Simulation */}
          <div className="w-full h-full relative">
            <img
              src="/images/profile.png"
              alt="Ravi Profile"
              className="w-full h-full object-cover rounded-b-full md:rounded-b-[4rem] rounded-t-[4rem] shadow-2xl border-3 border-blue transition-all duration-300 hover:shadow-brand-red/50"
            />
          </div>
        </motion.div>

        {/* Main Red Banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-brand-red rounded-[3rem] w-full min-h-[500px] md:min-h-[600px] relative z-10 flex flex-col md:flex-row overflow-hidden shadow-2xl mt-0 md:mt-1"
        >

          {/* Left Side (Empty space for profile + Quote) */}
          <div className="flex-1 flex flex-col justify-end p-8 md:p-16 relative">
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-64 md:mt-0 relative z-30"
            >
              <h1 className="font-serif italic text-3xl md:text-5xl text-white leading-tight drop-shadow-md">
                {t("hero.quote")}
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-1.5 bg-white/50 mt-6 rounded-full max-w-md"
              />
            </motion.div>
          </div>

          {/* Right Side (Clock) */}
          <div className="flex-1 flex items-center justify-center p-8 md:p-16 bg-brand-red relative">
            {/* Subtle separator line or gradient if needed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <BinaryClock />
            </motion.div>
          </div>

          {/* Decorative Grid inside the red banner */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] pointer-events-none mix-blend-overlay"></div>
        </motion.div>

      </div>
    </section>
  );
}
