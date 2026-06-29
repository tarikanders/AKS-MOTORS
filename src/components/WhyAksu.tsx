import { useRef, useEffect, useState, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue, type Variants } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { usePrefersReducedMotion } from '../lib/useReducedMotion';

const GOLD = '#9d895c';
const FINAL_PHRASE =
  "Chaque véhicule porte l'histoire de son passé. Notre mission est de lui offrir le début de son avenir.";
/** Ligne de signature, en majuscules, écrite lettre par lettre. */
const SIG = "C'EST ÇA, LA SIGNATURE AKS";
/** « AKS Motors » en katakana, pour la signature calligraphique japonaise. */
const JP_BRAND = 'アクスモーターズ';

/** Dégradé doré partagé par les mots de la signature. */
const GRAD = 'bg-gradient-to-r from-[#7a6a44] via-[#e9dcc0] to-[#9d895c] bg-clip-text text-transparent';

/** La signature se révèle mot par mot, avec un léger décalage. */
const sigContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};
const sigWord: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const sigComma: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 420, damping: 15 } },
};

/** Un « écran » de texte en surimpression, qui apparaît puis disparaît selon le scroll. */
function Scene({
  progress,
  start,
  end,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  children: ReactNode;
}) {
  const fade = Math.min(0.05, (end - start) / 3);
  const opacity = useTransform(progress, [start, start + fade, end - fade, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [50, -50]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      {children}
    </motion.div>
  );
}

/**
 * Section « Pourquoi AKS Motors » immersive façon Apple : la vidéo d'inspection
 * reste épinglée (sticky) plein écran et défile au scroll (scrubbing). Les
 * messages clés apparaissent par-dessus, puis la vidéo s'assombrit et la phrase
 * finale s'écrit lettre par lettre (façon clavier) en doré, suivie du bouton.
 */
export function WhyAksu() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const reduced = usePrefersReducedMotion();

  const [typed, setTyped] = useState(0);
  const [sigIn, setSigIn] = useState(false);
  const [logoIn, setLogoIn] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Fondu progressif : la vidéo s'assombrit et reste sombre jusqu'à la fin,
  // pour faire ressortir la phrase dorée et la signature.
  const darken = useTransform(scrollYProgress, [0.34, 0.58], [0.15, 0.85]);
  // Indice « défilez » qui disparaît dès les premiers pixels.
  const hintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  // 1) La phrase apparaît, s'écrit, puis s'efface… 2) … pour laisser place à la signature,
  // qui reste affichée jusqu'à la toute fin de la section.
  const phraseOpacity = useTransform(scrollYProgress, [0.4, 0.44, 0.62, 0.68], [0, 1, 1, 0]);
  const sigOpacity = useTransform(scrollYProgress, [0.66, 0.72], [0, 1]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;
    const onMeta = () => {
      durationRef.current = video.duration || 0;
      video.pause();
    };
    if (video.readyState >= 1) onMeta();
    video.addEventListener('loadedmetadata', onMeta);
    return () => video.removeEventListener('loadedmetadata', onMeta);
  }, [reduced]);

  // Vidéo pilotée directement par le scroll (couplage 1:1, sans ressort qui
  // « traîne » : elle avance tant qu'on défile et s'arrête net quand on stoppe).
  const lastSeek = useRef(-1);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const video = videoRef.current;
    const duration = durationRef.current;
    if (!video || !duration || reduced) return;
    const t = Math.min(Math.max(v, 0), 1) * duration;
    if (!Number.isFinite(t) || Math.abs(t - lastSeek.current) < 1 / 48) return;
    lastSeek.current = t;
    // La vidéo est ré-encodée tout-keyframe : fastSeek (Firefox) ou currentTime
    // (Chrome) atteignent n'importe quelle image instantanément.
    if (typeof video.fastSeek === 'function') video.fastSeek(t);
    else video.currentTime = t;
  });

  // Frappe « clavier » de la phrase, puis de la signature, + bouton — pilotées par le scroll.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const clamp01 = (x: number) => Math.min(Math.max(x, 0), 1);
    const n = Math.round(clamp01((v - 0.42) / (0.58 - 0.42)) * FINAL_PHRASE.length);
    setTyped((prev) => (prev === n ? prev : n));
    setSigIn(v >= 0.68);
    setLogoIn(v >= 0.8);
    setShowBtn(v >= 0.86);
  });

  // Fallback réduit : pas d'épinglage, vidéo en lecture simple + message + bouton.
  if (reduced) {
    return (
      <section id="pourquoi" className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="rounded-3xl overflow-hidden border border-white/10 mb-12">
            <video src="/inspection.mp4" muted loop autoPlay playsInline className="w-full aspect-video object-cover" />
          </div>
          <p className="font-serif italic font-medium text-3xl md:text-4xl leading-snug" style={{ color: GOLD }}>
            {FINAL_PHRASE}
          </p>
          <div className="flex flex-col items-center mt-10">
            <h3 className="font-display font-bold uppercase tracking-tight text-3xl md:text-5xl">
              <span className="bg-gradient-to-r from-[#7a6a44] via-[#e9dcc0] to-[#9d895c] bg-clip-text text-transparent">
                {SIG}
              </span>
            </h3>
            <Logo className="h-12 md:h-16 w-auto mt-8 opacity-95" />
            <span className="font-jp text-3xl md:text-5xl mt-5 tracking-[0.15em]" style={{ color: GOLD }}>
              {JP_BRAND}
            </span>
          </div>
          <a
            href="#stock"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-white text-black rounded-sm font-semibold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors"
          >
            Découvrir nos véhicules
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="pourquoi" ref={sectionRef} className="relative h-[480vh] bg-black">
      {/* Conteneur épinglé : reste fixe pendant que la page défile */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/inspection-scroll.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Voile permanent pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50 pointer-events-none" />
        {/* Fondu au noir final */}
        <motion.div style={{ opacity: darken }} className="absolute inset-0 bg-black pointer-events-none" />

        {/* Scène 0 — intro */}
        <Scene progress={scrollYProgress} start={0} end={0.13}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-zinc-300 font-medium tracking-[0.2em] uppercase text-xs">Nos engagements</span>
            <div className="h-[1px] w-12 bg-red-600" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
            Pourquoi
            <br />
            <span style={{ color: GOLD }}>AKS Motors</span>
          </h2>
        </Scene>

        {/* Scènes — messages clés */}
        <Scene progress={scrollYProgress} start={0.13} end={0.26}>
          <p className="max-w-3xl text-3xl md:text-5xl font-display font-bold uppercase tracking-tight leading-tight">
            Accès direct aux enchères japonaises
          </p>
        </Scene>
        <Scene progress={scrollYProgress} start={0.26} end={0.38}>
          <p className="max-w-3xl text-3xl md:text-5xl font-display font-bold uppercase tracking-tight leading-tight">
            Chaque véhicule inspecté sur place, avant tout achat
          </p>
        </Scene>
        <Scene progress={scrollYProgress} start={0.38} end={0.5}>
          <p className="max-w-3xl text-3xl md:text-5xl font-display font-bold uppercase tracking-tight leading-tight">
            Un import clé en main, jusqu'à la carte grise française
          </p>
        </Scene>

        {/* Temps 1 — la phrase s'écrit façon clavier, puis s'efface */}
        <motion.div
          style={{ opacity: phraseOpacity }}
          className="absolute inset-0 flex items-center justify-center text-center px-6 pointer-events-none"
        >
          <p className="max-w-3xl font-serif italic font-medium text-3xl md:text-5xl leading-snug" style={{ color: GOLD }}>
            {FINAL_PHRASE.slice(0, typed)}
            {typed > 0 && typed < FINAL_PHRASE.length && (
              <motion.span
                aria-hidden
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="inline-block not-italic"
              >
                |
              </motion.span>
            )}
          </p>
        </motion.div>

        {/* Temps 2 — la signature : mots révélés un à un en dégradé + logo + japonais */}
        <motion.div
          style={{ opacity: sigOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h3
            initial="hidden"
            animate={sigIn ? 'show' : 'hidden'}
            variants={sigContainer}
            className="font-display font-bold uppercase tracking-tight text-3xl md:text-5xl lg:text-6xl"
          >
            <motion.span variants={sigWord} className={`inline-block ${GRAD}`}>C'EST</motion.span>{' '}
            <motion.span variants={sigWord} className={`inline-block ${GRAD}`}>ÇA</motion.span>
            <motion.span variants={sigComma} className={`inline-block ${GRAD}`}>,</motion.span>{' '}
            <motion.span variants={sigWord} className={`inline-block ${GRAD}`}>LA SIGNATURE AKS</motion.span>
          </motion.h3>

          <motion.div
            initial={false}
            animate={logoIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <Logo className="h-12 md:h-16 w-auto mt-8 opacity-95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)]" />
            <span className="font-jp text-3xl md:text-5xl mt-5 tracking-[0.15em]" style={{ color: GOLD }}>
              {JP_BRAND}
            </span>
          </motion.div>

          <motion.a
            href="#stock"
            initial={false}
            animate={showBtn ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ pointerEvents: showBtn ? 'auto' : 'none' }}
            className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-white text-black rounded-sm font-semibold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors"
          >
            Découvrir nos véhicules
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Indice de scroll au tout début */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-300 text-xs uppercase tracking-[0.2em] pointer-events-none"
        >
          Défilez ↓
        </motion.div>
      </div>
    </section>
  );
}
