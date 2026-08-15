import { motion } from 'framer-motion';
import ornament from '../assets/border_1.png'; // Assuming border_1 or main_1 is an elegant ornament

export default function Meaning() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative py-32 px-6 flex flex-col items-center justify-center overflow-hidden z-10">
      
      {/* Subtle organic background glow - Not "AI" looking, just a soft ambient light */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] aspect-square bg-gold/10 rounded-full blur-[100px] pointer-events-none z-0"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl w-full mx-auto flex flex-col items-center gap-24 relative z-10"
      >
        
        {/* Connecting Ornament */}
        <motion.div variants={textVariants} className="flex flex-col items-center gap-3 -mt-20 mb-8">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 80 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-px bg-gradient-to-b from-transparent to-gold/50" 
          />
          <img src={emblem} alt="" className="w-8 h-8 opacity-60 animate-[spin_15s_linear_infinite]" />
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 80 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-px bg-gradient-to-b from-gold/50 to-transparent" 
          />
        </motion.div>

        {/* Title */}
        <motion.div variants={textVariants} className="text-center space-y-6 -mt-12">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium">Makna Upacara</span>
          <h2 className="text-4xl md:text-5xl font-serif text-text font-light tracking-wide">Sebuah Transisi Suci</h2>
          <div className="w-px h-16 bg-gold/40 mx-auto mt-8" />
        </motion.div>

        {/* Editorial Layout without cards */}
        <div className="w-full flex flex-col gap-24 md:gap-32">
          
          {/* Menek Kelih Section */}
          <motion.div variants={textVariants} className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right">
              <h3 className="font-serif text-3xl text-text">Menek Kelih</h3>
              <span className="text-gold font-script text-3xl mt-2 opacity-80">Kedewasaan</span>
            </div>
            <div className="hidden md:block w-px h-32 bg-gold/30 mt-2" />
            <div className="md:w-1/2">
              <p className="text-text/70 text-base leading-[2.2] font-serif text-center md:text-left">
                Upacara pendewasaan diri yang menandai masa transisi menuju tahap kedewasaan. Melalui ritual ini, kami memohon bimbingan Sang Pencipta agar ananda mampu memikul tanggung jawab serta menapaki kehidupan dengan pijakan yang teguh dan pikiran yang jernih.
              </p>
            </div>
          </motion.div>

          {/* Mepandes Section */}
          <motion.div variants={textVariants} className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16">
            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-serif text-3xl text-text">Mepandes</h3>
              <span className="text-gold font-script text-3xl mt-2 opacity-80">Penyucian</span>
            </div>
            <div className="hidden md:block w-px h-32 bg-gold/30 mt-2" />
            <div className="md:w-1/2">
              <p className="text-text/70 text-base leading-[2.2] font-serif text-center md:text-right">
                Dikenal juga sebagai upacara potong gigi. Sebuah ritual suci meratakan enam gigi atas sebagai simbol meredam enam sifat buruk manusia <i className="text-text/50">(Sad Ripu)</i>, agar kelak senantiasa dikaruniai kelembutan hati dan kebijaksanaan dalam bertindak.
              </p>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
