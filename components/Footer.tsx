import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Magnetic } from './fx/Magnetic';

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const bgTextX = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <footer ref={ref} className="bg-zinc-950 pt-20 md:pt-32 pb-[max(3rem,env(safe-area-inset-bottom))] relative overflow-hidden border-t border-white/5">
      {/* Divider */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-32">
          <div className="md:col-span-5">
            <a href="/" aria-label="AKS Motors — Accueil" className="inline-block mb-8 group">
              <Logo className="h-16 md:h-20 w-auto transition-transform duration-500 group-hover:scale-[1.03]" />
            </a>
            <p className="text-zinc-400 max-w-sm text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10">
              Importateur de véhicules du Japon basé à Strasbourg&nbsp;: sportives et voitures de
              collection japonaises, Porsche et allemandes de spécification japonaise — des enchères
              du Japon jusqu'à l'homologation et la carte grise française.
            </p>
            <Magnetic strength={0.2}>
              <a href="mailto:contact@aksmotors.com" className="inline-flex items-center gap-2 text-xl md:text-2xl font-display font-light hover:text-red-500 transition-colors group">
                contact@aksmotors.com
                <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </Magnetic>
            <a href="tel:+33673681784" className="inline-flex items-center gap-2 text-base text-zinc-400 hover:text-white transition-colors mt-4 group">
              <Phone className="w-4 h-4" />
              +33 6 73 68 17 84
            </a>
          </div>
          
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-semibold uppercase tracking-[0.2em] text-xs mb-8 text-zinc-500">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/#services" className="text-zinc-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/#processus" className="text-zinc-300 hover:text-white transition-colors">Processus</a></li>
              <li><a href="/#stock" className="text-zinc-300 hover:text-white transition-colors">Stock</a></li>
              <li><a href="/importer-une-voiture-du-japon" className="text-zinc-300 hover:text-white transition-colors">Importer du Japon</a></li>
              <li><a href="/homologation-vehicule-japonais" className="text-zinc-300 hover:text-white transition-colors">Homologation Japon</a></li>
              <li><a href="/importer-une-porsche-du-japon" className="text-zinc-300 hover:text-white transition-colors">Importer une Porsche du Japon</a></li>
              <li><a href="/import-voiture-japon-alsace" className="text-zinc-300 hover:text-white transition-colors">Import Japon en Alsace</a></li>
              <li><a href="/dedouanement-frais-import-japon" className="text-zinc-300 hover:text-white transition-colors">Dédouanement & frais</a></li>
              <li><a href="/encheres-japonaises" className="text-zinc-300 hover:text-white transition-colors">Enchères japonaises</a></li>
              <li><a href="/modeles" className="text-zinc-300 hover:text-white transition-colors">Modèles JDM</a></li>
              <li><a href="/blog" className="text-zinc-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/a-propos" className="text-zinc-300 hover:text-white transition-colors">À propos</a></li>
              <li><a href="/#contact" className="text-zinc-300 hover:text-white transition-colors">Sur mesure</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-semibold uppercase tracking-[0.2em] text-xs mb-8 text-zinc-500">Réseaux & Adresse</h4>
            <ul className="space-y-4 text-sm font-medium mb-8">
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors flex justify-between items-center group">Instagram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors flex justify-between items-center group">YouTube <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
            <div className="text-sm text-zinc-400 font-light leading-relaxed">
              67000 Strasbourg — Bas-Rhin, Alsace<br />
              Visite sur rendez-vous<br />
              <span className="text-zinc-500">
                Import &amp; homologation Japon en Alsace, dans le Grand Est et partout en France.
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-[11px] md:text-xs font-medium uppercase tracking-widest text-zinc-500 text-center">
          <p>© {new Date().getFullYear()} AKS Motors. Tous droits réservés.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="/politique-de-confidentialite" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
        
        {/* Huge background text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.02] translate-y-1/4">
          <motion.span
            style={{ x: bgTextX }}
            className="text-[15vw] font-display font-bold uppercase tracking-tighter whitespace-nowrap"
          >
            AKS Motors
          </motion.span>
        </div>
      </div>
    </footer>
  );
}
