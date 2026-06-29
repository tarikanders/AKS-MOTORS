import { useEffect, useState } from 'react';

/**
 * Point de vérité unique pour `prefers-reduced-motion`.
 * Tous les effets immersifs (Lenis, Preloader, Cursor, Magnetic, Reveal, Grain)
 * s'appuient dessus pour offrir un chemin "réduit".
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/**
 * Indique si l'appareil dispose d'un pointeur fin (souris/trackpad).
 * Sert à désactiver curseur custom + magnetic sur tactile.
 */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    setFine(mq.matches);
    const onChange = () => setFine(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return fine;
}
