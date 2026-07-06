import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Enchères automobiles japonaises (USS, CAA) — AKS Motors';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Guide enchères',
    title: 'Les enchères automobiles japonaises',
    subtitle: 'USS, CAA, grades et feuilles d’enchère : comment nous achetons au Japon.',
  });
}
