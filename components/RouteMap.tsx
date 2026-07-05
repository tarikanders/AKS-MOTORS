import { motion } from 'motion/react';
import { Navigation } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { JourneyMap } from './fx/JourneyMap';

/**
 * Section unique « Du Japon jusqu'à votre garage » : carte Japon → Pays-Bas /
 * Rotterdam avec ports illuminés et cargo animé, et suivi quotidien. Le détail
 * des étapes du trajet est désormais raconté dans la timeline du Processus,
 * pour ne pas expliquer deux fois le même parcours.
 */
export function RouteMap() {
  return (
    <section id="parcours" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-red-900/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
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

          {/* Suivi quotidien de la position du bateau */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-3 px-4 md:px-5 py-2.5 rounded-full bg-zinc-900/70 border border-white/10 backdrop-blur-sm max-w-full"
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500/70 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <Navigation className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span className="text-xs md:text-sm text-left text-zinc-200 font-light">
              Suivez la position de votre véhicule au quotidien, du départ jusqu'au port de Rotterdam.
            </span>
          </motion.div>
        </div>

        {/* Carte animée Japon → Pays-Bas (Rotterdam) */}
        <JourneyMap />
      </div>
    </section>
  );
}
