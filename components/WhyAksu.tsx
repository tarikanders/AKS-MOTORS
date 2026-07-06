import { useRef, useEffect, useState, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue, type Variants } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { usePrefersReducedMotion, useIsMobile } from '../lib/useReducedMotion';

const GOLD = '#9d895c';
const FINAL_PHRASE =
  "Chaque véhicule porte l'histoire de son passé. Notre mission est de lui offrir le début de son avenir.";
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
/** « LA SIGNATURE AKS » arrive après un petit temps de pause, en blanc. */
const sigWordLast: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.95 } },
};
/** Logo + calligraphie : révélés fluidement après la phrase. */
const sigReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 1.7, ease: [0.16, 1, 0.3, 1] } },
};
const sigCta: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 2.25, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Bloc signature : « C'EST ÇA, LA SIGNATURE AKS », logo, calligraphie japonaise, bouton.
 * Section autonome, déclenchée quand elle entre dans le viewport (stagger temporel).
 * Utilisée par le fallback reduced-motion ; la version épinglée passe par
 * `SignatureOverlay` (pilotée au scroll).
 */
function Signature() {
  // Déclencheur commun à tous les éléments animés.
  const trig = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.6 } } as const;

  const content = (
    <>
      <motion.h3
        {...trig}
        variants={sigContainer}
        className="relative font-display font-bold uppercase tracking-tight text-3xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)]"
      >
        <motion.span variants={sigWord} className={`inline-block ${GRAD}`}>C'EST</motion.span>{' '}
        <motion.span variants={sigWord} className={`inline-block ${GRAD}`}>ÇA</motion.span>
        <motion.span variants={sigComma} className={`inline-block ${GRAD}`}>,</motion.span>{' '}
        <motion.span variants={sigWordLast} className="inline-block text-white">LA SIGNATURE AKS</motion.span>
      </motion.h3>

      <motion.div {...trig} variants={sigReveal} className="relative flex flex-col items-center">
        <Logo className="h-12 md:h-16 w-auto mt-8 opacity-95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)]" />
        <span className="font-jp text-3xl md:text-5xl mt-5 tracking-[0.15em]" style={{ color: GOLD }}>
          {JP_BRAND}
        </span>
      </motion.div>

      <motion.a
        href="#stock"
        {...trig}
        variants={sigCta}
        className="relative pointer-events-auto inline-flex items-center gap-2 mt-8 md:mt-12 px-8 py-4 bg-white text-black rounded-sm font-semibold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors"
      >
        Découvrir nos véhicules
        <ArrowUpRight className="w-4 h-4" />
      </motion.a>
    </>
  );

  return (
    <section className="relative bg-black min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
      {/* Halo doré discret */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-1/2 bg-[#9d895c]/10 blur-[160px] rounded-full pointer-events-none" />
      {content}
    </section>
  );
}

/** Opacité + remontée mappées sur une plage de la progression du scroll. */
function useRise(progress: MotionValue<number>, from: number, to: number) {
  const opacity = useTransform(progress, [from, to], [0, 1]);
  const y = useTransform(progress, [from, to], [22, 0]);
  return { opacity, y };
}

/**
 * Signature en surimpression de la section épinglée, PILOTÉE AU SCROLL.
 *
 * Version temporelle abandonnée : l'animation (~2,9 s) courait pendant que le
 * pin, lui, se libérait à la vitesse du scroll — en défilant vite, la section
 * se dépinnait avant la calligraphie et le bouton. Ici chaque élément est mappé
 * sur la progression, tout est entièrement révélé à 97,5 % : quoi qu'il arrive,
 * la signature complète (mots, logo, calligraphie, CTA) est affichée AVANT que
 * le scroll ne reprenne, et elle reste en place.
 */
function SignatureOverlay({ progress }: { progress: MotionValue<number> }) {
  // La phrase finale s'efface à 0,78 → la signature enchaîne juste derrière.
  const word1 = useRise(progress, 0.78, 0.83);
  const word2 = useRise(progress, 0.805, 0.85);
  const comma = useRise(progress, 0.84, 0.87);
  const wordLast = useRise(progress, 0.865, 0.905);
  const mark = useRise(progress, 0.9, 0.945);
  const cta = useRise(progress, 0.94, 0.975);

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
      <h3 className="relative font-display font-bold uppercase tracking-tight text-3xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)]">
        <motion.span style={word1} className={`inline-block ${GRAD}`}>C'EST</motion.span>{' '}
        <motion.span style={word2} className={`inline-block ${GRAD}`}>ÇA</motion.span>
        <motion.span style={comma} className={`inline-block ${GRAD}`}>,</motion.span>{' '}
        <motion.span style={wordLast} className="inline-block text-white">LA SIGNATURE AKS</motion.span>
      </h3>

      <motion.div style={mark} className="relative flex flex-col items-center">
        <Logo className="h-12 md:h-16 w-auto mt-8 opacity-95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)]" />
        <span className="font-jp text-3xl md:text-5xl mt-5 tracking-[0.15em]" style={{ color: GOLD }}>
          {JP_BRAND}
        </span>
      </motion.div>

      <motion.a
        href="#stock"
        style={cta}
        className="relative pointer-events-auto inline-flex items-center gap-2 mt-8 md:mt-12 px-8 py-4 bg-white text-black rounded-sm font-semibold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors"
      >
        Découvrir nos véhicules
        <ArrowUpRight className="w-4 h-4" />
      </motion.a>
    </div>
  );
}

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
 * reste épinglée (sticky) plein écran et défile au scroll, les messages clés
 * apparaissent par-dessus, puis la phrase s'écrit et la vidéo finit en fondu noir.
 * La signature qui suit est une section normale → elle reste affichée à la fin.
 */
