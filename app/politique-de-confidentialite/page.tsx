import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';

const PATH = '/politique-de-confidentialite';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité d’AKS Motors : données collectées via le formulaire de contact, finalité, durée de conservation et vos droits (RGPD).',
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
                <span className="text-zinc-300">Confidentialité</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            Politique de confidentialité
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose-aks">
          <h2>Données collectées</h2>
          <p>
            Lorsque vous remplissez notre formulaire de contact, nous collectons les informations que
            vous nous transmettez : nom, prénom, e-mail, téléphone (facultatif), véhicule recherché,
            budget et message. Aucune donnée n'est collectée à votre insu.
          </p>

          <h2>Finalité du traitement</h2>
          <p>
            Ces données sont utilisées uniquement pour répondre à votre demande et vous accompagner
            dans votre projet d'importation. Elles ne sont ni vendues, ni cédées à des tiers à des
            fins commerciales.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Vos données sont conservées le temps nécessaire au traitement de votre demande et à la
            relation commerciale, puis archivées ou supprimées conformément aux obligations légales.
          </p>

          <h2>Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données, vous disposez d'un droit
            d'accès, de rectification, d'effacement et d'opposition sur vos données. Pour l'exercer,
            écrivez-nous à <a href="mailto:contact@aksmotors.com">contact@aksmotors.com</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site limite l'usage des cookies au strict nécessaire à son fonctionnement. Aucun
            traceur publicitaire tiers n'est déposé sans votre consentement.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
