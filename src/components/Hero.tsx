import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Text Animations based on scroll
  const subTitleOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const subTitleX = useTransform(scrollYProgress, [0, 0.05], [-20, 0]);

  const title1Y = useTransform(scrollYProgress, [0.02, 0.08], ["100%", "0%"]);
  const title2Y = useTransform(scrollYProgress, [0.06, 0.12], ["100%", "0%"]);

  const descOpacity = useTransform(scrollYProgress, [0.10, 0.16], [0, 1]);
  const descY = useTransform(scrollYProgress, [0.10, 0.16], [20, 0]);

  const buttonsOpacity = useTransform(scrollYProgress, [0.14, 0.20], [0, 1]);
  const buttonsY = useTransform(scrollYProgress, [0.14, 0.20], [20, 0]);
  
  const contentOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && Number.isFinite(videoRef.current.duration)) {
      // Anime la vidéo en fonction de la progression du scroll (0 à 1)
      videoRef.current.currentTime = videoRef.current.duration * latest;
    }
  });

  return (
    <section ref={ref} className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video with Scroll Animations */}
        <motion.div style={{ y: bgY, opacity: bgOpacity, scale: bgScale }} className="absolute inset-0 z-0 origin-top overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-zinc-950 z-20" />
          <div className="absolute inset-0 z-10 opacity-70 bg-zinc-950">
            <video
              ref={videoRef}
              src="/Background.mov"
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center scale-[1.05] pointer-events-none"
              style={{ imageRendering: 'high-quality' }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        <div className="flex flex-col items-start max-w-4xl">
          <motion.div
            style={{ opacity: subTitleOpacity, x: subTitleX }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-red-600" />
            <h2 className="text-red-500 font-medium tracking-[0.2em] uppercase text-xs sm:text-sm">
              Importation Directe du Japon
            </h2>
          </motion.div>
          
          <div className="overflow-hidden mb-4 pb-2">
            <motion.h1 
              style={{ y: title1Y }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.85]"
            >
              L'Excellence
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10 pb-2">
            <motion.h1 
              style={{ y: title2Y }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-600"
            >
              Nippone
            </motion.h1>
          </div>

          <motion.p 
            style={{ opacity: descOpacity, y: descY }}
            className="text-zinc-400 max-w-xl text-lg md:text-xl mb-12 font-light leading-relaxed"
          >
            De la recherche aux enchères japonaises jusqu'à l'homologation française. 
            Nous réalisons votre rêve automobile avec une transparence absolue.
          </motion.p>
          
          <motion.div 
            style={{ opacity: buttonsOpacity, y: buttonsY }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="#inventory" className="group relative px-8 py-4 bg-white text-black overflow-hidden rounded-sm font-semibold flex items-center justify-center gap-3 w-full sm:w-auto">
              <span className="relative z-10 flex items-center gap-2">
                Découvrir le stock
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </a>
            <a href="#process" className="group px-8 py-4 text-white flex items-center gap-3 w-full sm:w-auto font-medium">
              <span className="relative">
                Comment ça marche ?
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/30" />
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-[0.16,1,0.3,1]" />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

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
