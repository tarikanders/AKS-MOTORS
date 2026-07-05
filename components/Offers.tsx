import { useRef, type ElementType, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import { Search, Gavel, Ship, FileCheck, ScanLine, Sparkles, Key, Check, Minus, ArrowUpRight } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { Magnetic } from './fx/Magnetic';
import { usePrefersReducedMotion, useFinePointer } from '../lib/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;
/** Dégradé doré « signature » partagé avec WhyAksu / CarCare. */
const GOLD_GRAD = 'bg-gradient-to-r from-[#7a6a44] via-[#e9dcc0] to-[#9d895c] bg-clip-text text-transparent';

/** Le parcours d'import complet — chaque offre en allume une partie. */
const JOURNEY = [
  { key: 'recherche', label: 'Recherche du véhicule', icon: Search },
  { key: 'achat', label: 'Achat & enchères', icon: Gavel },
  { key: 'export', label: 'Export & acheminement', icon: Ship },
  { key: 'homologation', label: 'Homologation française', icon: FileCheck },
  { key: 'inspection', label: 'Inspection complète avant remise', icon: ScanLine },
  { key: 'nettoyage', label: 'Nettoyage complet du véhicule', icon: Sparkles },
  { key: 'livraison', label: 'Livraison à domicile', icon: Key },
] as const;

type StepKey = (typeof JOURNEY)[number]['key'];

type Offer = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  description: string;
  includes: StepKey[];
  icon: ElementType;
  featured?: boolean;
  /** Mention complémentaire affichée sous la description (ex. acompte enchères). */
  notaBene?: string;
};

const OFFERS: Offer[] = [
  {
    id: 'recherche',
    name: 'Recherche personnalisée',
    tagline: 'Du Japon à Rotterdam',
    price: '800 €',
    priceNote: 'Hors prix du véhicule et hors frais de livraison',
    description:
      "Nous recherchons le véhicule selon vos critères, l'achetons aux enchères, gérons l'export et l'acheminement jusqu'au port de Rotterdam, où vous récupérez votre véhicule.",
    includes: ['recherche', 'achat', 'export'],
    icon: Ship,
    notaBene:
      "La participation aux enchères est conditionnée à un acompte de 2 500 €, déduit du prix d'achat final du véhicule.",
  },
  {
    id: 'homologation',
    name: 'Homologation',
    tagline: 'Vous avez déjà importé',
    price: '1 900 €',
    priceNote: 'Forfait',
    description:
      "Vous avez déjà importé votre véhicule (Japon ou Corée) et besoin d'accompagnement ? Nous prenons en charge l'intégralité des démarches jusqu'à la carte grise française, en simplifiant vos démarches DREAL/UTAC. Délai moyen pour la CG définitive : 1 mois.",
    includes: ['homologation'],
    icon: FileCheck,
  },
  {
    id: 'cle-en-main',
    name: 'Clé en main',
    tagline: 'Vous ne gérez rien',
    price: 'À partir de 3 500 €',
    priceNote: 'Hors prix du véhicule',
    description:
      "Recherche, achat, importation, homologation et livraison finale à domicile. Nous orchestrons l'intégralité du parcours — vous n'avez plus qu'à prendre la route.",
    includes: ['recherche', 'achat', 'export', 'homologation', 'inspection', 'nettoyage', 'livraison'],
    icon: Key,
    featured: true,
  },
];

