import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Ship } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';

/**
 * Section « Suivez le trajet de votre véhicule » : une grande image du terminal
 * portuaire avec un léger parallax fluide au scroll.
 */
export function JourneyVideo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Parallax doux : l'image se dézoome très légèrement au fil du scroll.
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section id="parcours" ref={ref} className="py-32 bg-zinc-950 relative overflow-hidden">
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
            segments={[{ text: 'Suivez le trajet\n' }, { text: 'de votre véhicule', className: 'text-zinc-500' }]}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-400 max-w-2xl font-light text-lg"
          >
            Des enchères japonaises jusqu'à votre livraison, chaque étape de l'importation est
            maîtrisée et suivie de bout en bout.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
        >
          <div className="aspect-video bg-zinc-900 overflow-hidden">
            <motion.img
              src="/canvaport.png"
              alt="Terminal portuaire — trajet du véhicule du Japon vers l'Europe"
              style={{ scale }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950/60 backdrop-blur-md border border-white/10">
            <Ship className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs uppercase tracking-widest text-zinc-200">Japon → Europe</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
