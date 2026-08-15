import { motion } from 'framer-motion';
import emblem from '../assets/main_2.png';

export default function Cover({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1F1E1D] px-6 overflow-hidden"
    >
      {/* Background Rotating Emblem - Subtle Gold */}
      <motion.div
        animate={{ rotate: 360 }}
        exit={{ scale: 1.2, opacity: 0, transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] opacity-[0.04] pointer-events-none z-0 mix-blend-screen"
      >
        <img src={emblem} alt="" className="w-full h-full object-contain filter invert sepia saturate-200 hue-rotate-15 brightness-150" />
      </motion.div>

      {/* Content Wrapper */}
      <motion.div 
        exit={{ opacity: 0, y: -40, scale: 0.95, filter: "blur(10px)", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="font-serif italic text-xs md:text-sm text-gold/80 mb-8 uppercase tracking-[0.2em]"
        >
          Undangan Menek Kelih & Mepandes
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="font-script text-5xl sm:text-6xl md:text-[5vw] lg:text-[6rem] text-[#FDFBF7] leading-tight font-normal text-center w-full md:whitespace-nowrap my-4 px-2"
        >
          Ni Luh Vanessa <br className="md:hidden" /> Kana Dewi
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <p className="font-serif text-xs md:text-sm text-gold/60 uppercase tracking-widest">Kepada Yth.</p>
          <p className="font-serif text-lg md:text-xl text-[#FDFBF7] font-medium border-b border-gold/30 pb-2 px-10">
            Tamu Undangan
          </p>
        </motion.div>

        {/* Elegant Classic Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.32, 0.72, 0, 1] }}
          onClick={onOpen}
          className="group relative mt-20 pb-2 text-[#FDFBF7] font-serif tracking-[0.25em] text-xs md:text-sm uppercase transition-colors duration-500 hover:text-gold"
        >
          <span>Buka Undangan</span>
          <span className="absolute bottom-0 left-1/2 w-8 h-[1px] bg-gold/50 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full group-hover:bg-gold" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
