import { useState } from 'react';
import { motion } from 'motion/react';
import { Gavel, ScanLine, ParkingSquare, Ship, type LucideIcon } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { Reveal } from './fx/Reveal';
import { SnapCarousel } from './fx/SnapCarousel';

type Step = {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
};

/** Le parcours terrain, des enchères au chargement sur navire. */
const steps: Step[] = [
  {
    icon: ScanLine,
    title: 'Inspection véhicule',
    desc: 'Carrosserie, châssis, mécanique : examen sur place, photos HD à l’appui.',
    image: '/inspection.png',
  },
  {
    icon: ParkingSquare,
    title: 'Parking export',
    desc: 'Stationnement sécurisé et suivi jusqu’au départ du navire.',
    image: '/packaging.jpg',
  },
  {
    icon: Ship,
    title: 'Chargement sur navire',
    desc: 'Traversée en RORO ou conteneur, 30 à 45 jours de mer, suivi quotidien.',
    image: '/terminalport.png',
  },
];

/**
 * Section « Notre savoir-faire » : un seul récit immersif qui réunit l'ancienne
 * « Notre Expertise » et « Les coulisses des enchères ». On part de la salle
 * d'enchères (grande image), puis on déroule le travail de terrain — inspection,
 * parking export, chargement — en trois cartes.
 */
export function Services() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="services" className="pt-14 pb-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Sur le terrain</span>
            <div className="h-[1px] w-12 bg-red-600" />
          </motion.div>
          <ScrollGlowText
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-6"
            segments={[{ text: 'Notre\n' }, { text: 'Savoir-faire', className: 'text-zinc-500' }]}
          />
          {/* Valeur ajoutée : pourquoi acheter au Japon plutôt qu'en France */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-zinc-300 text-base md:text-lg font-light leading-relaxed"
          >
            Pourquoi le Japon ? Parce que la même voiture y coûte souvent{' '}
            <strong className="text-white font-medium">30 à 50 % de moins qu'en France</strong> — parfois
            plus de <strong className="text-white font-medium">10 000 € d'écart</strong>. Vous accédez à la
            voiture de vos rêves à moindre coût, sans compromis sur l'état.
          </motion.p>
        </div>

        {/* Image immersive : la salle d'enchères, point de départ du parcours */}
        <Reveal variant="clip" className="mb-6">
          <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-cursor="Enchères"
            className="relative aspect-[3/2] sm:aspect-[16/10] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
          >
            <img
              src="/enchere.png"
              alt="Salle d'enchères automobiles au Japon"
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hovered ? 'scale-105' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            {/* Scrim localisé : assoit le texte sur la zone la plus chargée de l'image */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-12 max-w-xl">
              <p className="text-xs text-red-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2 [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
                <Gavel className="w-4 h-4 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]" /> USS · CAA · HAA
              </p>
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-3 [text-shadow:0_2px_16px_rgba(0,0,0,0.85)]">
                Au cœur des enchères
              </h3>
              <p className="text-sm md:text-base text-zinc-100 font-light leading-relaxed [text-shadow:0_1px_10px_rgba(0,0,0,0.9)]">
                Nous enchérissons en direct pour vous dans les plus grandes salles du Japon,
                cote et historique à l'appui.
              </p>
            </div>
          </motion.div>
        </Reveal>

        {/* Le travail de terrain, après l'adjudication.
            Mobile : carrousel Embla (scroll vertical prioritaire, carte suivante en
            aperçu, points de pagination). Desktop : grille 3 colonnes. */}
        <SnapCarousel
          breakpoint="md"
          ariaLabel="Le travail de terrain"
          containerClassName="gap-4 md:grid md:grid-cols-3 md:gap-6"
          slideClassName="flex-[0_0_72%] sm:flex-[0_0_48%]"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-50px 0px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-cursor="Process"
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-colors aspect-[3/4] md:aspect-[4/5]"
            >
              <img
                src={step.image}
                alt={step.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-500">
                  <step.icon className="w-5 h-5 text-white" />
                </span>
                <div>
                  <span className="text-xs font-display font-bold text-zinc-500 tracking-widest">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2 mt-1">{step.title}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </SnapCarousel>
      </div>
    </section>
  );
}
