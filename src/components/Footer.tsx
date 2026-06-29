import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Divider */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-5">
            <a href="#" className="text-3xl font-display font-bold tracking-tighter uppercase mb-8 block group">
              <span className="text-red-600 transition-colors">JDM</span> Prestige
            </a>
            <p className="text-zinc-400 max-w-sm text-lg font-light leading-relaxed mb-10">
              Spécialiste de l'importation de véhicules de sport et de collection du marché japonais.
            </p>
            <a href="mailto:contact@jdm-prestige.fr" className="inline-flex items-center gap-2 text-xl md:text-2xl font-display font-light hover:text-red-500 transition-colors group">
              contact@jdm-prestige.fr
              <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>
          
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-semibold uppercase tracking-[0.2em] text-xs mb-8 text-zinc-500">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#services" className="text-zinc-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="text-zinc-300 hover:text-white transition-colors">Processus</a></li>
              <li><a href="#inventory" className="text-zinc-300 hover:text-white transition-colors">Stock</a></li>
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors">Sur mesure</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-semibold uppercase tracking-[0.2em] text-xs mb-8 text-zinc-500">Réseaux & Adresse</h4>
            <ul className="space-y-4 text-sm font-medium mb-8">
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors flex justify-between items-center group">Instagram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="text-zinc-300 hover:text-white transition-colors flex justify-between items-center group">YouTube <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
            <div className="text-sm text-zinc-400 font-light leading-relaxed">
              75008 Paris, France<br />
              Visite sur rendez-vous
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-medium uppercase tracking-widest text-zinc-500">
          <p>© {new Date().getFullYear()} JDM Prestige. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Légal</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
        
        {/* Huge background text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.02] translate-y-1/4">
          <span className="text-[15vw] font-display font-bold uppercase tracking-tighter whitespace-nowrap">
            JDM Prestige
          </span>
        </div>
      </div>
    </footer>
  );
}
