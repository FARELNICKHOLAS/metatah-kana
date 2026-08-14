import { motion } from 'framer-motion';
import baliPagoda from '../assets/bali-pagoda.jpg';

export default function RSVP() {
  return (
    <section className="relative py-32 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image with Seamless Mask Blending */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.2] mix-blend-luminosity pointer-events-none"
        style={{ 
          backgroundImage: `url(${baliPagoda})`,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)'
        }}
      />

      <div className="max-w-2xl w-full mx-auto relative z-10 flex flex-col items-center text-center gap-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-text">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Untuk mempersiapkan acara dengan sebaik-baiknya, kami mohon kesediaan Bapak/Ibu/Saudara/i untuk mengkonfirmasi kehadiran melalui tombol di bawah ini.
          </p>
        </motion.div>

        <motion.a
          href="https://wa.me/6281237422998?text=Halo%2C%20saya%20ingin%20mengkonfirmasi%20kehadiran%20untuk%20acara%20Mepandes%20%26%20Menek%20Kelih."
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.2 }}
          className="group relative px-10 py-4 border-2 border-text bg-text text-white rounded-full text-xs md:text-sm tracking-[0.2em] uppercase font-medium hover:bg-transparent hover:text-text active:scale-[0.98] transition-all duration-500 overflow-hidden"
        >
          Konfirmasi via WhatsApp
        </motion.a>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 text-sm text-text/80 font-serif italic text-lg"
        >
          Om Shanti Shanti Shanti Om
        </motion.p>
      </div>
    </section>
  );
}
