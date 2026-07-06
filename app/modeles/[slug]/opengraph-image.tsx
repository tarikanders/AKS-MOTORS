import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { MODELS, getModel } from '@/lib/models';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Importer un modèle JDM du Japon — AKS Motors';

export function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = getModel(slug);
  return renderOgImage({
    eyebrow: model ? `${model.brand} · ${model.era}` : 'Sourcing JDM',
    title: model ? `Importer une ${model.name}` : 'Importer un modèle JDM',
    subtitle: 'Prix, homologation et achat aux enchères japonaises.',
  });
}
