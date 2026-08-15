import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasSetTime = useRef(false);

  // Attempt to Auto-play on mount, and fallback to first interaction
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.5; // Set volume to 50%
    
    const tryPlay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            if (!hasSetTime.current) {
              audioRef.current.currentTime = 116; // Start at 1:56
              hasSetTime.current = true;
            }
            setIsPlaying(true);
          })
          .catch((err) => console.log('Autoplay prevented:', err));
      }
    };

    // Attempt immediate play
    tryPlay();

    // Fallback: Play on first user interaction anywhere on the screen
    const handleFirstInteraction = () => {
      tryPlay();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          if (!hasSetTime.current) {
            audioRef.current.currentTime = 116;
            hasSetTime.current = true;
          }
          setIsPlaying(true);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/wana_prabha.mp3" 
        loop 
        preload="auto"
      />
      
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, type: 'spring' }}
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-center text-gold hover:scale-110 hover:bg-white/80 active:scale-95 transition-all duration-300"
          aria-label="Toggle Background Music"
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Volume2 size={20} strokeWidth={2} />
              {/* Audio waves animation */}
              <span className="absolute w-full h-full rounded-full border border-gold/50 animate-ping opacity-30" style={{ animationDuration: '3s' }} />
            </div>
          ) : (
            <VolumeX size={20} strokeWidth={2} className="opacity-70" />
          )}
        </motion.button>
      </AnimatePresence>
    </>
  );
}
