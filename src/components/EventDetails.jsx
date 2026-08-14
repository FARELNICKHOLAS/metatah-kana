import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import separator from '../assets/main_1.png';

export default function EventDetails() {
  return (
    <section className="relative min-h-[80vh] py-24 px-4 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full mx-auto relative z-10 flex flex-col items-center gap-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-text">
            Detail Acara
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-sm mx-auto">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 w-full max-w-sm items-center">
          {/* Date */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full border border-gold/30 text-gold flex items-center justify-center">
              <Calendar size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm text-gold uppercase tracking-[0.2em] font-medium">Tanggal</span>
              <span className="text-xl font-serif text-text">Kamis, 10 September 2026</span>
            </div>
          </motion.div>

          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            src={separator} 
            alt="" 
            className="w-32 opacity-60" 
          />

          {/* Time */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full border border-gold/30 text-gold flex items-center justify-center">
              <Clock size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm text-gold uppercase tracking-[0.2em] font-medium">Waktu</span>
              <span className="text-xl font-serif text-text tabular-nums">09:00 WITA - Selesai</span>
            </div>
          </motion.div>

          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            src={separator} 
            alt="" 
            className="w-32 opacity-60" 
          />

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full border border-gold/30 text-gold flex items-center justify-center">
              <MapPin size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm text-gold uppercase tracking-[0.2em] font-medium">Tempat</span>
              <span className="text-xl font-serif text-text text-center">Br. Dlodtunon, Desa Batuan</span>
              <span className="text-sm text-gray-500 text-center mt-2 max-w-[280px]">Jln Raya Sukawati, Sukawati, Gianyar, Bali</span>
            </div>
          </motion.div>
        </div>

        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.7 }}
          href="https://www.google.com/maps/search/?api=1&query=Jln+Raya+Sukawati+Br.+Dlodtunon+Desa+Batuan+Sukawati+Gianyar+Bali" 
          target="_blank" 
          rel="noreferrer"
          className="mt-8 px-8 py-3 border border-text text-text rounded-full text-sm tracking-widest uppercase hover:bg-text hover:text-white active:scale-[0.96] transition-all duration-300"
        >
          Buka Google Maps
        </motion.a>

      </div>
    </section>
  );
}
