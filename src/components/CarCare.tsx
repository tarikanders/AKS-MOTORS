import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { usePrefersReducedMotion } from '../lib/useReducedMotion';

/** Phrases affichées au fil de la vidéo (fractions de sa durée). */
const PHRASES: { text: string; start: number; end: number }[] = [
  { text: 'Nous prenons soin de votre voiture', start: 0.05, end: 0.3 },
  { text: 'Chaque véhicule est inspecté et nettoyé', start: 0.33, end: 0.58 },
  { text: 'Remis en mains propres, par nos soins', start: 0.6, end: 0.82 },
];
/** À partir de cette fraction : fondu au noir + phrase finale + logo. */
const END_FROM = 0.85;

/**
 * Section cinématique plein écran : la vidéo `carwash` joue en fond, des phrases
 * en majuscules apparaissent/disparaissent en fondu au fil de la lecture, puis
 * la vidéo se coupe sur un fondu au noir avec une phrase finale et le logo.
 */
export function CarCare() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(-1);
  const [ending, setEnding] = useState(false);

  // Lecture/pause selon la visibilité (et relance si on revient après la fin).
  useEffect(() => {
    const section = ref.current;
    const video = videoRef.current;
    if (!section || !video || reduced) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.ended) {
            video.currentTime = 0;
            setEnding(false);
            setActive(-1);
          }
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, [reduced]);

  // Pilote les phrases selon le temps de lecture.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;
    const onTime = () => {
      const d = video.duration;
      if (!d || !Number.isFinite(d)) return;
      const f = video.currentTime / d;
      if (f >= END_FROM) {
        setEnding(true);
        setActive(-1);
        return;
      }
      setEnding(false);
      const idx = PHRASES.findIndex((p) => f >= p.start && f < p.end);
      setActive((prev) => (prev === idx ? prev : idx));
    };
    const onEnded = () => setEnding(true);
    video.addEventListener('timeupdate', onTime);
    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('ended', onEnded);
    };
  }, [reduced]);

  // Variante réduite : vidéo en boucle + message statique, sans chorégraphie.
  if (reduced) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video src="/carwash-web.mp4" muted loop autoPlay playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-display font-bold uppercase tracking-tight text-4xl md:text-6xl text-white leading-tight max-w-4xl">
            Nous prenons soin de votre voiture
          </h2>
          <p className="mt-5 text-zinc-300 max-w-xl font-light text-lg">
            Chaque véhicule inspecté et nettoyé, remis en mains propres par nos soins.
          </p>
          <Logo className="h-12 md:h-16 w-auto mt-8" />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        src="/carwash-web.mp4"
        muted
        autoPlay
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Voile permanent pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      {/* Fondu au noir final (la vidéo « se coupe ») */}
      <motion.div
        animate={{ opacity: ending ? 0.78 : 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      <div className="absolute inset-0 flex items-center justify-center text-center px-6 pointer-events-none">
        {/* Phrases qui défilent en fondu */}
        <AnimatePresence mode="wait">
          {active >= 0 && !ending && (
            <motion.h2
              key={active}
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -24, filter: 'blur(6px)' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl font-display font-bold uppercase tracking-tight text-3xl md:text-5xl lg:text-6xl text-white leading-tight"
            >
              {PHRASES[active].text}
            </motion.h2>
          )}
        </AnimatePresence>

        {/* Phrase finale « qui claque » + logo */}
        <AnimatePresence>
          {ending && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: [0.22, 1.3, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6"
            >
              <span className="text-red-500 font-medium tracking-[0.3em] uppercase text-xs mb-6">Le souci du détail</span>
              {/* Phrase finale « écrite » progressivement de gauche à droite (volet
                  clip-path) en dégradé ; « détail » dans l'or de la palette du site. */}
              <motion.h2
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center leading-[0.95] whitespace-normal md:whitespace-nowrap"
              >
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  Jusqu'au moindre{' '}
                </span>
                <span className="bg-gradient-to-r from-[#7a6a44] via-[#e9dcc0] to-[#9d895c] bg-clip-text text-transparent">
                  détail
                </span>
              </motion.h2>
              <Logo className="h-12 md:h-16 w-auto mt-10 drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