/** Carte d'une offre, avec sa check-list de parcours et son CTA. */
function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  const { featured } = offer;

  // Étapes du parcours allumées pour cette offre.
  const litSteps = new Set<StepKey>(offer.includes);

  const price = offer.price;

  // Inclinaison 3D pilotée par le curseur — réservée à la carte « Sérénité
  // totale », et seulement sur pointeur fin hors reduced-motion (comme Magnetic).
  const cardRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();
  const tilt = !!featured && fine && !reduced;

  const px = useMotionValue(0); // position curseur normalisée : -0.5 → 0.5
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 18 });
  const glareX = useTransform(px, [-0.5, 0.5], ['18%', '82%']);
  const glareY = useTransform(py, [-0.5, 0.5], ['8%', '92%']);
  const glare = useMotionTemplate`radial-gradient(440px circle at ${glareX} ${glareY}, rgba(233,220,192,0.22), transparent 62%)`;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };
  /** Profondeur 3D d'un élément (no-op si la carte n'est pas inclinable). */
  const depth = (z: number) => (tilt ? { transform: `translateZ(${z}px)` } : undefined);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
      style={tilt ? { rotateX, rotateY, transformPerspective: 1200, transformStyle: 'preserve-3d' } : undefined}
      className={`relative flex flex-col p-6 md:p-8 rounded-2xl bg-zinc-900/50 transition-colors ${
        featured
          ? 'border border-[#9d895c]/50 shadow-2xl shadow-black/60 will-change-transform'
          : 'border border-white/5 hover:border-white/15'
      }`}
    >
      {featured && (
        <span
          style={tilt ? { transform: 'translateX(-50%) translateZ(70px)' } : undefined}
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#9d895c]/15 border border-[#9d895c]/40 text-[#cbb789] text-[10px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap shadow-lg shadow-black/40"
        >
          Sérénité totale
        </span>
      )}

      {/* En-tête : pastille + nom + tagline */}
      <span
        style={depth(45)}
        className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 mb-6"
      >
        <offer.icon className={`w-5 h-5 ${featured ? 'text-[#cbb789]' : 'text-red-500'}`} />
      </span>
      <h3
        style={depth(35)}
        className={`text-2xl font-display font-bold uppercase tracking-tight mb-1 ${
          featured ? GOLD_GRAD : ''
        }`}
      >
        {offer.name}
      </h3>
      <p style={depth(35)} className="text-zinc-500 text-sm font-light mb-6">{offer.tagline}</p>

      {/* Prix */}
      <div style={depth(25)} className="mb-6">
        <div className="text-2xl md:text-3xl font-display font-bold tracking-tight">{price}</div>
        <div className="text-[11px] text-zinc-500 uppercase tracking-widest mt-1">{offer.priceNote}</div>
      </div>

      <p className={`text-zinc-400 font-light text-sm leading-relaxed ${offer.notaBene ? 'mb-4' : 'mb-8'}`}>{offer.description}</p>

      {offer.notaBene && (
        <p className="text-xs text-zinc-500 font-light leading-relaxed mb-8 pl-3 border-l-2 border-red-600/40">
          {offer.notaBene}
        </p>
      )}

      {/* Check-list du parcours */}
      <div className="border-t border-white/5 pt-6 mb-8">
        <p className="text-[11px] text-zinc-500 uppercase tracking-widest mb-4">Ce que nous gérons</p>
        <ul className="space-y-3">
          {JOURNEY.map((step) => {
            const included = litSteps.has(step.key);
            return (
              <li key={step.key} className="flex items-center gap-3">
                {included ? (
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/15 border border-red-600/40 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-red-500" />
                  </span>
                ) : (
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    <Minus className="w-3.5 h-3.5 text-zinc-600" />
                  </span>
                )}
                <span className={`text-sm font-light ${included ? 'text-zinc-200' : 'text-zinc-600'}`}>
                  {step.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA — poussé en bas de carte */}
      <div style={depth(30)} className="mt-auto">
        <Magnetic className="w-full" strength={0.25}>
          <a
            href="#contact"
            className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-sm font-semibold uppercase tracking-widest text-sm transition-colors ${
              featured
                ? 'bg-white text-black hover:bg-zinc-200'
                : 'border border-white/15 text-white hover:border-white/40'
            }`}
          >
            Demander un devis
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </Magnetic>
      </div>

      {/* Reflet doré qui suit le curseur (par-dessus, en soft-light) */}
      {tilt && (
        <motion.div
          aria-hidden
          style={{ background: glare, transform: 'translateZ(90px)' }}
          className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-soft-light"
        />
      )}
    </motion.div>
  );
}

/**
 * Section « Nos Offres » : trois prestations présentées comme des sous-ensembles
 * du même parcours d'import. Chaque carte allume une partie croissante du trajet
 * (Recherche → Achat → Export → Homologation → Livraison), rendant les
 * différences immédiatement lisibles. L'offre Clé en main est mise en avant.
 */
export function Offers() {
  return (
    <section id="offres" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête centré */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Offres</span>
            <div className="h-[1px] w-12 bg-red-600" />
          </motion.div>
          <ScrollGlowText
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-6"
            segments={[{ text: 'Nos\n' }, { text: 'Prestations', className: 'text-zinc-500' }]}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-zinc-400 text-base md:text-lg font-light"
          >
            Trois niveaux d'accompagnement pour un même parcours. Choisissez jusqu'où nous prenons
            la main — de la simple homologation au service entièrement clé en main.
          </motion.p>
        </div>

        {/* Mobile : carrousel horizontal snap. Desktop (lg+) : grille 3 colonnes.
            `lg:contents` dissout le wrapper en grille pour préserver l'égalité de hauteur. */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 items-stretch overflow-x-auto lg:overflow-visible snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 pt-3 pb-4 lg:pt-0 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {OFFERS.map((offer, idx) => (
            <div key={offer.id} className="lg:contents shrink-0 w-[85%] sm:w-[65%] snap-center flex flex-col">
              <OfferCard offer={offer} index={idx} />
            </div>
          ))}
        </div>
        <p className="lg:hidden text-center text-xs text-zinc-600 uppercase tracking-widest mt-6">
          Glissez pour comparer les offres →
        </p>
      </div>
    </section>
  );
}
