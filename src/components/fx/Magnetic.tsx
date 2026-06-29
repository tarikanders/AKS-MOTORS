import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { usePrefersReducedMotion, useFinePointer } from '../../lib/useReducedMotion';

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** Intensité de l'attraction (0–1). */
  strength?: number;
};

/**
 * Enveloppe un élément (CTA, lien) pour qu'il soit "attiré" par le curseur.
 * No-op sur pointeur grossier ou reduced-motion (rend un span neutre).
 */
export function Magnetic({ children, className, strength = 0.4 }: MagneticProps) {
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();
  const ref = useRef<HTMLSpanElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  if (reduced || !fine) {
    return (
      <span className={className} style={{ display: 'inline-block' }}>
        {children}
      </span>
    );
  }

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
