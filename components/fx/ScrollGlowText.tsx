import { type ElementType, Fragment, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent, type MotionValue } from 'motion/react';
import { usePrefersReducedMotion } from '../../lib/useReducedMotion';

type Segment = { text: string; className?: string };

type ScrollGlowTextProps = {
  /** Texte à révéler. Les `\n` créent des lignes distinctes. */
  text?: string;
  /** Segments stylés alternatifs à `text` (ex. titre deux tons). */
  segments?: Segment[];
  as?: ElementType;
  className?: string;
};

type Token = { ch: string; cls?: string };

/** Or « sombré » : couleur des lettres avant illumination. */
const GOLD = '#9d895c';
/** Or pleinement éclairé (légèrement plus lumineux que le sombré). */
const GOLD_LIT = '#cbb789';

/**
 * Une lettre qui passe d'un or sombré (#9d895c) à sa couleur pleine selon le
 * scroll : éclairage progressif dégradé. Les mots « primaires » montent jusqu'au
 * blanc, les mots « secondaires » jusqu'à un or lumineux.
 */
function GlowChar({
  char,
  range,
  progress,
  secondary,
}: {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
  secondary?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.5, 1]);
  const color = useTransform(progress, range, [GOLD, secondary ? GOLD_LIT : '#ffffff']);
  return (
    <motion.span style={{ opacity, color, display: 'inline-block' }}>
      {char}
    </motion.span>
  );
}

/** Découpe `text`/`segments` en lignes de lettres (gère les `\n`). */
function buildLines(text?: string, segments?: Segment[]): Token[][] {
  const src: Segment[] = segments ?? [{ text: text ?? '' }];
  const lines: Token[][] = [[]];
  for (const seg of src) {
    const parts = seg.text.split('\n');
    parts.forEach((part, pi) => {
      if (pi > 0) lines.push([]);
      const cur = lines[lines.length - 1];
      for (const ch of part) cur.push({ ch, cls: seg.className });
    });
  }
  return lines;
}

/**
 * Titre dont chaque lettre s'illumine une par une au fil du scroll
 * (de "éteinte" à pleine intensité). Les couleurs de segment sont préservées.
 * Fallback statique si reduced-motion.
 */
export function ScrollGlowText({ text, segments, as: Tag = 'span', className }: ScrollGlowTextProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.35'],
  });

  // Verrou : la progression ne fait que monter. Une fois une lettre allumée,
  // elle le reste — pas de re-extinction « à l'envers » au scroll inverse.
  const maxRef = useRef(0);
  const latched = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > maxRef.current) {
      maxRef.current = v;
      latched.set(v);
    }
  });

  const lines = buildLines(text, segments);
  const total = Math.max(
    lines.reduce((n, l) => n + l.length, 0),
    1,
  );

  const Comp = Tag as ElementType;

  if (reduced) {
    return (
      <Comp ref={ref} className={className}>
        {lines.map((line, li) => (
          <span key={li} style={{ display: 'block' }}>
            {line.map((t, i) => (
              <span key={i} style={{ color: t.cls ? GOLD_LIT : undefined }}>
                {t.ch === ' ' ? ' ' : t.ch}
              </span>
            ))}
          </span>
        ))}
      </Comp>
    );
  }

  let idx = -1;
  return (
    <Comp ref={ref} className={className}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.map((t, i) => {
            idx++;
            const start = idx / total;
            // Léger chevauchement pour un fondu plus doux entre lettres.
            const end = Math.min((idx + 1.6) / total, 1);
            if (t.ch === ' ') return <span key={i}>{' '}</span>;
            return (
              <Fragment key={i}>
                <GlowChar char={t.ch} range={[start, end]} progress={latched} secondary={!!t.cls} />
              </Fragment>
            );
          })}
        </span>
      ))}
    </Comp>
  );
}
