import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { ARTICLES, getArticle, formatDateFr } from '@/lib/blog';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Article du blog AKS Motors';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  return renderOgImage({
    eyebrow: article ? formatDateFr(article.datePublished) : 'Le Journal',
    title: article?.title ?? 'Blog AKS Motors',
    subtitle: article?.excerpt,
  });
}
