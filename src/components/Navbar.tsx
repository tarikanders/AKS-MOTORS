import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Magnetic } from './fx/Magnetic';

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Processus', href: '#processus' },
  { label: 'Stock', href: '#stock' },
  { label: 'Notre histoire', href: '#histoire' },
];

export function Navbar({ introDone = true }: { introDone?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = NAV_ITEMS.map(i => i.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: introDone ? 0 : -100 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" aria-label="AKS Motors — Accueil" className="flex items-center group">
            <Logo
              priority
              className={`w-auto transition-all duration-500 group-hover:scale-[1.04] drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] ${
                isScrolled ? 'h-14' : 'h-20'
              }`}
            />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
            {NAV_ITEMS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <a key={label} href={href} className="relative group overflow-hidden">
                  <span className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                    {label}
                  </span>
                  <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-500 ease-[0.16,1,0.3,1] ${
                    isActive ? 'translate-x-0' : '-translate-x-[101%] group-hover:translate-x-0'
                  }`} />
                </a>
              );
            })}
            <a href="tel:+33769945732" className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              +33 7 69 94 57 32
            </a>
            <Magnetic>
              <a href="#contact" className="inline-block px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors duration-300 rounded-sm">
                Contact
              </a>
            </Magnetic>
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
              {[...NAV_ITEMS, { label: 'Contact', href: '#contact' }].map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-display font-bold uppercase tracking-tighter ${label === 'Contact' ? 'text-red-600 mt-8' : 'text-white'}`}
                >
                  {label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-3 text-sm text-zinc-500"
            >
              <a href="tel:+33769945732" className="flex items-center gap-2 uppercase tracking-widest hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +33 7 69 94 57 32
              </a>
              <span className="uppercase tracking-widest">L'Excellence Nippone</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
