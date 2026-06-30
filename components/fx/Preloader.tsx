import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, animate, useTransform } from 'motion/react';
import { Logo } from '../Logo';
import { useLenis } from './SmoothScroll';
import { usePrefersReducedMotion } from '../../lib/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;
const SESSION_KEY = 'aks-intro-played';

/**
 * Rideau d'intro : compteur 0→100 %, logo révélé, puis le rideau se lève.
 * Bloque le scroll pendant l'intro. Ne rejoue pas dans la même session.
 * En reduced-motion : pas d'intro (complète immédiatement).
 */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  const reduced = usePrefersReducedMotion();
  const lenis = useLenis();
  const [done, setDone] = useState(false);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const counterX = useTransform(count, [0, 100], ['0%', '-2%']);

  // Refs pour lire les dernières valeurs sans relancer l'effet (mount-only).
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Décide d'emblée s'il faut jouer l'intro.
  const [shouldPlay] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.sessionStorage.getItem(SESSION_KEY)) return false;
    return true;
  });

  useEffect(() => {
    if (!shouldPlay || reduced) {
      setDone(true);
      onCompleteRef.current();
      return;
    }

    // Verrouille le scroll pendant l'intro.
    lenisRef.current?.stop();
    document.body.style.overflow = 'hidden';

    let timeout: ReturnType<typeof setTimeout>;
    const controls = animate(count, 100, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        window.sessionStorage.setItem(SESSION_KEY, '1');
        // Laisse le rideau se lever puis libère.
        timeout = setTimeout(() => {
          setDone(true);
          onCompleteRef.current();
          lenisRef.current?.start();
          document.body.style.overflow = '';
        }, 600);
      },
    });

    return () => {
      controls.stop();
      clearTimeout(timeout);
      lenisRef.current?.start();
      document.body.style.overflow = '';
    };
    // Effet volontairement mount-only : voir refs ci-dessus.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (reduced || !shouldPlay) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-zinc-950"
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: EASE }}
        >
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          >
            <Logo priority className="h-16 md:h-20 w-auto" />
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 px-8 flex items-end justify-between">
            <motion.span
              style={{ x: counterX }}
              className="font-display text-[18vw] md:text-[12vw] leading-none font-bold text-white/5 select-none"
            >
              <motion.span>{rounded}</motion.span>
            </motion.span>
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 pb-4">
              Chargement
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
