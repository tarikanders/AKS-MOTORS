import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';

const PATH = '/mentions-legales';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site AKS Motors — importation de véhicules japonais.',
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <PageShell>
      <header className="pt-40 pb-12 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-1 text-xs text-zinc-500">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-zinc-700" />
                <span className="text-zinc-300">Mentions légales</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            Mentions légales
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose-aks">
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>aksmotors.com</strong> est édité par AKS Motors.
            <br />Forme juridique : [À COMPLÉTER]
            <br />Capital social : [À COMPLÉTER]
            <br />SIREN / SIRET : [À COMPLÉTER]
            <br />RCS : [À COMPLÉTER]
            <br />Siège social : 67000 Strasbourg, France
            <br />E-mail : contact@aksmotors.com
            <br />Téléphone : +33 7 69 94 57 32
            <br />Directeur de la publication : [À COMPLÉTER]
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis —{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, visuels, logo, vidéos) est protégé
            par le droit de la propriété intellectuelle. Toute reproduction sans autorisation
            préalable est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations fournies sur ce site le sont à titre indicatif. AKS Motors s'efforce de
            les tenir à jour mais ne saurait être tenu responsable d'éventuelles erreurs ou
            omissions. Les coûts (douane, TVA, homologation) sont donnés à titre d'estimation et
            font l'objet d'un devis personnalisé.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les modalités de traitement de vos données sont décrites dans notre{' '}
            <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
