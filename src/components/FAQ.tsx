import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: "Combien de temps dure le processus complet, de l'enchère à la remise des clés ?",
    a: "En moyenne 3 à 5 mois : 2 à 4 semaines pour trouver le bon lot aux enchères, 6 à 8 semaines de transport maritime, puis 4 à 6 semaines pour le dédouanement et l'homologation DREAL/UTAC. Nous vous donnons un calendrier précis dès le démarrage."
  },
  {
    q: "Combien coûte l'homologation en France ?",
    a: "L'homologation (DREAL + UTAC) représente généralement 3 000 à 8 000 € selon le véhicule, ses équipements et les modifications nécessaires pour respecter les normes européennes. Ce coût est systématiquement inclus dans notre devis global."
  },
  {
    q: "Puis-je choisir moi-même la voiture aux enchères japonaises ?",
    a: "Oui, c'est même notre mode de fonctionnement privilégié. Vous définissez votre cahier des charges (modèle, grade, kilométrage, options), nous identifions les lots correspondants et vous présentons les feuilles d'enchère traduites avant tout achat. Vous validez avant chaque engagement."
  },
  {
    q: "Quelle garantie ai-je sur l'état réel du véhicule ?",
    a: "La feuille d'enchère japonaise (USS, CAA) est le document de référence : elle détaille précisément l'état de chaque partie du véhicule, avec note globale et photos. Nous vous la fournissons intégralement traduite. Sur demande, nous pouvons mandater un inspecteur local pour une vérification supplémentaire."
  },
  {
    q: "Le véhicule aura-t-il une vraie carte grise française ?",
    a: "Absolument. C'est l'aboutissement de tout le processus d'homologation : réception d'une carte grise française définitive (SIV), pleinement valable pour la circulation et l'assurance en France et dans l'UE."
  },
  {
    q: "Peut-on importer n'importe quel modèle japonais ?",
    a: "Presque tous les modèles peuvent être homologués, mais certains nécessitent plus de modifications (catalyseur, éclairage, pare-chocs). Quelques modèles très anciens ou très exotiques peuvent être difficiles à homologuer. Nous vous conseillons en amont sur la faisabilité."
  },
  {
    q: "Comment se passe le paiement et est-il sécurisé ?",
    a: "Le paiement se fait en plusieurs étapes sécurisées : acompte à la commande, solde à l'arrivée du véhicule en France. Nous fournissons des justificatifs à chaque étape (confirmation d'enchère, connaissement maritime, déclaration douanière). Aucun virement sans document à l'appui."
  },
  {
    q: "AKS Motors peut-il trouver des véhicules hors enchères (gré à gré) ?",
    a: "Oui. Pour les modèles rares ou les configurations très précises (couleur, options spécifiques), nous activons notre réseau de concessionnaires partenaires au Japon pour des achats de gré à gré. Cela peut allonger légèrement le délai mais garantit d'obtenir exactement ce que vous cherchez."
  },
  {
    q: "Que couvre exactement votre prestation de bout en bout ?",
    a: "Cahier des charges → recherche aux enchères → achat et inspection → transport maritime avec assurance → dédouanement (TVA, droits de douane) → homologation DREAL/UTAC → carte grise → livraison. Une seule interlocution, zéro démarche de votre côté."
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">FAQ</span>
            <div className="h-[1px] w-8 bg-red-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter"
          >
            Questions fréquentes
          </motion.h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.05 }}
              className="border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                data-cursor={open === idx ? 'Fermer' : 'Ouvrir'}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-zinc-900 hover:bg-zinc-800/80 transition-colors"
              >
                <span className="font-medium text-zinc-200 pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === idx ? 135 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0"
                >
                  <Plus className={`w-4 h-4 ${open === idx ? 'text-red-500' : 'text-zinc-400'}`} />
                </motion.span>
              </button>

              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-zinc-900/50 text-zinc-400 font-light leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
