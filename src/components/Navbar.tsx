import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter uppercase flex items-center gap-2 group">
            <span className="text-red-600 transition-colors duration-500">JDM</span> 
            <span className="text-white group-hover:text-zinc-300 transition-colors duration-500">Prestige</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase">
            {['Services', 'Processus', 'Stock'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group overflow-hidden">
                <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">{item}</span>
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </a>
            ))}
            <a href="#contact" className="px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors duration-300 rounded-sm">
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 -mr-2 text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-zinc-950 px-6 pt-32 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-8">
              {['Services', 'Processus', 'Stock', 'Contact'].map((item, i) => (
                <motion.a 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-display font-bold uppercase tracking-tighter ${item === 'Contact' ? 'text-red-600 mt-8' : 'text-white'}`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-zinc-500 uppercase tracking-widest"
            >
              L'Excellence Nippone
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
