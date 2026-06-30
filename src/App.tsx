import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ChevronUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { RouteMap } from './components/RouteMap';
import { WhyAksu } from './components/WhyAksu';
import { Stats } from './components/Stats';
import { CarCare } from './components/CarCare';
import { Inventory } from './components/Inventory';
import { Transparency } from './components/Transparency';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Offers } from './components/Offers';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SmoothScroll, useLenis } from './components/fx/SmoothScroll';
import { Preloader } from './components/fx/Preloader';
import { Cursor } from './components/fx/Cursor';
import { Grain } from './components/fx/Grain';

/** Boutons flottants (WhatsApp + retour haut). Sous le provider → accès Lenis. */
function FloatingActions() {
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
      <AnimatePresence>
        {showTop && (
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            href="https://wa.me/33769945732?text=Bonjour%2C%20je%20souhaite%20importer%20un%20v%C3%A9hicule%20JDM."
            target="_blank"
            rel="noopener noreferrer"
            style={{ bottom: 'calc(6rem + env(safe-area-inset-bottom))' }}
            className="fixed right-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl transition-colors"
            aria-label="Contacter sur WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.a>
        )}
      </AnimatePresence>

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

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <SmoothScroll>
      <Preloader onComplete={handleIntroComplete} />
      <Cursor />
      <Grain />
      <div className="min-h-screen bg-zinc-950">
        <Navbar introDone={introDone} />
        <Hero introDone={introDone} />
        <Services />
        <Process />
        <RouteMap />
        <WhyAksu />
        <About />
        <Stats />
        <CarCare />
        <Transparency />
        <Inventory />
        <Testimonials />
        <Offers />
        <Contact />
        <FAQ />
        <Footer />
        <FloatingActions />
      </div>
    </SmoothScroll>
  );
}
