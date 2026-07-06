import { HomeClient } from '@/components/HomeClient';
import { JsonLd } from '@/components/JsonLd';
import { faqJsonLd } from '@/lib/seo';
import { HOME_FAQ } from '@/lib/faq';

export default function HomePage() {
  return (
    <>
      {/* FAQPage injecté côté serveur : la FAQ visuelle est un client component,
          le rich snippet doit exister dans le HTML initial. */}
      <JsonLd data={faqJsonLd(HOME_FAQ)} />
      <HomeClient />
    </>
  );
}
