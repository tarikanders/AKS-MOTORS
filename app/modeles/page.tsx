import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';
import { MODELS } from '@/lib/models';

const PATH = '/modeles';

export const metadata: Metadata = {
  title: 'Modèles JDM à importer du Japon (Skyline, Supra, RX-7, NSX…)',
  description:
    "Les modèles JDM les plus recherchés à importer du Japon : Nissan Skyline R34 GT-R, Toyota Supra MK4, Mazda RX-7, Honda NSX, GT-R R35, Lancer Evo, Impreza STI. Sourcing AKS Motors.",
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Modèles JDM à importer du Japon',
    description: 'Skyline, Supra, RX-7, NSX, GT-R R35, Lancer Evo, Impreza STI : nos sourcing JDM.',
    url: PATH,
    type: 'website',
  },
};

export default function Page() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Accueil', path: '/' },
          { name: 'Modèles', path: PATH },
        ])}
      />

      <header className="relative pt-40 pb-16 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-1 text-xs text-zinc-500">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-zinc-700" />
                <span className="text-zinc-300">Modèles</span>
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-red-600" />
            <span className="text-zinc-400 font-medium tracking-[0.2em] uppercase text-xs">Sourcing JDM</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.95] mb-8">
            Modèles à importer du Japon
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Les légendes du JDM que nous sourçons aux enchères japonaises. Sélectionnez un modèle
            pour en savoir plus sur son importation, son prix et son homologation en France.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 gap-4">
          {MODELS.map((m) => (
            <Link
              key={m.slug}
              href={`/modeles/${m.slug}`}
              className="group block p-6 border border-white/5 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 hover:border-white/10 transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">{m.brand} · {m.era}</span>
              <span className="mt-2 flex items-center justify-between gap-3 text-xl font-display font-bold uppercase tracking-tight text-zinc-100">
                {m.model}
                <ArrowRight className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </span>
              <span className="block mt-3 text-sm text-zinc-500 font-light leading-relaxed">{m.lede}</span>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-zinc-400 font-light">
          Vous cherchez un autre modèle ? Nous sourçons tout type de véhicule japonais à la demande.{' '}
          <Link href="/#contact" className="text-red-400 underline underline-offset-4 hover:text-red-300">
            Décrivez-nous votre projet
          </Link>.
        </p>
      </div>
    </PageShell>
  );
}
