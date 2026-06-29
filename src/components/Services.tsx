import { motion } from 'motion/react';
import { Search, FileText, Ship, Wrench } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "Sourcing & Enchères",
    desc: "Accès exclusif aux enchères japonaises (USS, CAA) et réseau de concessionnaires partenaires. Inspection détaillée sur place avant tout achat.",
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950"
  },
  {
    icon: Ship,
    title: "Logistique & Transport",
    desc: "Gestion complète du fret maritime depuis le Japon jusqu'aux ports européens avec assurance tous risques incluse.",
    className: "md:col-span-1 md:row-span-1 bg-zinc-900"
  },
  {
    icon: FileText,
    title: "Dédouanement",
    desc: "Prise en charge des formalités douanières, paiement des taxes et obtention du 846A.",
    className: "md:col-span-1 md:row-span-1 bg-zinc-900"
  },
  {
    icon: Wrench,
    title: "Homologation (DREAL/UTAC)",
    desc: "Mise aux normes européennes, tests UTAC, constitution du dossier DREAL complet pour l'obtention de la carte grise française définitive.",
    className: "md:col-span-2 md:row-span-1 bg-zinc-900"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-red-600" />
              <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Services</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9]"
            >
              Notre <br /> <span className="text-zinc-500">Expertise</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="md:w-1/3 text-zinc-400 text-lg font-light"
          >
            Importer un véhicule du Japon exige un savoir-faire spécifique. Nous offrons une solution clé en main, transparente et sécurisée.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 border border-white/5 rounded-2xl hover:border-white/10 transition-colors group relative overflow-hidden flex flex-col justify-between ${service.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <service.icon className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              
              <div className="relative z-10 mt-8 md:mt-0">
                <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
