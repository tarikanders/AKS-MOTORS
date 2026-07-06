import { motion, useScroll, useSpring } from 'motion/react';
import { useLayoutEffect, useRef, useState } from 'react';
import { Navigation } from 'lucide-react';
import { ScrollGlowText } from './fx/ScrollGlowText';
import { JourneyMap } from './fx/JourneyMap';
import { Logo } from './Logo';

/**
 * Raccord mobile minimal : la ligne du Processus s'est refermée vers la gauche
 * en fin de timeline ; elle reprend ici depuis le bord gauche de l'écran, juste
 * au-dessus de la carte, et rejoint le point de départ Japon — le tracé
 * maritime vers Rotterdam ne démarre qu'ensuite (prop `delayed` de JourneyMap).
 * Coordonnées pour une largeur de 430px, x mis à l'échelle `s`.
 */
function buildConnector(w: number, tx: number, ty: number) {
  const s = w / 430;
  const X = (x: number) => Math.round(x * s);
  return [
    // Entrée depuis le bord gauche (hors écran), au-dessus du Japon
    `M -60 ${Math.round(ty - 120)} C ${X(30)} ${Math.round(ty - 110)}, ${X(70)} ${Math.round(ty - 80)}, ${X(66)} ${Math.round(ty - 45)}`,
    // Descente douce qui atterrit sur le point Japon en repartant vers la droite
    `C ${X(62)} ${Math.round(ty - 20)}, ${Math.round(tx - 24)} ${Math.round(ty - 4)}, ${Math.round(tx)} ${Math.round(ty)}`,
  ].join(' ');
}

export function RouteMap() {
  const sectionRef = useRef<HTMLElement>(null);

  // Raccord mobile : la ligne de la timeline du Processus arrive au bord haut
  // de cette section (x écran = 24px de padding + 28px de LINE_X). Elle écrit
  // « AKS » puis rejoint le point de départ « 日本 Japon » de la carte — mesuré
  // en projetant ses coordonnées viewBox (150,210 / 1000×380) dans le repère de
  // la section. Recalculé à chaque resize (hauteur du titre).
  const [connector, setConnector] = useState<{ d: string; end: number } | null>(null);
  useLayoutEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const compute = () => {
      if (!window.matchMedia('(max-width: 767px)').matches) {
        setConnector(null);
        return;
      }
      const map = sec.querySelector('[data-journey-map]');
      if (!map) return;
      const sr = sec.getBoundingClientRect();
      const mr = map.getBoundingClientRect();
      const tx = mr.left - sr.left + (150 / 1000) * mr.width;
      const ty = mr.top - sr.top + (210 / 380) * mr.height;
      setConnector({ d: buildConnector(sr.width, tx, ty), end: Math.round(ty) });
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(sec);
    return () => ro.disconnect();
  }, []);

  // Le raccord est court et situé juste au-dessus de la carte : il se dessine
  // tard dans le scroll, juste avant que le tracé maritime (delayed) ne parte.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.35', 'start 0.05'],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.4 });

  return (
    <section ref={sectionRef} id="parcours" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-red-900/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Logo AKS (mobile) : dans la respiration entre la fin du Processus et le titre */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden absolute top-3 left-0 right-0 flex justify-center pointer-events-none"
        aria-hidden="true"
      >
        <Logo className="h-12 w-auto" />
      </motion.div>

      {/* Raccord mobile : reprise de la ligne depuis le bord gauche jusqu'au Japon */}
      {connector && (
        <svg className="md:hidden absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <linearGradient id="parcours-link-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={connector.end}>
              <stop offset="0" stopColor="#b91c1c" />
              <stop offset="1" stopColor="#f87171" />
            </linearGradient>
          </defs>
          <path d={connector.d} stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
          <motion.path
            d={connector.d}
            stroke="url(#parcours-link-grad)"
            strokeWidth="2"
            fill="none"
            style={{ pathLength: drawn }}
          />
        </svg>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
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
            segments={[{ text: 'Du Japon jusqu’à\n' }, { text: 'votre garage', className: 'text-zinc-500' }]}
          />

          {/* Suivi quotidien de la position du bateau */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-3 px-4 md:px-5 py-2.5 rounded-full bg-zinc-900/70 border border-white/10 backdrop-blur-sm max-w-full"
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500/70 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <Navigation className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span className="text-xs md:text-sm text-left text-zinc-200 font-light">
              Suivez la position de votre véhicule au quotidien, du départ jusqu'au port de Rotterdam.
            </span>
          </motion.div>
        </div>

        {/* Carte animée Japon → Pays-Bas (Rotterdam). `delayed` (mobile) : le
            tracé maritime ne se dessine qu'après l'arrivée de la ligne sur le
            point Japon, pas en même temps. */}
        <JourneyMap delayed={!!connector} />
      </div>
    </section>
  );
}
