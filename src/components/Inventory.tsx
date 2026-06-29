import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Reveal } from './fx/Reveal';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { Magnetic } from './fx/Magnetic';

type Car = {
  name: string;
  brand: string;
  chassis: string;
  year: string;
  grade: string;
  mileage: string;
  price: string;
  image: string;
  status: string;
};

const cars: Car[] = [
  {
    name: "Skyline GT-R V-Spec II",
    brand: "Nissan",
    chassis: "BNR34",
    year: "2001",
    grade: "4.5 B",
    mileage: "62,000 km",
    price: "Sur demande",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    status: "En transit"
  },
  {
    name: "Supra RZ Twin Turbo",
    brand: "Toyota",
    chassis: "JZA80",
    year: "1997",
    grade: "4 C",
    mileage: "98,000 km",
    price: "78,500 €",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    status: "Disponible"
  },
  {
    name: "RX-7 Type R Bathurst R",
    brand: "Mazda",
    chassis: "FD3S",
    year: "2001",
    grade: "5 A",
    mileage: "34,000 km",
    price: "Sur demande",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    status: "Vendu"
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
        <div className="relative overflow-hidden aspect-[4/5] rounded-2xl mb-8 ring-1 ring-white/5 group-hover:ring-white/20 shadow-lg shadow-black/30 group-hover:shadow-2xl group-hover:shadow-black/60 transition-all duration-700">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
          <motion.img
            style={{ y: imageY }}
            src={car.image}
            alt={car.name}
            className="absolute inset-0 w-full h-[116%] object-cover origin-center transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />

          <div className="absolute top-6 left-6 z-20">
            <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md border ${
              car.status === 'Vendu' ? 'bg-zinc-950/80 text-zinc-400 border-zinc-800' :
              car.status === 'En transit' ? 'bg-blue-950/80 text-blue-400 border-blue-900/50' :
              'bg-zinc-100 text-zinc-900 border-white'
            }`}>
              {car.status}
            </span>
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

        <div className="grid grid-cols-3 gap-4 px-2">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Année</p>
            <p className="font-medium text-zinc-200">{car.year}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Grade</p>
            <p className="font-medium text-zinc-200">{car.grade}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Kilométrage</p>
            <p className="font-medium text-zinc-200">{car.mileage}</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 px-2 flex justify-between items-center">
          <span className="text-sm text-zinc-400 font-medium">Prix TTC hors CG</span>
          <span className="text-xl font-display font-bold text-white">{car.price}</span>
        </div>
      </motion.a>
    </Reveal>
  );
}

export function Inventory() {
  return (
    <section id="stock" className="py-32 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {cars.map((car, idx) => (
            <motion.div key={idx} className="contents">
              <CarCard car={car} idx={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
