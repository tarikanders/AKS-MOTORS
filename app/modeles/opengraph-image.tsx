import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Modèles JDM à importer du Japon — AKS Motors';

export default function Image() {
  return renderOgImage({
    eyebrow: 'Sourcing JDM',
    title: 'Les modèles à importer du Japon',
    subtitle: 'Skyline R34, Supra MK4, RX-7, NSX, GT-R R35, Lancer Evo, Impreza STI…',
  });
}
