import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { RevealText } from './fx/Reveal';

const testimonials = [
  {
    name: "Alexandre R.",
    model: "Nissan Skyline R33 GT-R",
    text: "J'ai reçu ma R33 exactement comme annoncée, 3 mois et demi après l'enchère USS Nagoya. La feuille d'enchère traduite, les photos sur place, le suivi du navire en temps réel — tout était là. Serdar sait de quoi il parle, ça se sent dès le premier appel.",
    rating: 5,
    year: "2025"
  },
  {
    name: "Thomas L.",
    model: "Toyota Supra JZA80",
    text: "J'avais essayé un autre importateur avant. La différence avec AKS Motors, c'est la transparence totale : chaque dépense est justifiée, aucune mauvaise surprise à la douane. Ma Supra est homologuée et sur la route depuis 6 mois. Parfait.",
    rating: 5,
    year: "2024"
  },
  {
    name: "Nicolas B.",
    model: "Honda NSX NA1",
    text: "Une NSX série 1 à ce prix-là, inspectée et avec une feuille CAA Grade 4.5 A, c'est le rêve. Mustafa m'a guidé à chaque étape, même pour les démarches DREAL que je craignais. Je recommande sans hésiter.",
    rating: 5,
    year: "2024"
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-zinc-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-red-600" />
              <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Témoignages</span>
            </motion.div>
            <RevealText
              as="h2"
              className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.9]"
              segments={[{ text: 'Ils nous ont\n' }, { text: 'fait confiance', className: 'text-zinc-500' }]}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-1/3 text-zinc-400 font-light"
          >
            Des collectionneurs qui ont fait le choix de l'excellence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              data-cursor="Avis"
              className="bg-zinc-900 border border-white/5 rounded-2xl p-8 flex flex-col gap-6 hover:border-white/15 transition-colors"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                ))}
              </div>

              <p className="text-zinc-300 font-light leading-relaxed flex-1">"{t.text}"</p>

              <div className="border-t border-white/5 pt-6 flex justify-between items-end">
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{t.model}</p>
                </div>
                <span className="text-xs text-zinc-600">{t.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
