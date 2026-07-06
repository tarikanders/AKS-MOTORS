import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Importer une voiture du Japon : guide complet — AKS Motors';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Guide import',
    title: 'Importer une voiture du Japon',
    subtitle: 'Étapes, délais et prix : le parcours complet, des enchères à la carte grise.',
  });
}
