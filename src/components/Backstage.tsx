import { motion } from 'motion/react';
import { type ElementType } from 'react';
import { ScanLine, ParkingSquare, Ship } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { Reveal } from './fx/Reveal';

type Backstep = {
  icon: ElementType;
  title: string;
  desc: string;
  image: string | null;
};

const steps: Backstep[] = [
  {
    icon: ScanLine,
    title: 'Inspection véhicule',
    desc: "Chaque lot est examiné sur place : carrosserie, châssis, mécanique. Photos HD et relevé d'état avant la mise en conteneur.",
    image: '/inspection.png',
  },
  {
    icon: ParkingSquare,
    title: 'Parking export',
    desc: "Stationnement sécurisé sur les terre-pleins d'export en attendant le départ. Le véhicule est protégé et suivi.",
    image: null,
  },
  {
    icon: Ship,
    title: 'Chargement sur navire',
    desc: 'Mise à bord au terminal portuaire (RORO ou conteneur), puis traversée jusqu’aux ports européens.',
    image: '/terminalport.png',
  },
];

/**
 * Section narrative "Les coulisses des enchères japonaises" : une grande photo
 * de la salle d'enchères, puis trois cartes illustrant le process réel.
 */
export function Backstage() {
  return (
    <section id="coulisses" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Sur le terrain</span>
          </motion.div>
          <ScrollGlowText
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9]"
            segments={[{ text: 'Les coulisses\n' }, { text: 'des enchères japonaises', className: 'text-zinc-500' }]}
          />
        </div>

        {/* Grande photo : salle d'enchères */}
        <Reveal variant="clip" className="mb-6">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 group">
            <img
              src="/enchere.png"
              alt="Salle d'enchères japonaise"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <p className="text-xs text-red-500 uppercase tracking-[0.2em] mb-2">USS · CAA · HAA</p>
              <h3 className="text-2xl md:text-4xl font-display font-bold">Salle d'enchères</h3>
              <p className="text-zinc-300 font-light mt-2 max-w-md">
                Des milliers de véhicules adjugés chaque semaine. Nous y enchérissons en direct pour vous.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Trois cartes process */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-cursor="Process"
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-colors aspect-[4/5]"
            >
              {step.image ? (
                <img
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-500">
                  <step.icon className="w-5 h-5 text-white" />
                </span>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
