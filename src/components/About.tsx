import { motion } from 'motion/react';
import { ScrollGlowText } from './fx/ScrollGlowText';

export function About() {
  return (
    <section id="histoire" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-1/3 h-2/3 bg-red-900/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Notre histoire</span>
          </motion.div>

          <ScrollGlowText
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9]"
            segments={[{ text: 'Une passion,\n' }, { text: 'une expertise', className: 'text-zinc-500' }]}
          />
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-16 mb-28">
          {/* Serdar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="aspect-[4/3] bg-zinc-900 rounded-2xl mb-8 overflow-hidden border border-white/5 flex items-end p-8 relative">
              <img
                src="/auteur/serdaraksu.png"
                alt="Serdar Aksu, fondateur d'AKS Motors"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="relative z-10">
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Fondateur</p>
                <h3 className="text-3xl font-display font-bold">Serdar Aksu</h3>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-light text-lg">
              Après plus de <strong className="text-white font-medium">10 ans à arpenter les enchères japonaises</strong> — USS Nagoya, CAA Tokyo, HAA Kobe — Serdar a développé un réseau unique au Japon. Chaque lot inspecté, chaque feuille d'enchère traduite. Une connaissance du marché JDM qu'on ne s'improvise pas.
            </p>
            <p className="text-zinc-500 leading-relaxed font-light mt-4">
              AKS Motors est né de cette conviction : les collectionneurs français méritent d'accéder aux meilleures machines japonaises avec une transparence absolue, sans intermédiaires inutiles.
            </p>
          </motion.div>

          {/* Mustafa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group"
          >
            <div className="aspect-[4/3] bg-zinc-900 rounded-2xl mb-8 overflow-hidden border border-white/5 flex items-end p-8 relative">
              <img
                src="/auteur/mustafaksu.png"
                alt="Mustafa Aksu, co-fondateur d'AKS Motors"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="relative z-10">
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Co-fondateur</p>
                <h3 className="text-3xl font-display font-bold">Mustafa Aksu</h3>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed font-light text-lg">
              Mustafa apporte la rigueur opérationnelle et la vision digitale d'AKS Motors. Sa mission : <strong className="text-white font-medium">rendre chaque étape du processus lisible et traçable</strong> pour le client, de l'enchère à la remise des clés.
            </p>
            <p className="text-zinc-500 leading-relaxed font-light mt-4">
              Ensemble, ils ont construit une structure qui conjugue l'expertise terrain de Serdar avec les standards modernes de service client — pour que votre achat soit aussi fluide qu'exceptionnel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
