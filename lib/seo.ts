export const SITE_URL = 'https://aksmotors.com';
export const SITE_NAME = 'AKS Motors';
export const PHONE = '+33673681784';
export const EMAIL = 'contact@aksmotors.com';

// Ancrage géographique : la requête « import japon Alsace / Bas-Rhin » se joue
// autant sur le contenu rédactionnel que sur la cohérence des données
// structurées. Une seule source de vérité pour les deux.
export const CITY = 'Strasbourg';
export const POSTAL_CODE = '67000';
export const REGION = 'Grand Est';
export const DEPARTMENT = 'Bas-Rhin';

/** Zones desservies déclarées dans les données structurées (local + national). */
export const AREAS_SERVED = [
  { type: 'City', name: 'Strasbourg' },
  { type: 'AdministrativeArea', name: 'Bas-Rhin (67)' },
  { type: 'AdministrativeArea', name: 'Haut-Rhin (68)' },
  { type: 'AdministrativeArea', name: 'Alsace' },
  { type: 'AdministrativeArea', name: 'Grand Est' },
  { type: 'Country', name: 'France' },
] as const;

export function areaServedJsonLd() {
  return AREAS_SERVED.map((a) => ({ '@type': a.type, name: a.name }));
}

export const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  postalCode: POSTAL_CODE,
  addressLocality: CITY,
  addressRegion: REGION,
  addressCountry: 'FR',
};

export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(params: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: params.name,
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.path),
    provider: {
      '@type': 'AutoDealer',
      name: SITE_NAME,
      url: SITE_URL,
      telephone: PHONE,
      address: POSTAL_ADDRESS,
    },
    areaServed: areaServedJsonLd(),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function itemListJsonLd(params: {
  name: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: params.name,
    url: absoluteUrl(params.path),
    numberOfItems: params.items.length,
    itemListElement: params.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(params: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: absoluteUrl(params.path),
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    image: params.image ? absoluteUrl(params.image) : absoluteUrl('/logo.png'),
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') },
    },
    mainEntityOfPage: absoluteUrl(params.path),
  };
}

export function vehicleJsonLd(params: {
  name: string;
  description: string;
  path: string;
  brand: string;
  model: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.path),
    brand: { '@type': 'Brand', name: params.brand },
    model: params.model,
    image: params.image ? absoluteUrl(params.image) : absoluteUrl('/logo.png'),
    manufacturer: { '@type': 'Organization', name: params.brand },
    vehicleConfiguration: 'Import JDM',
  };
}

/**
 * Profil AutoDealer de l'entreprise — émis une seule fois, par le layout global,
 * donc présent sur toutes les pages. Centralisé ici pour garantir un NAP
 * (nom / adresse / téléphone) strictement identique partout : critère de
 * classement local majeur. Ne pas le redéclarer dans une page : deux nœuds sous
 * le même @id se contrediraient.
 */
export function autoDealerJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description:
      "Importateur de véhicules japonais et de Porsche depuis le Japon, basé à Strasbourg (Bas-Rhin, Alsace) : sourcing aux enchères japonaises, dédouanement, homologation DREAL/UTAC et carte grise française.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    telephone: PHONE,
    email: EMAIL,
    address: POSTAL_ADDRESS,
    geo: { '@type': 'GeoCoordinates', latitude: 48.5734, longitude: 7.7521 },
    areaServed: areaServedJsonLd(),
    knowsAbout: [
      'Importation de véhicules du Japon',
      'Homologation Japon (DREAL, UTAC)',
      'Homologation de véhicule japonais en France',
      'Homologation Porsche importée du Japon',
      'Enchères automobiles japonaises (USS, CAA, HAA)',
      'Dédouanement de véhicule importé hors UE',
      'Carte grise de véhicule importé (SIV)',
    ],
    priceRange: '€€€',
  };
}
