import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Meaning from './components/Meaning';
import Profiles from './components/Profiles';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import AudioPlayer from './components/AudioPlayer';
import Particles from './components/Particles';
import Cover from './components/Cover';

function App() {
  const [mounted, setMounted] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpened]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#FDFBF7] to-[#EFE3C8] relative font-sans text-text">
      
      <AnimatePresence>
        {!isOpened && <Cover key="cover" onOpen={() => setIsOpened(true)} />}
      </AnimatePresence>

      <Particles />
      
      <div className="relative z-10">
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          >
            <Hero />
            <Meaning />
            <Profiles />
            <EventDetails />
            <RSVP />
          </motion.div>
        )}
      </div>

      <AudioPlayer />
    </div>
  );
}

export default App;
