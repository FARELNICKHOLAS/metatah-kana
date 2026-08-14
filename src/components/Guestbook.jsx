import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function Guestbook() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Keluarga Besar Bapak Wayan',
      attendance: 'hadir',
      message: 'Selamat melaksanakan upacara Mepandes & Menek Kelih untuk ananda Vanessa. Semoga acara berjalan lancar dan rahayu.',
      date: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
      id: 2,
      name: 'Agung & Partner',
      attendance: 'tidak_hadir',
      message: 'Mohon maaf kami berhalangan hadir. Doa terbaik untuk Vanessa dan keluarga.',
      date: new Date(Date.now() - 86400000 * 5).toISOString(),
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    attendance: 'hadir',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load from local storage on mount (Simulation for static site)
  useEffect(() => {
    const saved = localStorage.getItem('guestbook_messages');
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      const newMessage = {
        id: Date.now(),
        name: formData.name,
        attendance: formData.attendance,
        message: formData.message,
        date: new Date().toISOString(),
      };

      const newMessages = [newMessage, ...messages];
      setMessages(newMessages);
      localStorage.setItem('guestbook_messages', JSON.stringify(newMessages));
      
      setFormData({ name: '', attendance: 'hadir', message: '' });
      setIsSubmitting(false);
    }, 600);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <section className="relative py-24 px-4 flex flex-col items-center justify-center bg-[#FDFBF7]/50">
      <div className="max-w-2xl w-full mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-text">
            Buku Tamu
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-sm mx-auto">
            Tinggalkan pesan dan doa restu untuk Vanessa.
          </p>
        </motion.div>

        {/* Form Container - Apple Style Glassmorphism */}
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.2 }}
          className="w-full bg-white/60 backdrop-blur-xl border border-white/80 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-16 flex flex-col gap-4"
        >
          <input 
            type="text" 
            placeholder="Nama Anda"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className="w-full px-5 py-4 bg-white/50 border border-gray-200/60 rounded-2xl text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:bg-white transition-all duration-300"
          />
          
          <select 
            value={formData.attendance}
            onChange={(e) => setFormData({...formData, attendance: e.target.value})}
            className="w-full px-5 py-4 bg-white/50 border border-gray-200/60 rounded-2xl text-text focus:outline-none focus:ring-2 focus:ring-gold/40 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
          >
            <option value="hadir">Ya, Saya akan hadir</option>
            <option value="tidak_hadir">Maaf, saya tidak bisa hadir</option>
          </select>

          <textarea 
            placeholder="Tulis pesan dan doa restu..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            rows={4}
            className="w-full px-5 py-4 bg-white/50 border border-gray-200/60 rounded-2xl text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:bg-white transition-all duration-300 resize-none"
          />

          <div className="flex items-center justify-end gap-3 mt-2">
            <button 
              type="button"
              onClick={() => setFormData({ name: '', attendance: 'hadir', message: '' })}
              className="px-6 py-3 rounded-full text-sm font-medium text-gray-500 hover:text-text hover:bg-gray-100 transition-colors"
            >
              Batal
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 rounded-full text-sm font-medium bg-text text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center min-w-[120px]"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Kirim Pesan'
              )}
            </button>
          </div>
        </motion.form>

        {/* Messages List - Animated */}
        <div className="w-full flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {messages.map((msg) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                key={msg.id}
                className="w-full bg-white/40 backdrop-blur-md border border-white/60 p-5 rounded-2xl flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-medium text-text text-lg">{msg.name}</span>
                    {msg.attendance === 'hadir' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 mt-0.5" />
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px] tracking-wider uppercase">{formatDate(msg.date)}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{msg.message}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
