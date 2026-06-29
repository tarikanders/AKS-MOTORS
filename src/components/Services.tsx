import { useState, type ElementType } from 'react';
import { motion } from 'motion/react';
import { Gavel, ScanLine, Ship, FileCheck } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';

type Block = {
  icon: ElementType;
  label: string;
  desc: string;
  /** Position du bloc flottant sur l'image (desktop). */
  pos: string;
};

const blocks: Block[] = [
  {
    icon: Gavel,
    label: 'Accès USS',
    desc: 'Enchères en direct dans les plus grandes salles japonaises.',
    pos: 'top-4 left-4 md:top-10 md:left-10',
  },
  {
    icon: ScanLine,
    label: 'Inspection',
    desc: "Contrôle complet de l'état réel avant tout achat.",
    pos: 'top-4 right-4 md:top-10 md:right-10',
  },
  {
    icon: Ship,
    label: 'Transport',
    desc: 'Fret maritime sécurisé et assuré jusqu’en Europe.',
    pos: 'bottom-4 left-4 md:bottom-10 md:left-10',
  },
  {
    icon: FileCheck,
    label: 'Homologation',
    desc: 'Mise aux normes et dossier carte grise française.',
    pos: 'bottom-4 right-4 md:bottom-10 md:right-10',
  },
];

/**
 * Section « Notre Expertise » immersive : une grande image plein cadre de la
 * salle d'enchères, surmontée de 4 blocs flottants. Au survol d'un bloc, il
 * s'agrandit et la photo derrière se zoome légèrement.
 */
export function Services() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="services" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête centré */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Services</span>
            <div className="h-[1px] w-12 bg-red-600" />
          </motion.div>
          <ScrollGlowText
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-6"
            segments={[{ text: 'Notre\n' }, { text: 'Expertise', className: 'text-zinc-500' }]}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-zinc-400 text-lg font-light"
          >
            Importer un véhicule depuis le Japon nécessite une expertise complète. Nous maîtrisons
            chaque maillon de la chaîne, des enchères à l'homologation.
          </motion.p>
        </div>

        {/* Image immersive + blocs flottants */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 h-[560px] md:h-[680px]"
        >
          {/* Photo plein cadre */}
          <img
            src="/enchere.png"
            alt="Salle d'enchères automobiles au Japon"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              hovered ? 'scale-110' : 'scale-105'
            }`}
          />
          {/* Voiles pour la lisibilité des blocs */}
          <div className="absolute inset-0 bg-zinc-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/50" />

          {/* Blocs flottants */}
          {blocks.map((block, idx) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.06, y: -4 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              data-cursor="Expertise"
              className={`absolute ${block.pos} w-[clamp(140px,42vw,260px)] p-4 md:p-5 rounded-2xl bg-zinc-950/55 backdrop-blur-xl border border-white/10 hover:border-red-600/60 transition-colors cursor-pointer`}
            >
              <span className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/15 bg-white/5 mb-3 md:mb-4">
                <block.icon className="w-5 h-5 text-red-500" />
              </span>
              <h3 className="text-lg font-display font-bold uppercase tracking-tight mb-1">{block.label}</h3>
              <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed">{block.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
