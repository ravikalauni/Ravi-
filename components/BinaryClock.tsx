
import React, { useState, useEffect } from 'react';

const BinaryClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const toBinary = (num: number, padding: number = 4) => 
    num.toString(2).padStart(padding, '0');

  // Clock labels (1 to 12 in binary)
  const binaryHours = [
    { label: '0001', h: 1, angle: -60 },
    { label: '0010', h: 2, angle: -30 },
    { label: '0011', h: 3, angle: 0 },
    { label: '0100', h: 4, angle: 30 },
    { label: '0101', h: 5, angle: 60 },
    { label: '0110', h: 6, angle: 90 },
    { label: '0111', h: 7, angle: 120 },
    { label: '1000', h: 8, angle: 150 },
    { label: '1001', h: 9, angle: 180 },
    { label: '1010', h: 10, angle: 210 },
    { label: '1011', h: 11, angle: 240 },
    { label: '1100', h: 12, angle: -90 },
  ];

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
      {/* Outer Glow Ring */}
      <div className="absolute inset-0 border-2 border-primary/10 dark:border-primary/20 rounded-full binary-clock-glow"></div>
      
      {/* Animated Second Ring */}
      <div 
        className="absolute inset-4 border border-dashed border-primary/30 rounded-full"
        style={{ transform: `rotate(${seconds * 6}deg)`, transition: 'transform 1s linear' }}
      ></div>

      {/* Binary Hour Labels */}
      <div className="absolute inset-0">
        {binaryHours.map((item, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            style={{ transform: `translate(-50%, -50%) rotate(${item.angle}deg)` }}
          >
            <span 
              className={`absolute top-4 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-mono font-bold transition-all duration-300 ${
                hours === item.h 
                  ? 'text-secondary scale-125 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]' 
                  : 'text-primary dark:text-primary/60 opacity-40'
              }`}
              style={{ transform: `rotate(${-item.angle}deg)` }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Center Digital-Binary Display */}
      <div className="flex flex-col items-center justify-center space-y-2 z-10 bg-white/5 dark:bg-black/5 backdrop-blur-sm p-6 rounded-full border border-primary/10">
        <div className="text-center">
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Current Time</p>
          <p className="text-2xl md:text-3xl font-bold font-mono text-primary">
            {time.toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </p>
        </div>
        <div className="flex gap-3 text-[10px] md:text-xs font-mono text-zinc-500">
          <div className="flex flex-col items-center">
            <span>{toBinary(hours)}</span>
            <span className="text-[8px] opacity-50">HRS</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span>{toBinary(minutes, 6)}</span>
            <span className="text-[8px] opacity-50">MIN</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span className="text-secondary">{toBinary(seconds, 6)}</span>
            <span className="text-[8px] opacity-50">SEC</span>
          </div>
        </div>
      </div>

      {/* Rotating Background Propeller */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
           <path
            d="M 100 100 L 100 20 M 100 100 L 30 140 M 100 100 L 170 140"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <circle cx="100" cy="20" r="3" fill="currentColor" className="text-primary" />
          <circle cx="30" cy="140" r="3" fill="currentColor" className="text-primary" />
          <circle cx="170" cy="140" r="3" fill="currentColor" className="text-primary" />
        </svg>
      </div>
    </div>
  );
};

export default BinaryClock;
