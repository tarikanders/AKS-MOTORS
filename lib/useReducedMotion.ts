import { useSyncExternalStore } from 'react';

/**
 * Hook media-query compatible SSR. `useSyncExternalStore` est l'API React
 * prévue pour ce cas : le snapshot serveur (false) correspond au HTML rendu,
 * puis le client se resynchronise immédiatement après hydratation — sans
 * avertissement d'hydratation, contrairement à une lecture synchrone dans
 * l'initialiseur de useState.
 */
function useMediaQuery(query: string): boolean {
  const subscribe = (callback: () => void) => {
    if (typeof window === 'undefined') return () => {};
    const mq = window.matchMedia(query);
    mq.addEventListener('change', callback);
    return () => mq.removeEventListener('change', callback);
  };
  const getSnapshot = () => window.matchMedia(query).matches;
  const getServerSnapshot = () => false;
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Point de vérité unique pour `prefers-reduced-motion`.
 * Tous les effets immersifs (Lenis, Preloader, Cursor, Magnetic, Reveal, Grain)
 * s'appuient dessus pour offrir un chemin "réduit".
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

/**
 * Indique si l'appareil dispose d'un pointeur fin (souris/trackpad).
 * Sert à désactiver curseur custom + magnetic sur tactile.
 */
export function useFinePointer(): boolean {
  return useMediaQuery('(pointer: fine)');
}

/**
 * Indique si l'appareil utilise un pointeur grossier (tactile).
 * Sert à désactiver le smooth scroll Lenis (inutile : le scroll tactile est natif).
 */
export function useCoarsePointer(): boolean {
  return useMediaQuery('(pointer: coarse)');
}

/**
 * Vrai sur petit écran (< breakpoint `md` de Tailwind, soit 768px).
 * Point de vérité pour router les téléphones vers les chemins « légers »
 * (Hero/WhyAksu sans scrubbing vidéo, titres sans glow par lettre, etc.).
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)');
}
