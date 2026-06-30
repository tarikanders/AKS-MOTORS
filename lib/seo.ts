export const SITE_URL = 'https://aksmotors.com';
export const SITE_NAME = 'AKS Motors';
export const PHONE = '+33769945732';
export const EMAIL = 'contact@aksmotors.com';

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
    },
    areaServed: { '@type': 'Country', name: 'France' },
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
