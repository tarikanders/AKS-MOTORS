import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import { RevealText } from './fx/Reveal';
import { Magnetic } from './fx/Magnetic';

const BUDGETS = ['< 30 000 €', '30 000 – 60 000 €', '60 000 – 100 000 €', '> 100 000 €', 'À définir'];

export function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', car: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-red-600" />
              <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Contact</span>
            </motion.div>

            <RevealText
              as="h2"
              className="block text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-8"
              segments={[{ text: 'Démarrer\n' }, { text: 'Votre Projet', className: 'text-zinc-500' }]}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg font-light leading-relaxed mb-10"
            >
              Décrivez votre projet — modèle recherché, budget, délai — et nous vous répondons sous 24h avec une analyse personnalisée.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Magnetic>
                <a
                  href="https://wa.me/33769945732?text=Bonjour%2C%20je%20souhaite%20importer%20un%20v%C3%A9hicule%20JDM."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-sm transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contacter sur WhatsApp
                </a>
              </Magnetic>
              <p className="text-zinc-600 text-xs mt-3 uppercase tracking-widest">Réponse rapide · Échange de photos · Documents</p>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center py-24 text-center gap-6"
              >
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold">Message envoyé</h3>
                <p className="text-zinc-400 max-w-sm">Nous vous répondons sous 24h avec une première analyse de votre projet.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Prénom *</label>
                    <input
                      required name="firstName" value={form.firstName} onChange={handleChange}
                      className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Nom *</label>
                    <input
                      required name="lastName" value={form.lastName} onChange={handleChange}
                      className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Email *</label>
                  <input
                    required type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Téléphone</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Voiture recherchée</label>
                  <input
                    name="car" value={form.car} onChange={handleChange}
                    className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="ex: Nissan Skyline R34 GT-R, Toyota Supra JZA80…"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Budget indicatif</label>
                  <select
                    name="budget" value={form.budget} onChange={handleChange}
                    className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors appearance-none"
                  >
                    <option value="">Sélectionner…</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    required name="message" value={form.message} onChange={handleChange} rows={4}
                    className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="Décrivez votre projet, vos critères, votre délai…"
                  />
                </div>

                <Magnetic className="w-full" strength={0.25}>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-white text-black font-semibold hover:bg-zinc-200 transition-colors duration-300 rounded-sm"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer ma demande
                  </button>
                </Magnetic>
              </motion.form>
            )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
