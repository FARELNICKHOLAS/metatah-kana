import { motion } from 'framer-motion';

export default function Meaning() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', bounce: 0, duration: 1 }
    }
  };

  return (
    <section className="relative py-24 px-6 flex flex-col items-center justify-center bg-transparent z-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl w-full mx-auto flex flex-col items-center gap-12"
      >
        
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-medium">Makna Upacara</span>
          <h2 className="text-3xl md:text-4xl font-serif text-text">Sebuah Transisi Suci</h2>
        </motion.div>

        {/* Card Container */}
        <motion.div 
          variants={itemVariants}
          className="w-full relative bg-white/50 backdrop-blur-xl border border-white/70 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-12 md:gap-8"
        >
          {/* Decorative center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2" />

          {/* Menek Kelih Section */}
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <h3 className="font-serif text-2xl text-text">Menek Kelih</h3>
            <div className="w-8 h-px bg-gold/50" />
            <p className="text-text/70 text-sm md:text-base leading-loose font-serif">
              Upacara pendewasaan diri yang menandai masa transisi menuju tahap kedewasaan. Melalui ritual ini, kami memohon bimbingan Sang Pencipta agar ananda mampu memikul tanggung jawab serta menapaki kehidupan dengan pijakan yang teguh.
            </p>
          </div>

          {/* Decorative divider for mobile */}
          <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {/* Mepandes Section */}
          <div className="flex-1 flex flex-col items-center text-center gap-4">
            <h3 className="font-serif text-2xl text-text">Mepandes</h3>
            <div className="w-8 h-px bg-gold/50" />
            <p className="text-text/70 text-sm md:text-base leading-loose font-serif">
              Dikenal juga sebagai upacara potong gigi. Sebuah ritual penyucian diri dengan meratakan enam gigi atas sebagai simbol meredam enam sifat buruk manusia <i className="text-text/60">(Sad Ripu)</i>, agar kelak senantiasa berada di jalan kebaikan.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