export function WhyAksu() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  // Sur mobile : on garde TOUTE la chorégraphie (scènes de texte, phrase qui s'écrit,
  // signature) — pilotée au scroll — mais la vidéo joue en autoplay/loop au lieu d'être
  // déroulée image par image (seeking saccadé). Seul reduced-motion bascule sur l'allégé.

  const [typed, setTyped] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Fondu progressif : la vidéo s'assombrit pendant les messages, puis pendant la
  // révélation de la signature — sans aller jusqu'au noir : elle reste légèrement
  // sombre en fin de scroll pour garder l'image visible derrière le texte.
  const darken = useTransform(scrollYProgress, [0.5, 0.72, 0.97], [0.15, 0.4, 0.6]);
  // Indice « défilez » qui disparaît dès les premiers pixels.
  const hintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  // La phrase apparaît, s'écrit, puis s'efface avant l'arrivée de la signature.
  const phraseOpacity = useTransform(scrollYProgress, [0.5, 0.54, 0.72, 0.78], [0, 1, 1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    // Sur mobile la vidéo est en autoplay/loop : on ne la met pas en pause.
    if (!video || reduced || isMobile) return;
    const onMeta = () => {
      durationRef.current = video.duration || 0;
      video.pause();
    };
    if (video.readyState >= 1) onMeta();
    video.addEventListener('loadedmetadata', onMeta);
    return () => video.removeEventListener('loadedmetadata', onMeta);
  }, [reduced, isMobile]);

  // Vidéo pilotée directement par le scroll (couplage 1:1, sans ressort qui
  // « traîne » : elle avance tant qu'on défile et s'arrête net quand on stoppe).
  const lastSeek = useRef(-1);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const video = videoRef.current;
    const duration = durationRef.current;
    // Pas de seeking au scroll sur mobile (ni en reduced) : la vidéo tourne seule.
    if (!video || !duration || reduced || isMobile) return;
    const t = Math.min(Math.max(v, 0), 1) * duration;
    if (!Number.isFinite(t) || Math.abs(t - lastSeek.current) < 1 / 48) return;
    lastSeek.current = t;
    // La vidéo est ré-encodée tout-keyframe : fastSeek (Firefox) ou currentTime
    // (Chrome) atteignent n'importe quelle image instantanément.
    if (typeof video.fastSeek === 'function') video.fastSeek(t);
    else video.currentTime = t;
  });

  // Frappe « clavier » de la phrase, pilotée par le scroll.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const t = Math.min(Math.max((v - 0.5) / (0.68 - 0.5), 0), 1);
    const n = Math.round(t * FINAL_PHRASE.length);
    setTyped((prev) => (prev === n ? prev : n));
  });

  // Fallback réduit (reduced-motion uniquement) : pas d'épinglage, vidéo en lecture
  // simple + message + signature.
  if (reduced) {
    return (
      <>
        <section id="pourquoi" className="py-24 md:py-32 bg-black relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 mb-10 md:mb-12">
              <video src="/inspection.mp4" muted loop autoPlay playsInline preload="metadata" className="w-full aspect-video object-cover" />
            </div>
            <p className="font-serif italic font-medium text-3xl md:text-4xl leading-snug" style={{ color: GOLD }}>
              {FINAL_PHRASE}
            </p>
          </div>
        </section>
        <Signature />
      </>
    );
  }

  return (
    <>
      {/* Pinning raccourci sur mobile ; h-svh contre le saut de barre d'URL. */}
      <section id="pourquoi" ref={sectionRef} className="relative h-[300vh] md:h-[380vh] bg-black">
        {/* Conteneur épinglé : reste fixe pendant que la page défile */}
        <div className="sticky top-0 h-svh md:h-screen w-full overflow-hidden">
          {/* Mobile : la vidéo joue en boucle (pas de scrubbing) → on sert
              l'encodage classique (2,4 Mo) au lieu du tout-keyframe (9,8 Mo). */}
          <video
            ref={videoRef}
            src={isMobile ? '/inspection.mp4' : '/inspection-scroll.mp4'}
            muted
            playsInline
            autoPlay={isMobile}
            loop={isMobile}
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
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
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

          {/* La phrase s'écrit façon clavier, puis s'efface dans le fondu noir */}
          <motion.div
            style={{ opacity: phraseOpacity }}
            className="absolute inset-0 flex items-center justify-center text-center px-6 pointer-events-none"
          >
            <p className="max-w-3xl font-serif italic font-medium text-2xl sm:text-3xl md:text-5xl leading-snug" style={{ color: GOLD }}>
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

          {/* Signature en surimpression : révélée AU SCROLL par-dessus le fondu
              noir de la vidéo — entièrement affichée avant la fin du pin. */}
          <SignatureOverlay progress={scrollYProgress} />

          {/* Indice de scroll au tout début */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-300 text-xs uppercase tracking-[0.2em] pointer-events-none"
          >
            Défilez ↓
          </motion.div>
        </div>
      </section>
    </>
  );
}
