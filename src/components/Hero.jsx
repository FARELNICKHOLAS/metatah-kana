import { motion } from 'framer-motion';
import emblem from '../assets/main_2.png';
import photo from '../assets/foto_kana.jpeg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 pb-32 overflow-hidden px-6">

      {/* Rotating Background Emblem */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-[0.07] pointer-events-none z-0"
      >
        <img src={emblem} alt="" className="w-full h-full object-contain" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center w-full mx-auto mt-16 overflow-hidden">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif italic text-sm md:text-base mb-4"
        >
          Upacara Mepandes & Menek Kelih
        </motion.span>

        {/* Names in Script */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center my-8 w-full overflow-visible"
        >
          <h1 className="font-script text-5xl sm:text-6xl md:text-[6vw] lg:text-[7vw] xl:text-[8vw] 2xl:text-[9rem] text-text leading-tight font-normal text-center w-full md:whitespace-nowrap px-4">
            Ni Luh Vanessa <br className="md:hidden" /> Kana Dewi
          </h1>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col items-center gap-1 mt-12 mb-12"
        >
          <span className="font-serif text-sm md:text-base tracking-[0.2em] uppercase">
            Kamis
          </span>
          <span className="font-serif text-base md:text-lg tracking-[0.1em]">
            10 September 2026
          </span>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-serif italic text-xs md:text-sm text-text/70 leading-relaxed max-w-sm mb-6"
        >
          "Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa, kami memohon doa restu untuk melaksanakan Upacara Mepandes & Menek Kelih anak kami."
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-serif italic text-sm text-gold font-medium"
        >
          Om Shanti Shanti Shanti Om
        </motion.span>

        {/* Photo Slot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="mt-16 w-full max-w-xs md:max-w-sm aspect-[3/4] relative rounded-t-[1000px] overflow-hidden border border-gold/60 p-2 shadow-2xl shadow-gold/10"
        >
          <img 
            src={photo} 
            alt="Ni Luh Vanessa Kana Dewi" 
            className="w-full h-full rounded-t-[1000px] object-cover object-top"
          />
        </motion.div>

      </div>
    </section>
  );
}
