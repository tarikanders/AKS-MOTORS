import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'AKS Motors — Importation de voitures japonaises (JDM) & homologation France';

export default function Image() {
  return renderOgImage({
    eyebrow: "L'Excellence Nippone",
    title: 'Importez votre voiture du Japon',
    subtitle: "Enchères japonaises, transport, dédouanement et homologation française — clé en main.",
  });
}
