import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function BinaryClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate degrees for rotation
  // Hours: 360 degrees / 12 hours = 30 degrees per hour
  // Add minutes contribution: 30 degrees * (minutes / 60) = 0.5 degrees per minute
  const hourDegrees = (hours * 30) + (minutes * 0.5);

  // Minutes: 360 degrees / 60 minutes = 6 degrees per minute
  // Add seconds contribution: 6 degrees * (seconds / 60) = 0.1 degrees per second
  const minuteDegrees = (minutes * 6) + (seconds * 0.1);

  // Seconds: 360 degrees / 60 seconds = 6 degrees per second
  const secondDegrees = seconds * 6;

  // Binary representation for clock numbers 12 to 11
  // We map 0-11 index to clock positions. 
  // 12 is at top (0 deg), 1 at 30 deg, etc.
  const binaryNumbers = [
    { num: 12, bin: "1100", angle: 0 },
    { num: 1, bin: "0001", angle: 30 },
    { num: 2, bin: "0010", angle: 60 },
    { num: 3, bin: "0011", angle: 90 },
    { num: 4, bin: "0100", angle: 120 },
    { num: 5, bin: "0101", angle: 150 },
    { num: 6, bin: "0110", angle: 180 },
    { num: 7, bin: "0111", angle: 210 },
    { num: 8, bin: "1000", angle: 240 },
    { num: 9, bin: "1001", angle: 270 },
    { num: 10, bin: "1010", angle: 300 },
    { num: 11, bin: "1011", angle: 330 },
  ];

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative w-70 h-70 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full border-[8px] border-white bg-brand-red shadow-[0_0_80px_rgba(255,255,255,0.4),inset_0_0_50px_rgba(0,0,0,0.2)] flex items-center justify-center cursor-pointer"
    >
      {/* Clock Face Numbers */}
      {binaryNumbers.map((item) => {
        // Calculate position based on angle
        // -90 adjustment because 0 degrees is usually 3 o'clock in trig, but we want 12 o'clock
        const angleRad = (item.angle - 90) * (Math.PI / 180);
        const radius = 40; // percentage from center
        const x = 50 + radius * Math.cos(angleRad);
        const y = 50 + radius * Math.sin(angleRad);

        return (
          <div
            key={item.num}
            className="absolute text-white font-mono text-sm md:text-base lg:text-lg font-bold tracking-widest"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              textShadow: "0 0 8px rgba(255,255,255,0.5)"
            }}
          >
            {item.bin}
          </div>
        );
      })}

      {/* Inner Ring Decoration */}
      <div className="absolute w-[70%] h-[70%] rounded-full border border-white/10"></div>
      <div className="absolute w-[90%] h-[90%] rounded-full border border-white/5"></div>

      {/* Center Dot */}
      <div className="absolute w-6 h-6 bg-white rounded-full z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>

      {/* Hands Container - Relative to center */}
      <div className="absolute inset-0">
        {/* Hour Hand */}
        <div
          className="absolute top-1/2 left-1/2 w-2 md:w-3 bg-white rounded-full origin-bottom z-10 shadow-md"
          style={{
            height: "25%",
            transform: `translate(-50%, -100%) rotate(${hourDegrees}deg)`,
          }}
        />

        {/* Minute Hand */}
        <div
          className="absolute top-1/2 left-1/2 w-1.5 md:w-2 bg-white/90 rounded-full origin-bottom z-10 shadow-md"
          style={{
            height: "35%",
            transform: `translate(-50%, -100%) rotate(${minuteDegrees}deg)`,
          }}
        />

        {/* Second Hand */}
        <div
          className="absolute top-1/2 left-1/2 w-1 bg-red-200 rounded-full origin-bottom z-10"
          style={{
            height: "40%",
            transform: `translate(-50%, -100%) rotate(${secondDegrees}deg)`,
          }}
        />
      </div>

      {/* Glass Reflection Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
    </motion.div>
  );
}