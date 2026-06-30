import { motion } from 'motion/react';
import { usePrefersReducedMotion } from '../../lib/useReducedMotion';

/** Pôles d'enchères japonais positionnés sur la carte stylisée (viewBox 300×420). */
const AUCTION_POINTS = [
  { name: 'Sapporo', x: 205, y: 66, labelDx: 12, labelAnchor: 'start' as const },
  { name: 'Sendai', x: 184, y: 122, labelDx: 12, labelAnchor: 'start' as const },
  { name: 'USS Tokyo', x: 172, y: 150, labelDx: 12, labelAnchor: 'start' as const },
  { name: 'USS Nagoya', x: 148, y: 180, labelDx: 12, labelAnchor: 'start' as const },
  { name: 'HAA Kobe', x: 126, y: 200, labelDx: -12, labelAnchor: 'end' as const },
  { name: 'USS Kyushu', x: 66, y: 322, labelDx: -12, labelAnchor: 'end' as const },
];

// Silhouette stylisée de l'archipel (Hokkaido, Honshu, Shikoku, Kyushu).
const ISLAND_PATHS = [
  'M196,40 C214,34 232,44 232,64 C232,84 214,96 196,92 C180,88 170,72 177,58 C181,50 188,43 196,40 Z',
  'M188,96 C176,116 168,140 150,160 C132,180 116,196 104,216 C92,236 84,256 72,268 C64,276 60,288 70,294 C80,300 92,290 102,278 C120,256 134,238 150,220 C170,198 186,176 198,150 C208,130 214,112 208,100 C204,94 195,90 188,96 Z',
  'M96,300 C104,296 116,300 118,308 C120,316 112,322 102,320 C94,318 86,310 92,304 Z',
  'M70,302 C80,298 88,306 86,318 C84,332 74,344 64,342 C54,340 50,328 56,316 C60,308 65,304 70,302 Z',
];

/**
 * Carte décorative du Japon : la silhouette de l'archipel avec les grands
 * pôles d'enchères qui clignotent. Statique en reduced-motion.
 */
export function JapanMap({ className = '' }: { className?: string }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 300 420" className="w-full h-auto" role="img" aria-label="Carte du Japon et des pôles d'enchères">
        <defs>
          <radialGradient id="jp-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(248 113 113)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(248 113 113)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Lueur d'ambiance derrière l'archipel */}
        <ellipse cx="150" cy="200" rx="150" ry="190" fill="url(#jp-glow)" opacity="0.4" />

        {/* Îles */}
        {ISLAND_PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="rgb(63 63 70 / 0.55)"
            stroke="rgb(228 228 231 / 0.18)"
            strokeWidth="1"
          />
        ))}

        {/* Pôles d'enchères */}
        {AUCTION_POINTS.map((p, i) => (
          <g key={p.name}>
            {!reduced && (
              <motion.circle
                cx={p.x}
                cy={p.y}
                r="4"
                fill="none"
                stroke="rgb(248 113 113)"
                strokeWidth="1.5"
                initial={{ scale: 0.6, opacity: 0.8 }}
                animate={{ scale: [0.6, 3.2], opacity: [0.7, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeOut',
                }}
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              />
            )}
            <circle cx={p.x} cy={p.y} r="3" fill="rgb(248 113 113)" />
            <circle cx={p.x} cy={p.y} r="1.4" fill="rgb(254 226 226)" />
            <text
              x={p.x + p.labelDx}
              y={p.y + 3.5}
              textAnchor={p.labelAnchor}
              className="font-sans"
              fontSize="9"
              fill="rgb(212 212 216 / 0.85)"
              letterSpacing="0.5"
            >
              {p.name}
            </text>
          </g>
        ))}

        {/* Étiquette pays */}
        <text
          x="232"
          y="280"
          textAnchor="start"
          className="font-display"
          fontSize="13"
          fontWeight="700"
          fill="rgb(228 228 231 / 0.35)"
          letterSpacing="2"
        >
          日本
        </text>
      </svg>
    </div>
  );
}
