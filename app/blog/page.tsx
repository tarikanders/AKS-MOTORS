import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';
import { ARTICLES, formatDateFr } from '@/lib/blog';

const PATH = '/blog';

export const metadata: Metadata = {
  title: "Blog — Conseils pour importer une voiture du Japon",
  description:
    "Guides et conseils sur l'importation de voitures japonaises : coûts, homologation, légalité, modèles JDM. Le blog des experts AKS Motors.",
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Blog AKS Motors — Importer une voiture du Japon',
    description: "Coûts, homologation, légalité, modèles JDM : nos guides d'experts.",
    url: PATH,
    type: 'website',
  },
};

export default function Page() {
  const articles = [...ARTICLES].sort(
    (a, b) => +new Date(b.datePublished) - +new Date(a.datePublished),
  );

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Accueil', path: '/' },
          { name: 'Blog', path: PATH },
        ])}
      />

      <header className="relative pt-40 pb-16 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-1 text-xs text-zinc-500">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-zinc-700" />
                <span className="text-zinc-300">Blog</span>
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Le Journal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.95] mb-8">
            Conseils & guides JDM
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Tout ce qu'il faut savoir pour importer une voiture du Japon sereinement : coûts,
            homologation, légalité et modèles cultes.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group block p-6 md:p-8 border border-white/5 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 hover:border-white/10 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-600">
                {formatDateFr(a.datePublished)} · {a.readingMinutes} min
              </span>
              <h2 className="mt-2 flex items-start justify-between gap-3 text-2xl font-display font-bold uppercase tracking-tight text-zinc-100">
                {a.title}
                <ArrowRight className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
              </h2>
              <p className="mt-3 text-zinc-500 font-light leading-relaxed">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
