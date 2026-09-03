import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Cormorant_Garamond, Yuji_Boku } from 'next/font/google';
import { autoDealerJsonLd } from '@/lib/seo';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});
const yuji = Yuji_Boku({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-yuji',
  display: 'swap',
});

const SITE_URL = 'https://aksmotors.com';

// Mobile-first : couleur de la barre système assortie au fond, et rendu
// bord-à-bord sur les écrans à encoche (safe-area gérée via env() dans l'UI).
export const viewport: Viewport = {
  themeColor: '#09090b',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Import Japon & homologation de véhicule japonais — AKS Motors, Strasbourg",
    template: '%s — AKS Motors',
  },
  description:
    "Importateur de véhicules du Japon basé à Strasbourg (Bas-Rhin, Alsace) : voitures japonaises JDM et Porsche, des enchères japonaises jusqu'à l'homologation DREAL/UTAC et la carte grise française. Devis global tout compris.",
  applicationName: 'AKS Motors',
  // Signal secondaire pour Google, mais toujours lu par Bing et par plusieurs
  // moteurs de réponse IA : on y aligne les requêtes cibles du site.
  keywords: [
    'homologation japon',
    'homologation véhicule japonais',
    'homologation porsche japon',
    'import japon alsace',
    'import japon bas-rhin',
    'importateur voiture japon strasbourg',
    'importer une voiture du japon',
    'import jdm france',
    'enchères japonaises voiture',
    'carte grise véhicule importé du japon',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'AKS Motors',
    title: "AKS Motors — Import Japon & homologation | Strasbourg, Alsace",
    description:
      "Importation directe de véhicules japonais et de Porsche depuis le Japon : sourcing aux enchères, logistique, dédouanement et homologation française (DREAL/UTAC).",
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'AKS Motors — import et homologation Japon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AKS Motors — Import Japon & homologation | Strasbourg, Alsace",
    description:
      "Importation de véhicules japonais et de Porsche depuis le Japon : sourcing, dédouanement et homologation française.",
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.png',
  },
};

// Données structurées globales : profil de l'entreprise (SEO local + Knowledge
// Graph). Défini dans lib/seo.ts pour garantir un NAP identique sur toutes les
// pages qui le réutilisent (notamment la page locale Alsace).
const businessJsonLd = autoDealerJsonLd();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable} ${yuji.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
