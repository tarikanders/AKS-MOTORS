import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleLayout } from '@/components/content/ArticleLayout';
import { articleJsonLd } from '@/lib/seo';
import { ARTICLES, getArticle, formatDateFr } from '@/lib/blog';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const path = `/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.description,
      url: path,
      type: 'article',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified ?? article.datePublished,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const path = `/blog/${article.slug}`;
  const related = ARTICLES.filter((a) => a.slug !== article.slug)
    .slice(0, 2)
    .map((a) => ({ label: a.title, href: `/blog/${a.slug}`, desc: a.excerpt }));

  return (
    <ArticleLayout
      breadcrumb={[
        { name: 'Blog', path: '/blog' },
        { name: article.title, path },
      ]}
      eyebrow="Blog"
      title={article.title}
      lede={article.description}
      meta={`Publié le ${formatDateFr(article.datePublished)} · ${article.readingMinutes} min de lecture`}
      jsonLd={articleJsonLd({
        title: article.title,
        description: article.description,
        path,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
      })}
      related={[
        ...related,
        { label: 'Importer une voiture du Japon', href: '/importer-une-voiture-du-japon', desc: 'Le guide complet.' },
      ]}
    >
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </ArticleLayout>
  );
}
