import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { usePrefersReducedMotion, useFinePointer } from '../../lib/useReducedMotion';

/**
 * Curseur personnalisé : un anneau qui suit la souris avec ressort et grossit
 * au survol des éléments interactifs (`a, button, [data-cursor]`). Un libellé
 * optionnel s'affiche si l'élément porte `data-cursor="texte"`.
 * Activé uniquement sur pointeur fin et hors reduced-motion.
 */
export function Cursor() {
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();
  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const interactive = (e.target as HTMLElement)?.closest?.(
        'a, button, [data-cursor], input, textarea, select, [role="button"]'
      ) as HTMLElement | null;
      setHovering(!!interactive);
      setLabel(interactive?.getAttribute('data-cursor') ?? '');
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, [enabled, visible, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: label ? 80 : hovering ? 56 : 16,
        height: label ? 80 : hovering ? 56 : 16,
        opacity: visible ? 1 : 0,
        backgroundColor: label ? '#ffffff' : 'rgba(255,255,255,0)',
        border: label ? '0px' : '1.5px solid #ffffff',
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
    >
      {label && (
        <span className="text-[10px] font-semibold uppercase tracking-widest text-black">
          {label}
        </span>
      )}
    </motion.div>
  );
}
