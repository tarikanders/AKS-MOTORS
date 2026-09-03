import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from 'motion/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Flag, Gavel, ScanLine, Ship, Anchor, FileCheck, Key, type LucideIcon } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';

type Step = {
  icon: LucideIcon;
  flag?: boolean;
  title: string;
  desc: string;
};

// Particules du pulse mobile : éjectées en étoile autour du cœur, en boucle.
const PARTICLES = Array.from({ length: 6 }, (_, i) => {
  const angle = (i / 6) * Math.PI * 2;
  return {
    dx: Math.cos(angle) * 26,
    dy: Math.sin(angle) * 26,
    delay: i * 0.28,
  };
});

const steps: Step[] = [
  { icon: Flag, flag: true, title: 'Recherche', desc: 'Définition de votre projet et sourcing du véhicule idéal au Japon selon vos critères.' },
  { icon: Gavel, title: 'Enchères', desc: 'Nous enchérissons en direct dans les salles japonaises (USS, CAA, HAA) pour vous.' },
  { icon: ScanLine, title: 'Inspection', desc: 'Examen complet sur place : carrosserie, mécanique, châssis. Photos HD et relevé d’état.' },
  { icon: Ship, title: 'Transport maritime', desc: 'Chargement portuaire puis traversée en RORO ou conteneur — env. 30 à 45 jours en mer, avec un suivi au quotidien.' },
  { icon: Anchor, title: 'Rotterdam', desc: 'Débarquement au port de Rotterdam, dédouanement et formalités d’import européennes.' },
  { icon: FileCheck, title: 'Homologation', desc: 'Homologation DREAL / UTAC : mise aux normes, réception à titre isolé et démarches administratives jusqu’à la carte grise française définitive.' },
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
  const orbOpacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  // Tracé mobile : entre en courbe depuis le bord gauche de l'écran, descend
  // verticalement le long des étapes, puis se referme en courbe vers la gauche
  // après la dernière étape — la section « Le trajet » reprend ensuite une
  // ligne depuis le bord gauche jusqu'à la carte du Japon (voir RouteMap).
  // La hauteur du conteneur dépend du contenu, on la mesure pour construire le path.
  const pathRef = useRef<SVGPathElement>(null);
  const [pathH, setPathH] = useState(0);
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setPathH(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const LINE_X = 28; // aligné sur l'ancienne ligne (centre des pastilles desktop)
  const CURVE = 140;
  const mobilePath =
    pathH > 0
      ? `M -80 24 Q ${LINE_X} 24 ${LINE_X} ${24 + CURVE} L ${LINE_X} ${pathH - 24 - CURVE} Q ${LINE_X} ${pathH - 24} -80 ${pathH - 24}`
      : '';

  // Le pulse suit le tracé (courbes comprises) : position calculée sur le path SVG.
  const orbX = useMotionValue(-80);
  const orbY = useMotionValue(24);
  const placeOrb = (progress: number) => {
    const p = pathRef.current;
    if (!p) return;
    const pt = p.getPointAtLength(progress * p.getTotalLength());
    orbX.set(pt.x);
    orbY.set(pt.y);
  };
  useMotionValueEvent(scrollYProgress, 'change', placeOrb);
  useEffect(() => {
    placeOrb(scrollYProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobilePath]);

  return (
    <section id="processus" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900/40" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-14 md:mb-24"
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
          <p className="text-zinc-400 max-w-lg font-light text-base md:text-lg">
            De Tokyo à votre garage, en Alsace comme partout en France. Sept étapes maîtrisées de bout
            en bout — enchère, transport, dédouanement, homologation — pour une tranquillité d'esprit totale.
          </p>
        </motion.div>

        {/* Timeline verticale unique (mobile + desktop) : les 7 étapes se lisent
            dans le sens naturel du scroll, la ligne rouge progresse avec lui.
            Mobile : ligne + pastilles à gauche, cartes à droite. */}
        <div className="relative" ref={containerRef}>
          {/* Ligne verticale + progression (desktop) */}
          <div className="hidden md:block absolute md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-white/10">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-red-500 to-red-700 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Tracé courbe (mobile) : arrive du bord gauche, descend, se referme
              vers la gauche après la dernière étape */}
          {mobilePath && (
            <svg
              className="md:hidden absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="process-line-grad"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={pathH}
                >
                  <stop offset="0" stopColor="#ef4444" />
                  <stop offset="1" stopColor="#b91c1c" />
                </linearGradient>
              </defs>
              <path ref={pathRef} d={mobilePath} stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <motion.path
                d={mobilePath}
                stroke="url(#process-line-grad)"
                strokeWidth="2"
                fill="none"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          )}

          {/* Pulse rouge (mobile) : cœur lumineux + onde + particules, suit la
              pointe de la progression le long du tracé pendant le scroll */}
          <motion.div
            className="md:hidden absolute -left-7 -top-7 z-20 w-14 h-14 pointer-events-none"
            style={{ x: orbX, y: orbY, opacity: orbOpacity }}
            aria-hidden="true"
          >
            {/* Halo diffus */}
            <div className="absolute inset-0 rounded-full bg-red-500/30 blur-xl" />
            {/* Onde qui se propage */}
            <motion.div
              className="absolute inset-3 rounded-full border border-red-500/60"
              animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border border-red-500/40"
              animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.9 }}
            />
            {/* Cœur */}
            <motion.div
              className="absolute inset-[22px] rounded-full bg-red-500"
              style={{ boxShadow: '0 0 18px 6px rgba(239,68,68,0.55)' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Particules éjectées */}
            {PARTICLES.map((pt, i) => (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 -ml-[2px] -mt-[2px] w-1 h-1 rounded-full bg-red-400"
                animate={{ x: [0, pt.dx], y: [0, pt.dy], opacity: [0.9, 0], scale: [1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: pt.delay }}
              />
            ))}
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-4">
            {steps.map((step, idx) => {
              const left = idx % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative flex items-start md:items-center gap-0 pl-16 md:pl-0 ${
                    left ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Pastille / icône sur la ligne (desktop uniquement — sur mobile,
                      c'est l'orbe lumineuse qui matérialise la progression) */}
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px 0px' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full border border-white/10 bg-zinc-950 hidden md:flex items-center justify-center group md:absolute md:left-1/2 md:-translate-x-1/2 hover:border-red-600 transition-colors"
                  >
                    <step.icon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                    {step.flag && (
                      <span className="absolute -top-1 -right-1 text-xs" aria-hidden="true">🇯🇵</span>
                    )}
                  </motion.div>

                  {/* Contenu — mobile : bloc de texte épuré (style orbe), desktop : carte */}
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex-1 md:flex-none md:w-[calc(50%-3rem)] p-0 md:p-6 md:rounded-2xl md:border md:border-white/5 md:bg-zinc-900/50 md:hover:border-white/15 transition-colors ${
                      left ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className={`flex items-center gap-2.5 ${left ? 'md:justify-end' : ''}`}>
                      <span className="relative md:hidden" aria-hidden="true">
                        <step.icon className="w-4 h-4 text-red-500" />
                        {step.flag && <span className="absolute -top-2 -right-2 text-[10px]">🇯🇵</span>}
                      </span>
                      <span className="text-xs font-display font-bold text-zinc-600 tracking-widest">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2 mt-1 tracking-tight">{step.title}</h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-base md:text-sm">{step.desc}</p>
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
