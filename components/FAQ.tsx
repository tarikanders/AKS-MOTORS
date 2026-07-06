import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { HOME_FAQ } from '../lib/faq';

const faqs = HOME_FAQ;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
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
                className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left bg-zinc-900 hover:bg-zinc-800/80 transition-colors"
              >
                <span className="font-medium text-sm md:text-base text-zinc-200 pr-2 md:pr-4">{faq.q}</span>
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
                    <div className="px-5 py-4 md:px-6 md:py-5 bg-zinc-900/50 text-sm md:text-base text-zinc-400 font-light leading-relaxed border-t border-white/5">
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
