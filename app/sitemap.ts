import type { MetadataRoute } from 'next';

const SITE_URL = 'https://aksmotors.com';

// Lot 1 : seule la home existe. Les pages piliers / modèles / blog (Lot 2)
// viendront s'ajouter ici (idéalement générées depuis une source de contenu).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
