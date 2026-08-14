import { motion } from 'framer-motion';
import borderTop from '../assets/border_1.png';
import borderBottom from '../assets/border_2.png';

export default function Profiles() {
  return (
    <section className="relative min-h-[80vh] py-24 px-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto relative flex flex-col items-center">
        
        {/* Top Ornament */}
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          src={borderTop} 
          alt="" 
          className="w-full max-w-[200px] md:max-w-[280px] object-contain mb-16"
        />

        <div className="flex flex-col gap-12 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <div className="flex flex-col items-center w-full">
              {/* The Daughter's Name */}
              <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-text mb-8">
                Ni Luh Vanessa Kana Dewi
              </h2>
              
              {/* The "Anak Dari" text */}
              <div className="flex items-center gap-4 w-full max-w-xs mb-10 opacity-80">
                <div className="h-[1px] w-full bg-gold/40"></div>
                <span className="text-[10px] md:text-xs tracking-[0.3em] font-serif text-text/80 uppercase whitespace-nowrap">
                  Putri Dari
                </span>
                <div className="h-[1px] w-full bg-gold/40"></div>
              </div>

              {/* Parents Container */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
                
                {/* Father */}
                <div className="flex flex-col items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-serif text-text tracking-wide">
                    I Made Harri Purwana
                  </h3>
                  <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold uppercase">
                    Ayah
                  </span>
                </div>
                
                {/* Ampersand */}
                <span className="font-script text-4xl md:text-5xl text-gold/60 mx-2 my-2 md:my-0">
                  &
                </span>
                
                {/* Mother */}
                <div className="flex flex-col items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-serif text-text tracking-wide">
                    Natalia Maya Handoko
                  </h3>
                  <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold uppercase">
                    Ibu
                  </span>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Ornament */}
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.4 }}
          src={borderBottom} 
          alt="" 
          className="w-full max-w-[200px] md:max-w-[280px] object-contain mt-16"
        />

      </div>
    </section>
  );
}
