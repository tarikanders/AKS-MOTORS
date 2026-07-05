import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { Reveal } from './fx/Reveal';

const items = [
  'Fiche d’enchère par inspecteurs qualifiés',
  'Kilométrage certifié',
  'Diagramme carrosserie',
  'Rapport d’inspection',
  'Photos HD',
  'Prix réel, sans surcôut',
];

/**
 * Section "Transparence" : capture d'un écran d'enchères à gauche, et la liste
 * des documents fournis à droite.
 */
export function Transparency() {
  return (
    <section id="transparence" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-2/3 bg-red-900/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Écran d'enchères */}
          <Reveal variant="clip">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl shadow-black/50">
              <img
                src="/enchereSurPC.png"
                alt="Écran d'enchères en ligne"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </Reveal>

          {/* Texte + checklist */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-red-600" />
              <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Confiance</span>
            </motion.div>

            <ScrollGlowText
              as="h2"
              className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-6"
              segments={[{ text: 'Transparence\n' }, { text: 'totale', className: 'text-zinc-500' }]}
            />

            <p className="text-zinc-400 font-light text-base md:text-lg mb-8 md:mb-10 max-w-lg">
              Au Japon, le contrôle technique (Shaken) pousse à revendre tôt : les véhicules sont
              peu kilométrés et entretenus avec un soin méticuleux. Pour chaque voiture, vous recevez
              une fiche d'enchère réalisée par des inspecteurs qualifiés — état détaillé, kilométrage
              certifié et diagramme carrosserie à l'appui. Aucun coût caché, un prix réel sans surcôut.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {items.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/15 border border-red-600/40 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-red-500" />
                  </span>
                  <span className="text-zinc-200 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
