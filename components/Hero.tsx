import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { RevealText } from './fx/Reveal';
import { Magnetic } from './fx/Magnetic';
import { JapanMap } from './fx/JapanMap';
import { useIsMobile } from '../lib/useReducedMotion';

export function Hero({ introDone = true }: { introDone?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Lissage de la progression du scroll pour un scrubbing vidéo fluide.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
    restDelta: 0.0001,
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Chorégraphie de sortie progressive et fluide, pilotée par le scroll lissé :
  // les éléments du hero se révèlent/s'effacent en couches successives (sous-titre,
  // puis description, puis boutons, puis titres, la carte dérivant en parallax).
  const subTitleOpacity = useTransform(smoothProgress, [0.16, 0.3], [1, 0]);
  const subTitleX = useTransform(smoothProgress, [0, 0.4], [0, -24]);

  const title1Y = useTransform(smoothProgress, [0, 0.7], ["0%", "-14%"]);
  const title2Y = useTransform(smoothProgress, [0, 0.7], ["0%", "-9%"]);
  const titleOpacity = useTransform(smoothProgress, [0.6, 0.8], [1, 0]);

  const descOpacity = useTransform(smoothProgress, [0.28, 0.44], [1, 0]);
  const descY = useTransform(smoothProgress, [0, 0.5], [0, -40]);

  const buttonsOpacity = useTransform(smoothProgress, [0.4, 0.56], [1, 0]);
  const buttonsY = useTransform(smoothProgress, [0, 0.5], [0, -30]);

  // La carte du Japon dérive doucement et s'efface avant le fondu final.
  const mapY = useTransform(smoothProgress, [0, 0.7], ["0%", "-12%"]);
  const mapOpacity = useTransform(smoothProgress, [0.5, 0.72], [1, 0]);

  const contentOpacity = useTransform(smoothProgress, [0.84, 1], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Pilote la position de la vidéo dans une boucle requestAnimationFrame :
  // la valeur lissée par le spring est appliquée au plus une fois par frame,
  // ce qui évite les à-coups de seek et donne un scrub fluide.
  // Sur mobile, on NE pilote PAS la vidéo au scroll (seeking saccadé) : elle joue
  // en autoplay/loop. Toute la chorégraphie de texte/parallax reste, elle, active.
  useEffect(() => {
    if (isMobile) return;
    const video = videoRef.current;
    if (!video) return;
    let rafId = 0;

    const update = () => {
      const duration = video.duration;
      if (duration && Number.isFinite(duration)) {
        const target = smoothProgress.get() * duration;
        // N'actualise que si l'écart dépasse ~une demi-frame (anti seek-thrashing).
        if (Math.abs(video.currentTime - target) > 1 / 60) {
          video.currentTime = target;
        }
      }
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [smoothProgress, isMobile]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video with Scroll Animations */}
        <motion.div style={{ y: bgY, opacity: bgOpacity, scale: bgScale }} className="absolute inset-0 z-0 origin-top overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/10 to-zinc-950 z-20" />
          <div className="absolute inset-0 z-10 bg-zinc-950">
            <video
              ref={videoRef}
              src={isMobile ? '/phoneHero.mp4' : '/hero-carvolant.mp4'}
              muted
              playsInline
              autoPlay={isMobile}
              loop={isMobile}
              preload="auto"
              className="w-full h-full object-cover object-center scale-[1.05] pointer-events-none"
              style={{ imageRendering: 'high-quality' } as unknown as React.CSSProperties}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        {/* Carte du Japon avec pôles d'enchères clignotants — parallax + fondu au scroll */}
        <motion.div
          style={{ opacity: mapOpacity }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[320px] xl:w-[380px] pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            style={{ y: mapY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: introDone ? 1 : 0, scale: introDone ? 1 : 0.95 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <JapanMap />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-start max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{
              opacity: introDone ? 1 : 0,
              y: introDone ? 0 : 24,
              filter: introDone ? 'blur(0px)' : 'blur(8px)',
            }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              style={{ opacity: subTitleOpacity, x: subTitleX }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-red-600" />
              <h2 className="text-red-500 font-medium tracking-[0.2em] uppercase text-xs sm:text-sm">
                Importation Directe du Japon
              </h2>
            </motion.div>
          </motion.div>
          
          <motion.div style={{ y: title1Y, opacity: titleOpacity }} className="mb-4 pb-2">
            <RevealText
              as="h1"
              start={introDone}
              delay={0.25}
              stagger={0.06}
              text="L'Excellence"
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.85]"
            />
          </motion.div>
          <motion.div style={{ y: title2Y, opacity: titleOpacity }} className="mb-10 pb-2">
            <RevealText
              as="h1"
              start={introDone}
              delay={0.42}
              stagger={0.06}
              text="Nippone"
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{
              opacity: introDone ? 1 : 0,
              y: introDone ? 0 : 24,
              filter: introDone ? 'blur(0px)' : 'blur(8px)',
            }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              style={{ opacity: descOpacity, y: descY }}
              className="text-zinc-400 max-w-xl text-lg md:text-xl mb-12 font-light leading-relaxed"
            >
              De la recherche aux enchères japonaises jusqu'à l'homologation française.
              Nous réalisons votre rêve automobile avec une transparence absolue.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{
              opacity: introDone ? 1 : 0,
              y: introDone ? 0 : 24,
              filter: introDone ? 'blur(0px)' : 'blur(8px)',
            }}
            transition={{ duration: 0.9, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              style={{ opacity: buttonsOpacity, y: buttonsY }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
            <Magnetic className="w-full sm:w-auto">
              <a href="#stock" className="group relative px-8 py-4 bg-white text-black overflow-hidden rounded-sm font-semibold flex items-center justify-center gap-3 w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir le stock
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </a>
            </Magnetic>
            <a href="#processus" className="group px-8 py-4 text-white flex items-center gap-3 w-full sm:w-auto font-medium">
              <span className="relative">
                Comment ça marche ?
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/30" />
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-[0.16,1,0.3,1]" />
              </span>
            </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Skip intro button */}
      <motion.a
        href="#services"
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute top-6 right-6 sm:right-10 z-20 text-xs text-zinc-500 hover:text-white transition-colors uppercase tracking-widest border border-white/10 hover:border-white/30 px-4 py-2 rounded-full backdrop-blur-sm"
      >
        Passer →
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-10 left-6 sm:left-auto sm:right-10 flex items-center gap-4 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-zinc-500 rotate-90 origin-left translate-y-6 sm:translate-y-0 sm:rotate-0 sm:origin-center">Scroll</span>
        <div className="w-[1px] h-16 sm:w-16 sm:h-[1px] bg-zinc-800 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 w-full h-full bg-zinc-400 sm:hidden" 
          />
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 w-full h-full bg-zinc-400 hidden sm:block" 
          />
        </div>
      </motion.div>
      </div>
    </section>
  );
}
