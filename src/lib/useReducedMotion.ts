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

/**
 * Indique si l'appareil utilise un pointeur grossier (tactile).
 * Sert à désactiver le smooth scroll Lenis (inutile : le scroll tactile est natif).
 */
export function useCoarsePointer(): boolean {
  // Lecture synchrone au 1er rendu : évite de monter l'arbre « desktop » puis de
  // basculer (flash + travail gaspillé) sur les composants qui switchent de layout.
  const [coarse, setCoarse] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    setCoarse(mq.matches);
    const onChange = () => setCoarse(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return coarse;
}

/**
 * Vrai sur petit écran (< breakpoint `md` de Tailwind, soit 768px).
 * Point de vérité pour router les téléphones vers les chemins « légers »
 * (Hero/WhyAksu sans scrubbing vidéo, titres sans glow par lettre, etc.).
 */
export function useIsMobile(): boolean {
  // Lecture synchrone au 1er rendu : le Hero/WhyAksu mobile s'affiche directement,
  // sans monter d'abord la version desktop lourde (scrubbing vidéo 300vh).
  const [mobile, setMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setMobile(mq.matches);
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return mobile;
}
