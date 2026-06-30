import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, animate, motion } from 'motion/react';
import { usePrefersReducedMotion } from '../../lib/useReducedMotion';

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  /** Séparateur de milliers (ex. ' ' pour "120 000"). Vide = pas de groupement. */
  separator?: string;
};

/**
 * Compteur qui s'incrémente de 0 à `value` une seule fois, à l'entrée dans le
 * viewport. En reduced-motion, affiche directement la valeur finale.
 */
export function CountUp({ value, prefix = '', suffix = '', duration = 1.6, className, separator = '' }: CountUpProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    const n = Math.round(v).toString();
    const grouped = separator ? n.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : n;
    return `${prefix}${grouped}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, reduced, value, duration, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}
