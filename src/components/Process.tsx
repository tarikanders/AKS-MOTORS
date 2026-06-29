import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    num: "01",
    title: "Cahier des charges",
    desc: "Définition de votre projet : modèle, budget, grade d'enchère, kilométrage."
  },
  {
    num: "02",
    title: "Achat & Sécurisation",
    desc: "Enchère ou achat direct, inspection minutieuse, traduction complète de la feuille d'enchère."
  },
  {
    num: "03",
    title: "Importation",
    desc: "Transport maritime (RORO ou conteneur), suivi en temps réel du navire, dédouanement à l'arrivée."
  },
  {
    num: "04",
    title: "Homologation",
    desc: "Mise aux normes, passage UTAC, RTI DREAL. Votre voiture reçoit ses plaques françaises définitives."
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-zinc-900/50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
            Le Processus
          </h2>
          <p className="text-zinc-400 max-w-lg font-light text-lg">
            De Tokyo à votre garage. Une procédure maîtrisée de bout en bout pour une tranquillité d'esprit totale.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Progress Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-0 right-0 h-[1px] bg-white/10">
            <motion.div 
              className="absolute top-0 left-0 bottom-0 bg-red-600" 
              style={{ width: lineHeight }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col md:block items-center text-center md:text-left"
              >
                <div className="w-24 h-24 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center text-3xl font-display font-bold text-white mb-8 relative z-10 group transition-colors hover:border-red-600">
                  <span className="text-zinc-500 group-hover:text-red-500 transition-colors">{step.num}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 font-display tracking-tight">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
