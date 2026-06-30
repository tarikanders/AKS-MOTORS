import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, ChevronRight } from 'lucide-react';
import { PageShell } from '../PageShell';
import { JsonLd } from '../JsonLd';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';

type Crumb = { name: string; path: string };
type Related = { label: string; href: string; desc?: string };

export function ArticleLayout({
  breadcrumb,
  eyebrow,
  title,
  lede,
  meta,
  children,
  faq,
  related,
  jsonLd,
}: {
  breadcrumb: Crumb[];
  eyebrow: string;
  title: string;
  lede: string;
  meta?: ReactNode;
  children: ReactNode;
  faq?: { q: string; a: string }[];
  related?: Related[];
  jsonLd?: object | object[];
}) {
  const extra = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const allJsonLd = [
    breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, ...breadcrumb]),
    ...extra,
    ...(faq && faq.length ? [faqJsonLd(faq)] : []),
  ];

  return (
    <PageShell>
      <JsonLd data={allJsonLd} />

      {/* Hero */}
      <header className="relative pt-40 pb-16 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-zinc-500">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              </li>
              {breadcrumb.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-zinc-700" />
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-zinc-300">{c.name}</span>
                  ) : (
                    <Link href={c.path} className="hover:text-white transition-colors">{c.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">{eyebrow}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.95] mb-8">
            {title}
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">{lede}</p>
          {meta && <div className="mt-6 text-xs uppercase tracking-widest text-zinc-600">{meta}</div>}
        </div>
      </header>

      {/* Corps */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose-aks">{children}</article>

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group border border-white/5 rounded-xl bg-zinc-900 overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 font-medium text-zinc-200 hover:bg-zinc-800/60 transition-colors">
                    {item.q}
                    <ChevronRight className="w-4 h-4 text-red-500 flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-5 text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Liens internes */}
        {related && related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">À lire aussi</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group block p-6 border border-white/5 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 hover:border-white/10 transition-colors"
                >
                  <span className="flex items-center justify-between gap-3 font-medium text-zinc-100">
                    {r.label}
                    <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {r.desc && <span className="block mt-2 text-sm text-zinc-500 font-light">{r.desc}</span>}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-20 p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-4">
            Un projet d'importation ?
          </h2>
          <p className="text-zinc-400 font-light mb-8 max-w-xl mx-auto">
            Décrivez-nous le véhicule recherché, votre budget et votre délai. Réponse sous 24h
            avec une première analyse personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-zinc-200 transition-colors"
            >
              Démarrer mon projet
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/33769945732?text=Bonjour%2C%20je%20souhaite%20importer%20un%20v%C3%A9hicule%20JDM."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-green-600/40 text-green-400 hover:bg-green-600 hover:text-white font-semibold rounded-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
