import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Blog AKS Motors — Conseils pour importer une voiture du Japon';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Le Journal',
    title: 'Conseils & guides JDM',
    subtitle: 'Coûts, homologation, légalité, enchères : nos guides pour importer sereinement.',
  });
}
