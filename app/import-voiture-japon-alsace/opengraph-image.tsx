import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Import de véhicules du Japon en Alsace — AKS Motors, Strasbourg";

export default function Image() {
  return renderOgImage({
    eyebrow: 'Alsace · Bas-Rhin · Grand Est',
    title: 'Import de véhicules du Japon en Alsace',
    subtitle: 'Importateur basé à Strasbourg : enchères japonaises, dédouanement, homologation, carte grise.',
  });
}
