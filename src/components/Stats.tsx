import { motion } from 'motion/react';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { CountUp } from './fx/CountUp';

type Stat = {
  num: number;
  suffix?: string;
  separator?: string;
  label: string;
};

const stats: Stat[] = [
  { num: 10, suffix: '+', label: 'Années d’expérience' },
  { num: 150, suffix: '+', label: 'Véhicules importés' },
  { num: 120000, suffix: '+', separator: ' ', label: 'Voitures aux enchères' },
  { num: 40, suffix: '+', label: 'Enchères partenaires' },
  { num: 100, suffix: '%', label: 'Service clé en main' },
  { num: 97, suffix: '%', label: 'Clients satisfaits' },
];

/** Section "Nos chiffres" : compteurs animés sur fond noir, rendu premium. */
export function Stats() {
  return (
    <section id="chiffres" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(127,29,29,0.18),transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">En chiffres</span>
            <div className="h-[1px] w-8 bg-red-600" />
          </motion.div>
          <ScrollGlowText
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9]"
            segments={[{ text: 'Nos\n' }, { text: 'chiffres', className: 'text-zinc-500' }]}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black hover:bg-zinc-950 transition-colors p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <p className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-3 tracking-tighter">
                <CountUp value={stat.num} suffix={stat.suffix} separator={stat.separator} />
              </p>
              <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
