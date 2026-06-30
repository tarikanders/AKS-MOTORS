import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import { usePrefersReducedMotion, useCoarsePointer } from '../../lib/useReducedMotion';

const LenisContext = createContext<Lenis | null>(null);

/** Accès à l'instance Lenis (null si reduced-motion ou non monté). */
export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}

/**
 * Provider Lenis — défilement inertiel "premium".
 * Monté une fois autour de l'app. Utilise le défilement RÉEL (pas virtuel),
 * ce qui garde les hooks `useScroll` de Motion synchronisés sans refacto.
 * Désactivé proprement si `prefers-reduced-motion` (scroll natif).
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const coarse = useCoarsePointer();
  // Sur tactile, le scroll natif est déjà fluide : Lenis ne ferait que tourner en
  // RAF (CPU/batterie gaspillés). On le désactive aussi en reduced-motion.
  const disabled = reduced || coarse;
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (disabled) return;

    const instance = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    });
    setLenis(instance);

    const raf = (time: number) => {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      instance.destroy();
      setLenis(null);
    };
  }, [disabled]);

  // Interception des ancres internes (#...) pour un scroll inertiel maîtrisé.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -80 });
      } else {
        const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [lenis, reduced]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
