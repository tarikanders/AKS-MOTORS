import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Cormorant_Garamond, Yuji_Boku } from 'next/font/google';
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AKS Motors — Importation de voitures japonaises (JDM) & homologation France",
    template: '%s — AKS Motors',
  },
  description:
    "Importation directe de véhicules de sport et de collection japonais (JDM) depuis les enchères du Japon jusqu'à l'homologation française. Sourcing, logistique, dédouanement et carte grise clés en main.",
  applicationName: 'AKS Motors',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'AKS Motors',
    title: "AKS Motors — L'Excellence Nippone | Import JDM",
    description:
      "Importation directe de véhicules JDM depuis le Japon : sourcing aux enchères, logistique, dédouanement et homologation française.",
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'AKS Motors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AKS Motors — L'Excellence Nippone | Import JDM",
    description:
      "Importation directe de véhicules JDM depuis le Japon : sourcing, dédouanement et homologation française.",
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.png',
  },
};

// Données structurées globales : profil de l'entreprise (SEO local + Knowledge Graph).
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'AKS Motors',
  description:
    "Spécialiste de l'importation de véhicules de sport et de collection du marché japonais (JDM), de l'enchère japonaise à l'homologation française.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  telephone: '+33769945732',
  email: 'contact@aksmotors.com',
  address: {
    '@type': 'PostalAddress',
    postalCode: '75008',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
  areaServed: 'FR',
  priceRange: '€€€',
};

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
