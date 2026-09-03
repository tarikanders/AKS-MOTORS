import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'AKS Motors — import et homologation de véhicules du Japon';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Import & homologation Japon',
    title: 'Importez votre véhicule du Japon',
    subtitle:
      'Enchères japonaises, dédouanement, homologation DREAL et carte grise — depuis Strasbourg, partout en France.',
  });
}
