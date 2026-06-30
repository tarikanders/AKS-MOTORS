'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ChevronUp } from 'lucide-react';
import { useLenis } from './SmoothScroll';

/** Boutons flottants (WhatsApp + retour haut). Sous le provider Lenis. */
export function FloatingActions() {
  const lenis = useLenis();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a
        href="https://wa.me/33769945732?text=Bonjour%2C%20je%20souhaite%20importer%20un%20v%C3%A9hicule%20JDM."
        target="_blank"
        rel="noopener noreferrer"
        style={{ bottom: 'calc(6rem + env(safe-area-inset-bottom))' }}
        className="fixed right-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl transition-colors"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollTop}
            style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
            className="fixed right-6 z-50 w-14 h-14 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full flex items-center justify-center border border-white/10 shadow-xl transition-colors"
            aria-label="Retour en haut"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
