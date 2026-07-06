import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Homologation d'un véhicule japonais en France — AKS Motors";

export default function Image() {
  return renderOgImage({
    eyebrow: 'Guide homologation',
    title: 'Homologuer un véhicule japonais en France',
    subtitle: 'DREAL, UTAC, réception à titre isolé et carte grise : la marche à suivre.',
  });
}
