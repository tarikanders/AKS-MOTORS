import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Dédouanement et frais d'import d'une voiture du Japon — AKS Motors";

export default function Image() {
  return renderOgImage({
    eyebrow: 'Guide dédouanement',
    title: "Douane, TVA et frais d'import du Japon",
    subtitle: 'Droits de douane 10 %, TVA 20 %, quitus fiscal : le coût réel, poste par poste.',
  });
}
