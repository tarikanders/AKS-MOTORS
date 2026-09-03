import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Importer et homologuer une Porsche du Japon — AKS Motors";

export default function Image() {
  return renderOgImage({
    eyebrow: 'Porsche · Import Japon',
    title: 'Importer & homologuer une Porsche du Japon',
    subtitle: 'Sourcing japonais, dédouanement, homologation DREAL/UTAC et carte grise française.',
  });
}
