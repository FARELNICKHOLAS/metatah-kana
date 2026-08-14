import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: 100 + Math.random() * 20, // Start slightly below screen
      duration: Math.random() * 15 + 15,
      delay: Math.random() * -20, // Negative delay so some start already mid-screen
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-tr from-[#CBA135] to-[#E5C97A] shadow-[0_0_10px_rgba(203,161,53,0.8)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            willChange: 'transform, opacity'
          }}
          animate={{
            y: [0, -1200],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
