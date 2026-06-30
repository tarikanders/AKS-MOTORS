import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { usePrefersReducedMotion } from '../../lib/useReducedMotion';

/**
 * Carte du trajet « Japon → Pays-Bas (Rotterdam) » : les deux silhouettes de
 * pays, un tracé maritime qui se dessine au scroll, un cargo qui le parcourt en
 * continu et des points portuaires qui s'illuminent (pulsations).
 *
 * Les coordonnées sont en repère SVG (viewBox 1000×380) — géographie stylisée,
 * pensée pour la lisibilité plutôt que l'exactitude cartographique.
 */

// Silhouette stylisée de l'archipel japonais (reprise de JapanMap, repositionnée).
const JAPAN_ISLANDS = [
  'M196,40 C214,34 232,44 232,64 C232,84 214,96 196,92 C180,88 170,72 177,58 C181,50 188,43 196,40 Z',
  'M188,96 C176,116 168,140 150,160 C132,180 116,196 104,216 C92,236 84,256 72,268 C64,276 60,288 70,294 C80,300 92,290 102,278 C120,256 134,238 150,220 C170,198 186,176 198,150 C208,130 214,112 208,100 C204,94 195,90 188,96 Z',
  'M96,300 C104,296 116,300 118,308 C120,316 112,322 102,320 C94,318 86,310 92,304 Z',
  'M70,302 C80,298 88,306 86,318 C84,332 74,344 64,342 C54,340 50,328 56,316 C60,308 65,304 70,302 Z',
];

// Silhouette stylisée des Pays-Bas (côte de la mer du Nord, stylisée).
const NETHERLANDS =
  'M812,118 C828,102 854,100 874,110 C890,118 902,110 912,126 C921,140 911,156 917,172 C923,188 909,203 890,205 C872,207 856,198 842,201 C826,204 812,198 807,181 C802,164 813,153 808,140 C805,131 806,124 812,118 Z';

// Ports d'enchères japonais illuminés (repère JapanMap d'origine, retranslatés).
const JAPAN_PORTS = [
  { name: 'USS Tokyo', x: 172, y: 150 },
  { name: 'USS Nagoya', x: 148, y: 180 },
  { name: 'HAA Kobe', x: 126, y: 200 },
];

// Tracé maritime Japon → Rotterdam.
const ROUTE = 'M150,210 Q520,30 858,176';
// Point de départ (Japon) et d'arrivée (Rotterdam) du tracé.
const START = { x: 150, y: 210 };
const ROTTERDAM = { x: 858, y: 176 };

/** Anneau qui pulse autour d'un point pour signifier une activité portuaire. */
function Pulse({ x, y, color = 'rgb(248 113 113)', delay = 0 }: { x: number; y: number; color?: string; delay?: number }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r="5"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      initial={{ scale: 0.6, opacity: 0.7 }}
      animate={{ scale: [0.6, 3.4], opacity: [0.7, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, delay, ease: 'easeOut' }}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  );
}

export function JourneyMap({ className = '' }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Le tracé se dessine du Japon vers Rotterdam au fil du scroll.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.55'],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.4 });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <svg viewBox="0 0 1000 380" className="w-full h-auto" role="img" aria-label="Trajet maritime du Japon jusqu'au port de Rotterdam">
        <defs>
          <radialGradient id="jm-glow-jp" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(248 113 113)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="rgb(248 113 113)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="jm-glow-nl" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(157 137 92)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(157 137 92)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Lueurs d'ambiance sous chaque pays */}
        <ellipse cx="150" cy="190" rx="150" ry="160" fill="url(#jm-glow-jp)" opacity="0.5" />
        <ellipse cx="862" cy="160" rx="110" ry="120" fill="url(#jm-glow-nl)" opacity="0.6" />

        {/* Silhouette du Japon */}
        <g>
          {JAPAN_ISLANDS.map((d, i) => (
            <path key={i} d={d} fill="rgb(63 63 70 / 0.55)" stroke="rgb(228 228 231 / 0.18)" strokeWidth="1" />
          ))}
        </g>

        {/* Silhouette des Pays-Bas */}
        <path d={NETHERLANDS} fill="rgb(63 63 70 / 0.6)" stroke="rgb(157 137 92 / 0.4)" strokeWidth="1" />

        {/* Tracé maritime : guide + tracé qui se dessine au scroll */}
        <path d={ROUTE} fill="none" stroke="rgb(63 63 70 / 0.5)" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
        <motion.path
          d={ROUTE}
          fill="none"
          stroke="rgb(248 113 113)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength: reduced ? 1 : drawn, filter: 'drop-shadow(0 0 6px rgb(248 113 113 / 0.6))' }}
        />

        {/* Ports japonais illuminés */}
        {JAPAN_PORTS.map((p, i) => (
          <g key={p.name}>
            {!reduced && <Pulse x={p.x} y={p.y} delay={i * 0.5} />}
            <circle cx={p.x} cy={p.y} r="3" fill="rgb(248 113 113)" />
            <circle cx={p.x} cy={p.y} r="1.4" fill="rgb(254 226 226)" />
          </g>
        ))}

        {/* Point de départ Japon */}
        <g>
          {!reduced && <Pulse x={START.x} y={START.y} delay={0.2} />}
          <circle cx={START.x} cy={START.y} r="6" fill="rgb(248 113 113)" />
          <circle cx={START.x} cy={START.y} r="2.6" fill="rgb(254 226 226)" />
          <text x={START.x} y={START.y + 34} textAnchor="middle" fontSize="24" fill="rgb(212 212 216)" className="font-display" fontWeight="700">
            日本 Japon
          </text>
        </g>

        {/* Port de Rotterdam illuminé */}
        <g>
          {!reduced && <Pulse x={ROTTERDAM.x} y={ROTTERDAM.y} color="rgb(203 183 137)" delay={0.9} />}
          <circle cx={ROTTERDAM.x} cy={ROTTERDAM.y} r="6" fill="rgb(203 183 137)" />
          <circle cx={ROTTERDAM.x} cy={ROTTERDAM.y} r="2.6" fill="rgb(24 24 27)" />
          <text x={ROTTERDAM.x} y={ROTTERDAM.y - 20} textAnchor="middle" fontSize="24" fill="rgb(212 212 216)" className="font-display" fontWeight="700">
            Rotterdam
          </text>
          <text x={ROTTERDAM.x} y={ROTTERDAM.y - 42} textAnchor="middle" fontSize="14" fill="rgb(157 137 92)" className="font-sans" letterSpacing="2">
            PAYS-BAS
          </text>
        </g>
      </svg>
    </div>
  );
}
