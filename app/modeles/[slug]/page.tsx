import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleLayout } from '@/components/content/ArticleLayout';
import { vehicleJsonLd } from '@/lib/seo';
import { MODELS, getModel } from '@/lib/models';

export function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) return {};
  const path = `/modeles/${model.slug}`;
  const title = `Importer une ${model.name} du Japon (prix, homologation, achat)`;
  return {
    title,
    description: model.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: model.metaDescription,
      url: path,
      type: 'article',
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  const path = `/modeles/${model.slug}`;
  const related = MODELS.filter((m) => m.slug !== model.slug)
    .slice(0, 3)
    .map((m) => ({ label: m.name, href: `/modeles/${m.slug}`, desc: m.era }));

  const faq = [
    {
      q: `Est-il légal d'importer une ${model.name} en France ?`,
      a: `Oui. Une fois dédouanée et homologuée (DREAL/UTAC), la ${model.name} reçoit une carte grise française définitive et peut circuler légalement en France et dans l'UE.`,
    },
    {
      q: `Combien coûte l'importation d'une ${model.name} ?`,
      a: "Au prix d'achat au Japon s'ajoutent le transport maritime, les droits de douane (10 %), la TVA (20 %) et l'homologation. AKS Motors établit un devis global tout compris dès le départ.",
    },
    {
      q: `Comment AKS Motors trouve-t-il une ${model.name} ?`,
      a: "Nous sourçons le véhicule aux enchères japonaises (USS, CAA…) selon vos critères, vous présentons les lots avec feuille d'enchère traduite, puis enchérissons après votre validation.",
    },
  ];

  return (
    <ArticleLayout
      breadcrumb={[
        { name: 'Modèles', path: '/modeles' },
        { name: model.name, path },
      ]}
      eyebrow={`${model.brand} · ${model.era}`}
      title={`Importer une ${model.name}`}
      lede={model.lede}
      faq={faq}
      jsonLd={vehicleJsonLd({
        name: model.name,
        description: model.metaDescription,
        path,
        brand: model.brand,
        model: model.model,
      })}
      related={[
        ...related,
        { label: 'Importer une voiture du Japon', href: '/importer-une-voiture-du-japon', desc: 'Le parcours complet.' },
      ]}
    >
      <p>{model.intro}</p>

      <h2>Points forts de la {model.name}</h2>
      <ul>
        {model.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <h2>À vérifier avant d'importer</h2>
      <ul>
        {model.considerations.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <h2>Importer votre {model.name} avec AKS Motors</h2>
      <p>{model.closing}</p>
      <p>
        Découvrez aussi comment se passent <a href="/encheres-japonaises">les enchères japonaises</a>,
        le <a href="/dedouanement-frais-import-japon">dédouanement</a> et
        l'<a href="/homologation-vehicule-japonais">homologation</a>, ou
        <a href="/#contact"> confiez-nous votre recherche</a>.
      </p>
    </ArticleLayout>
  );
}
