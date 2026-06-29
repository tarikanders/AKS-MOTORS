import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Anchor, Flag, MapPin, Home } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { usePrefersReducedMotion } from '../lib/useReducedMotion';

const waypoints = [
  { icon: Flag, title: 'Départ du Japon', desc: 'Enchères & chargement portuaire' },
  { icon: Anchor, title: 'Traversée maritime', desc: 'Env. 30 à 45 jours en mer' },
  { icon: MapPin, title: 'Port de Rotterdam', desc: 'Débarquement & dédouanement' },
  { icon: Home, title: 'Livraison', desc: 'Homologation puis remise des clés' },
];

const ROUTE = 'M120,200 Q500,30 880,140';

/**
 * Infographie "Du Japon jusqu'à votre garage" : un tracé animé entre le Japon
 * et Rotterdam, suivi des grandes étapes du trajet.
 */
export function RouteMap() {
  const reduced = usePrefersReducedMotion();
  const mapRef = useRef<HTMLDivElement>(null);

  // Le tracé rouge se dessine du Japon (A) vers Rotterdam (B) au fil du scroll.
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ['start 0.85', 'end 0.55'],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.4 });

  return (
    <section id="route" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-red-900/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Itinéraire</span>
            <div className="h-[1px] w-8 bg-red-600" />
          </motion.div>
          <ScrollGlowText
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-6"
            segments={[{ text: 'Du Japon jusqu’à\n' }, { text: 'votre garage', className: 'text-zinc-500' }]}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-400 max-w-2xl font-light text-lg"
          >
            Un trajet maîtrisé de bout en bout : des salles d'enchères japonaises au port de Rotterdam,
            jusqu'à la livraison de votre véhicule homologué.
          </motion.p>
        </div>

        {/* Tracé animé */}
        <div className="relative" ref={mapRef}>
          <svg viewBox="0 0 1000 240" className="w-full h-auto" role="img" aria-label="Tracé Japon vers Rotterdam">
            <path d={ROUTE} fill="none" stroke="rgb(63 63 70 / 0.5)" strokeWidth="2" />
            <motion.path
              d={ROUTE}
              fill="none"
              stroke="rgb(248 113 113)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: reduced ? 1 : drawn, filter: 'drop-shadow(0 0 6px rgb(248 113 113 / 0.6))' }}
            />

            {/* Point Japon */}
            <g>
              <circle cx="120" cy="200" r="7" fill="rgb(248 113 113)" />
              <circle cx="120" cy="200" r="3" fill="rgb(254 226 226)" />
              <text x="120" y="228" textAnchor="middle" fontSize="15" fill="rgb(212 212 216)" className="font-display" fontWeight="700">
                日本 Japon
              </text>
            </g>

            {/* Point Rotterdam */}
            <g>
              <circle cx="880" cy="140" r="7" fill="rgb(228 228 231)" />
              <circle cx="880" cy="140" r="3" fill="rgb(24 24 27)" />
              <text x="880" y="118" textAnchor="middle" fontSize="15" fill="rgb(212 212 216)" className="font-display" fontWeight="700">
                Rotterdam
              </text>
            </g>
          </svg>
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {waypoints.map((w, idx) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-center md:text-left"
            >
              <span className="inline-flex w-11 h-11 rounded-full border border-white/10 bg-zinc-900 items-center justify-center mb-4">
                <w.icon className="w-5 h-5 text-red-500" />
              </span>
              <h3 className="font-display font-bold mb-1">{w.title}</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
