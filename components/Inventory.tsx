import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Reveal } from './fx/Reveal';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { Magnetic } from './fx/Magnetic';
import { SnapCarousel } from './fx/SnapCarousel';

type Car = {
  name: string;
  brand: string;
  chassis: string;
  year: string;
  grade: string;
  mileage: string;
  price: string;
  /** Écart de prix vs marché français (ex. "-20%"). Optionnel. */
  economy?: string;
  image: string;
  status: string;
};

const cars: Car[] = [
  {
    name: "911 Carrera 4S",
    brand: "Porsche",
    chassis: "Type 997",
    year: "2010",
    grade: "5 A",
    mileage: "48,000 km",
    price: "48 000 €",
    economy: "-20%",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    status: "Disponible"
  },
  {
    name: "Supra RZ Twin Turbo",
    brand: "Toyota",
    chassis: "JZA80",
    year: "1997",
    grade: "4 C",
    mileage: "98,000 km",
    price: "78 500 €",
    economy: "-25%",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    status: "Disponible"
  },
  {
    name: "Skyline GT-R V-Spec II",
    brand: "Nissan",
    chassis: "BNR34",
    year: "2001",
    grade: "4.5 B",
    mileage: "62,000 km",
    price: "112 000 €",
    economy: "-20%",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    status: "En transit"
  }
];

function CarCard({ car, idx }: { car: Car; idx: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Parallax interne léger de l'image.
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <Reveal variant="up" delay={idx * 0.12}>
      <motion.a
        ref={ref}
        href="#contact"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        data-cursor="Voir"
        className="group cursor-pointer block"
      >
        <div className="relative overflow-hidden aspect-[4/5] rounded-2xl mb-6 md:mb-8 ring-1 ring-white/5 group-hover:ring-white/20 shadow-lg shadow-black/30 group-hover:shadow-2xl group-hover:shadow-black/60 transition-all duration-700">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
          {/* Parallax sur le wrapper, next/image en fill à l'intérieur
              (optimisation format/dimensions impossible sur un <img> brut). */}
          <motion.div style={{ y: imageY }} className="absolute inset-0 h-[116%]">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.name} ${car.chassis} (${car.year}) importée du Japon par AKS Motors`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 55vw, 78vw"
              className="object-cover origin-center transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            />
          </motion.div>

          {/* Badges en flux flex (jamais en chevauchement, quelle que soit la largeur).
              Le détail « vs marché FR » n'apparaît qu'à partir de sm — il reste
              affiché en toutes lettres sous le prix de la carte. */}
          <div className="absolute top-4 inset-x-4 md:top-6 md:inset-x-6 z-20 flex flex-wrap items-start justify-between gap-2">
            <span className={`px-3 md:px-4 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md border whitespace-nowrap ${
              car.status === 'Vendu' ? 'bg-zinc-950/80 text-zinc-400 border-zinc-800' :
              car.status === 'En transit' ? 'bg-blue-950/80 text-blue-400 border-blue-900/50' :
              'bg-zinc-100 text-zinc-900 border-white'
            }`}>
              {car.status}
            </span>
            {car.economy && (
              <span className="px-3 md:px-4 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md border bg-emerald-500/15 text-emerald-300 border-emerald-500/40 whitespace-nowrap">
                {car.economy}
                <span className="hidden sm:inline"> vs marché FR</span>
              </span>
            )}
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
            <div className="text-white">
              <p className="text-sm font-medium tracking-widest uppercase mb-1 opacity-80">{car.brand} • {car.chassis}</p>
              <h3 className="text-2xl font-display font-bold leading-tight">{car.name}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4 px-2">
          <div>
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider md:tracking-widest mb-1">Année</p>
            <p className="font-medium text-zinc-200">{car.year}</p>
          </div>
          <div>
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider md:tracking-widest mb-1">Grade</p>
            <p className="font-medium text-zinc-200">{car.grade}</p>
          </div>
          <div>
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider md:tracking-widest mb-1">Kilométrage</p>
            <p className="font-medium text-zinc-200">{car.mileage}</p>
          </div>
        </div>

        <div className="mt-5 pt-5 md:mt-6 md:pt-6 border-t border-white/5 px-2 flex justify-between items-end">
          <div>
            <span className="block text-sm text-zinc-400 font-medium">Prix tout compris</span>
            {car.economy && (
              <span className="text-xs text-emerald-400 font-medium">{car.economy} vs marché français</span>
            )}
          </div>
          <span className="text-xl font-display font-bold text-white">{car.price}</span>
        </div>
      </motion.a>
    </Reveal>
  );
}

export function Inventory() {
  return (
    <section id="stock" className="py-20 md:py-32 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-red-600" />
              <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Catalogue</span>
            </motion.div>
            <ScrollGlowText
              as="h2"
              className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.9]"
              segments={[{ text: 'Sélection\n' }, { text: 'Premium', className: 'text-zinc-500' }]}
            />
            <p className="mt-6 text-zinc-400 font-light text-base md:text-lg max-w-md">
              Prix tout compris, économies réelles face au marché français. Un aperçu de ce que
              vous pouvez viser — Porsche, JDM d'exception et bien d'autres.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-white uppercase tracking-widest text-xs font-semibold py-3 px-6 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Voir le stock complet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Mobile/tablette : carrousel Embla (scroll vertical prioritaire, carte
            suivante en aperçu, points de pagination). Desktop (lg+) : grille 3 colonnes. */}
        <SnapCarousel
          breakpoint="lg"
          ariaLabel="Véhicules en stock"
          containerClassName="gap-4 sm:gap-6 lg:grid lg:grid-cols-3 lg:gap-8"
          slideClassName="flex-[0_0_78%] sm:flex-[0_0_55%]"
        >
          {cars.map((car, idx) => (
            <CarCard key={car.name} car={car} idx={idx} />
          ))}
        </SnapCarousel>
      </div>
    </section>
  );
}
