import { motion } from 'motion/react';
import { Anchor, Flag, MapPin, Home, Navigation } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { JourneyMap } from './fx/JourneyMap';

const waypoints = [
  { icon: Flag, title: 'Départ du Japon', desc: 'Enchères & chargement portuaire' },
  { icon: Anchor, title: 'Traversée maritime', desc: 'Env. 30 à 45 jours en mer' },
  { icon: MapPin, title: 'Port de Rotterdam', desc: 'Débarquement & dédouanement' },
  { icon: Home, title: 'Livraison', desc: 'Homologation puis remise des clés' },
];

/**
 * Section unique « Du Japon jusqu'à votre garage » : présente le trajet complet
 * (anciennement scindé en deux sections). Carte Japon → Pays-Bas / Rotterdam avec
 * ports illuminés et cargo animé, suivi quotidien, puis les grandes étapes.
 */
export function RouteMap() {
  return (
    <section id="parcours" className="py-32 bg-zinc-950 relative overflow-hidden">
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
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Le trajet</span>
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

          {/* Suivi quotidien de la position du bateau */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-7 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/70 border border-white/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500/70 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <Navigation className="w-4 h-4 text-red-500" />
            <span className="text-sm text-zinc-200 font-light">
              Suivez la position de votre véhicule au quotidien, du départ jusqu'au port de Rotterdam.
            </span>
          </motion.div>
        </div>

        {/* Carte animée Japon → Pays-Bas (Rotterdam) */}
        <JourneyMap />

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
