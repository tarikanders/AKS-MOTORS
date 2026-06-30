import { type ReactNode, type ElementType } from 'react';
import { motion, type Variants } from 'motion/react';
import { usePrefersReducedMotion } from '../../lib/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

type Segment = { text: string; className?: string };

type RevealTextProps = {
  /** Texte à révéler. Les `\n` créent des lignes distinctes. */
  text?: string;
  /**
   * Segments stylés alternatifs à `text` (ex. titre deux tons). Chaque segment
   * peut contenir des `\n`. Tous partagent le même stagger.
   */
  segments?: Segment[];
  as?: ElementType;
  className?: string;
  /** Délai global avant le départ du stagger (s). */
  delay?: number;
  /** Espacement entre chaque mot (s). */
  stagger?: number;
  /**
   * Pilotage manuel : si fourni, l'animation joue quand `start === true`
   * (utile pour déclencher après le preloader). Sinon, déclenche au scroll.
   */
  start?: boolean;
};

type Word = { text: string; className?: string };

/** Normalise `text`/`segments` en lignes de mots (gère les `\n`). */
function buildLines(text?: string, segments?: Segment[]): Word[][] {
  const src: Segment[] = segments ?? [{ text: text ?? '' }];
  const lines: Word[][] = [[]];
  for (const seg of src) {
    const parts = seg.text.split('\n');
    parts.forEach((part, pi) => {
      if (pi > 0) lines.push([]);
      const current = lines[lines.length - 1];
      part
        .split(' ')
        .filter((w) => w.length > 0)
        .forEach((w) => current.push({ text: w, className: seg.className }));
    });
  }
  return lines;
}

/**
 * Titre révélé mot par mot : chaque mot monte derrière un masque
 * (`overflow-hidden`), avec stagger. Fallback opacité simple si reduced-motion.
 */
export function RevealText({
  text,
  segments,
  as: Tag = 'span',
  className,
  delay = 0,
  stagger = 0.04,
  start,
}: RevealTextProps) {
  const reduced = usePrefersReducedMotion();
  const lines = buildLines(text, segments);
  const manual = start !== undefined;

  // Props d'animation communes : mode manuel (animate) vs scroll (whileInView).
  const trigger = manual
    ? { animate: start ? 'visible' : 'hidden' }
    : { whileInView: 'visible', viewport: { once: true, margin: '-80px' } };

  if (reduced) {
    return (
      <Tag className={className}>
        <motion.span
          initial={{ opacity: 0 }}
          {...(manual
            ? { animate: start ? { opacity: 1 } : { opacity: 0 } }
            : { whileInView: { opacity: 1 }, viewport: { once: true } })}
          transition={{ duration: 0.4 }}
          style={{ display: 'inline-block' }}
        >
          {lines.map((line, li) => (
            <span key={li} style={{ display: 'block' }}>
              {line.map((w, wi) => (
                <span key={wi} className={w.className}>
                  {w.text}
                  {wi < line.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: '110%' },
    visible: { y: '0%', transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        {...trigger}
        variants={container}
        style={{ display: 'inline-block' }}
      >
        {lines.map((line, li) => (
          <span key={li} style={{ display: 'block' }}>
            {line.map((w, wi) => (
              <span
                key={wi}
                style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
              >
                <motion.span variants={word} className={w.className} style={{ display: 'inline-block' }}>
                  {w.text}
                </motion.span>
                {wi < line.length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** 'up' = fade/translate ; 'clip' = volet clip-path (images, cartes). */
  variant?: 'up' | 'clip';
  delay?: number;
  duration?: number;
};

/**
 * Wrapper de révélation générique pour blocs et médias.
 * Remplace les `initial/whileInView` répétés. Fallback opacité si reduced-motion.
 */
export function Reveal({
  children,
  className,
  variant = 'up',
  delay = 0,
  duration = 0.8,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
      >
        {children}
      </motion.div>
    );
  }

  const initial =
    variant === 'clip'
      ? { clipPath: 'inset(100% 0 0 0)', opacity: 0 }
      : { opacity: 0, y: 40 };
  const animate =
    variant === 'clip'
      ? { clipPath: 'inset(0% 0 0 0)', opacity: 1 }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
