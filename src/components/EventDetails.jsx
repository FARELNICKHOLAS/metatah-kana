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
              <span className="text-xl font-serif text-text text-center">Griya Agung Lingga Khutawaringin</span>
              <span className="text-sm text-gray-500 text-center mt-2 max-w-[280px]">Br. Dlodtunon, Desa Batuan, Sukawati, Gianyar</span>
            </div>
          </motion.div>
        </div>

        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.7 }}
          href="https://maps.app.goo.gl/efmU9tyK3Q2bXihE9" 
          target="_blank" 
          rel="noreferrer"
          className="mt-8 px-8 py-3 border border-text text-text rounded-full text-sm tracking-widest uppercase hover:bg-text hover:text-white active:scale-[0.96] transition-all duration-300"
        >
          Buka Google Maps
        </motion.a>

        {/* Embedded Map - Seamless/No Card Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="w-full mt-24 h-64 md:h-[400px] relative w-screen max-w-none left-1/2 -translate-x-1/2"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Griya+Agung+Lingga+Khutawaringin,Batuan,Sukawati,Gianyar&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover grayscale-[40%] sepia-[20%] opacity-60 hover:grayscale-0 hover:sepia-0 hover:opacity-100 transition-all duration-1000 ease-out pointer-events-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}
