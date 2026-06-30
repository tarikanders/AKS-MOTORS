import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ElementType } from 'react';
import { Flag, Gavel, ScanLine, Ship, Anchor, FileCheck, Key } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';

type Step = {
  icon: ElementType;
  flag?: boolean;
  title: string;
  desc: string;
};

const steps: Step[] = [
  { icon: Flag, flag: true, title: 'Recherche', desc: 'Définition de votre projet et sourcing du véhicule idéal au Japon selon vos critères.' },
  { icon: Gavel, title: 'Enchères', desc: 'Nous enchérissons en direct dans les salles japonaises (USS, CAA, HAA) pour vous.' },
  { icon: ScanLine, title: 'Inspection', desc: 'Examen complet sur place : carrosserie, mécanique, châssis. Photos HD et relevé d’état.' },
  { icon: Ship, title: 'Transport maritime', desc: 'Chargement portuaire puis traversée en RORO ou conteneur — env. 30 à 45 jours en mer, navire suivi au quotidien.' },
  { icon: Anchor, title: 'Rotterdam', desc: 'Débarquement au port de Rotterdam, dédouanement et formalités d’import européennes.' },
  { icon: FileCheck, title: 'Homologation', desc: 'Mise aux normes, passage UTAC et dossier DREAL pour la carte grise française définitive.' },
  { icon: Key, title: 'Livraison', desc: 'Remise des clés de votre véhicule immatriculé, prêt à prendre la route.' },
];

/** Timeline premium verticale du processus d'import, animée au scroll. */
export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="processus" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900/40" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Méthodologie</span>
            <div className="h-[1px] w-8 bg-red-600" />
          </div>
          <ScrollGlowText
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-6"
            segments={[{ text: 'Le\n' }, { text: 'Processus', className: 'text-zinc-500' }]}
          />
          <p className="text-zinc-400 max-w-lg font-light text-lg">
            De Tokyo à votre garage. Sept étapes maîtrisées de bout en bout pour une tranquillité d'esprit totale.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Ligne verticale + progression */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-white/10">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-red-500 to-red-700 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-4">
            {steps.map((step, idx) => {
              const left = idx % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                    left ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Pastille / icône sur la ligne */}
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center group md:absolute md:left-1/2 md:-translate-x-1/2 hover:border-red-600 transition-colors"
                  >
                    <step.icon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                    {step.flag && (
                      <span className="absolute -top-1 -right-1 text-xs" aria-hidden="true">🇯🇵</span>
                    )}
                  </motion.div>

                  {/* Carte — émerge de la ligne centrale puis s'écarte vers son côté */}
                  <motion.div
                    initial={{ opacity: 0, x: left ? 70 : -70, y: 12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-white/15 transition-colors ${
                      left ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <span className="text-xs font-display font-bold text-zinc-600 tracking-widest">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-display font-bold mb-2 mt-1 tracking-tight">{step.title}</h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-sm">{step.desc}</p>
                  </motion.div>

                  {/* Espace miroir (desktop) */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
