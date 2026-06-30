import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { MODELS } from '@/lib/models';
import { ARTICLES } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/importer-une-voiture-du-japon', priority: 0.9, freq: 'monthly' },
    { path: '/homologation-vehicule-japonais', priority: 0.9, freq: 'monthly' },
    { path: '/dedouanement-frais-import-japon', priority: 0.9, freq: 'monthly' },
    { path: '/encheres-japonaises', priority: 0.8, freq: 'monthly' },
    { path: '/modeles', priority: 0.8, freq: 'monthly' },
    { path: '/blog', priority: 0.7, freq: 'weekly' },
    { path: '/a-propos', priority: 0.5, freq: 'yearly' },
    { path: '/mentions-legales', priority: 0.2, freq: 'yearly' },
    { path: '/politique-de-confidentialite', priority: 0.2, freq: 'yearly' },
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  for (const m of MODELS) {
    entries.push({
      url: `${SITE_URL}/modeles/${m.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  for (const a of ARTICLES) {
    entries.push({
      url: `${SITE_URL}/blog/${a.slug}`,
      lastModified: new Date(a.dateModified ?? a.datePublished),
      changeFrequency: 'yearly',
      priority: 0.6,
    });
  }

  return entries;
}
