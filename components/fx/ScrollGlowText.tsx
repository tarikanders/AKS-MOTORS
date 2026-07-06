import { Fragment, useRef, type ReactNode, type Ref } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent, type MotionValue } from 'motion/react';
import { usePrefersReducedMotion } from '../../lib/useReducedMotion';

type Segment = { text: string; className?: string };

/** Balises acceptées par `as` (toujours un tag HTML texte). */
type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';

/** Signature JSX explicite d'un tag HTML : immunise contre la pollution des
    types JSX globaux par @react-three/fiber (qui rend `ElementType` inutilisable
    en composant polymorphe — props réduites à `never`). */
type PolymorphicTag = (props: {
  ref?: Ref<HTMLElement>;
  className?: string;
  children?: ReactNode;
}) => ReactNode;

type ScrollGlowTextProps = {
  /** Texte à révéler. Les `\n` créent des lignes distinctes. */
  text?: string;
  /** Segments stylés alternatifs à `text` (ex. titre deux tons). */
  segments?: Segment[];
  as?: TextTag;
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

/**
 * Découpe `text`/`segments` en lignes → mots → lettres (gère les `\n`).
 * Le regroupement par mot permet de rendre chaque mot insécable : sans lui,
 * les lettres en inline-block autorisent une césure en plein milieu d'un mot
 * quand la ligne est trop étroite (mobile).
 */
function buildLines(text?: string, segments?: Segment[]): Token[][][] {
  const src: Segment[] = segments ?? [{ text: text ?? '' }];
  const lines: Token[][][] = [[]];
  let newWord = true;
  for (const seg of src) {
    const parts = seg.text.split('\n');
    parts.forEach((part, pi) => {
      if (pi > 0) {
        lines.push([]);
        newWord = true;
      }
      const line = lines[lines.length - 1];
      for (const ch of part) {
        if (ch === ' ') {
          newWord = true;
          continue;
        }
        if (newWord) {
          line.push([]);
          newWord = false;
        }
        line[line.length - 1].push({ ch, cls: seg.className });
      }
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
    lines.reduce((n, l) => n + l.reduce((m, w) => m + w.length, 0), 0),
    1,
  );

  const Comp = Tag as unknown as PolymorphicTag;

  if (reduced) {
    return (
      <Comp ref={ref} className={className}>
        {lines.map((line, li) => (
          <span key={li} style={{ display: 'block' }}>
            {line.map((word, wi) => (
              <Fragment key={wi}>
                {wi > 0 && ' '}
                <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  {word.map((t, i) => (
                    <span key={i} style={{ color: t.cls ? GOLD_LIT : undefined }}>
                      {t.ch}
                    </span>
                  ))}
                </span>
              </Fragment>
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
          {line.map((word, wi) => (
            <Fragment key={wi}>
              {wi > 0 && ' '}
              {/* Mot insécable : la ligne ne casse qu'entre les mots. */}
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {word.map((t, i) => {
                  idx++;
                  const start = idx / total;
                  // Léger chevauchement pour un fondu plus doux entre lettres.
                  const end = Math.min((idx + 1.6) / total, 1);
                  return (
                    <GlowChar key={i} char={t.ch} range={[start, end]} progress={latched} secondary={!!t.cls} />
                  );
                })}
              </span>
            </Fragment>
          ))}
        </span>
      ))}
    </Comp>
  );
}
