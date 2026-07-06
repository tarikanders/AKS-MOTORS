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
  // Point d'entrée « passer l'intro » (tap sur le rideau) ; null hors intro.
  const releaseRef = useRef<(() => void) | null>(null);

  // Décide s'il faut jouer l'intro. Reste `false` (comme le rendu serveur)
  // jusqu'à ce que l'effet de montage lise sessionStorage, pour éviter un
  // mismatch d'hydratation (le serveur n'a pas accès à `window`).
  const [shouldPlay, setShouldPlay] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setShouldPlay(!window.sessionStorage.getItem(SESSION_KEY));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    if (!shouldPlay || reduced) {
      setDone(true);
      onCompleteRef.current();
      return;
    }

    // Verrouille le scroll pendant l'intro.
    lenisRef.current?.stop();
    document.body.style.overflow = 'hidden';

    // Libération idempotente : quel que soit le chemin (fin d'animation,
    // garde-fou, tap pour passer), le scroll est rendu exactement une fois.
    const release = () => {
      if (releaseRef.current === null) return;
      releaseRef.current = null;
      try {
        window.sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // Stockage bloqué (mode privé / réglages) : l'intro rejouera, tant pis.
      }
      setDone(true);
      onCompleteRef.current();
      lenisRef.current?.start();
      document.body.style.overflow = '';
    };
    releaseRef.current = release;

    let timeout: ReturnType<typeof setTimeout>;
    // Garde-fou : si la fin d'animation n'arrive jamais (rAF affamé pendant
    // l'hydratation sur mobile, exception en aval…), on libère au plus tard
    // après 4 s. Un scroll définitivement bloqué est pire qu'une intro écourtée.
    const failSafe = setTimeout(release, 4000);

    const controls = animate(count, 100, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        // Laisse le rideau se lever puis libère.
        timeout = setTimeout(release, 600);
      },
    });

    return () => {
      controls.stop();
      clearTimeout(timeout);
      clearTimeout(failSafe);
      releaseRef.current = null;
      lenisRef.current?.start();
      document.body.style.overflow = '';
    };
    // onComplete/lenis lus via refs pour ne relancer l'effet que sur ready/shouldPlay/reduced.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, shouldPlay, reduced]);

  if (!ready || reduced || !shouldPlay) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-zinc-950"
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: EASE }}
          onClick={() => releaseRef.current?.()}
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
