import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/ArticleLayout';
import { serviceJsonLd } from '@/lib/seo';

const PATH = '/dedouanement-frais-import-japon';

export const metadata: Metadata = {
  title: "Dédouanement & frais d'import d'une voiture du Japon (douane, TVA, coût réel)",
  description:
    "Droits de douane, TVA, transport : combien coûte réellement l'importation d'une voiture du Japon ? Le détail des frais de dédouanement, étape par étape, par AKS Motors.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Dédouanement et frais d'import d'une voiture du Japon",
    description:
      'Droits de douane (10 %), TVA (20 %), transport maritime : le coût réel et détaillé d’une importation depuis le Japon.',
    url: PATH,
    type: 'article',
  },
};

const faq = [
  {
    q: 'Quels sont les droits de douane pour une voiture importée du Japon ?',
    a: "Pour un véhicule particulier importé du Japon vers l'Union européenne, les droits de douane s'élèvent à 10 % de la valeur (prix du véhicule + transport + assurance), auxquels s'ajoute la TVA de 20 % calculée sur ce total majoré des droits.",
  },
  {
    q: 'Comment est calculée la TVA à l\'importation ?',
    a: "La TVA française de 20 % s'applique sur la valeur en douane du véhicule (achat + transport + assurance) augmentée des droits de douane. Elle est réglée lors du dédouanement et conditionne l'obtention du quitus fiscal.",
  },
  {
    q: 'Le coût annoncé par AKS Motors est-il tout compris ?',
    a: "Oui. Notre devis intègre l'achat, le transport maritime assuré, les droits de douane, la TVA et l'homologation. Vous connaissez le coût total dès le départ, justificatifs fournis à chaque étape.",
  },
  {
    q: 'Y a-t-il des exonérations pour les véhicules de collection ?',
    a: "Certains véhicules de plus de 30 ans, d'origine et présentant un intérêt historique, peuvent bénéficier d'un régime douanier allégé (droits réduits et TVA à taux réduit). La faisabilité s'étudie au cas par cas ; nous vous conseillons en amont.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={[{ name: "Dédouanement & frais d'import", path: PATH }]}
      eyebrow="Guide douane & frais"
      title="Dédouanement & frais d'import"
      lede="C'est la question n°1 de tout futur importateur : combien ça coûte vraiment ? Voici le détail transparent des frais de douane, de la TVA et du transport pour une voiture du Japon."
      faq={faq}
      jsonLd={serviceJsonLd({
        name: "Dédouanement de véhicules importés du Japon",
        description:
          "Prise en charge des formalités douanières d'importation d'un véhicule japonais : déclaration, droits de douane, TVA et quitus fiscal.",
        path: PATH,
      })}
      related={[
        { label: 'Importer une voiture du Japon', href: '/importer-une-voiture-du-japon', desc: 'Le parcours complet.' },
        { label: 'Homologation véhicule japonais', href: '/homologation-vehicule-japonais', desc: 'DREAL, UTAC, carte grise.' },
        { label: 'Les enchères japonaises', href: '/encheres-japonaises', desc: 'Où et comment on achète.' },
      ]}
    >
      <p>
        Le prix affiché au Japon n'est que le point de départ. Pour estimer le <strong>coût réel</strong>
        d'une importation, il faut additionner le transport, les taxes douanières et l'homologation.
        Bonne nouvelle : tous ces postes sont prévisibles et nous les chiffrons à l'avance.
      </p>

      <h2>Les postes de coût d'une importation</h2>
      <ul>
        <li><strong>Prix d'achat</strong> du véhicule à l'enchère japonaise.</li>
        <li><strong>Frais locaux au Japon</strong> : commission d'enchère, transport intérieur, mise en conteneur.</li>
        <li><strong>Transport maritime</strong> + assurance jusqu'à un port européen.</li>
        <li><strong>Droits de douane : 10 %</strong> de la valeur (achat + transport + assurance).</li>
        <li><strong>TVA : 20 %</strong>, calculée sur cette valeur majorée des droits de douane.</li>
        <li><strong>Homologation</strong> (DREAL / UTAC) et carte grise.</li>
      </ul>

      <h2>Comment se calcule le dédouanement ?</h2>
      <p>
        La <strong>valeur en douane</strong> correspond au prix du véhicule augmenté du transport et
        de l'assurance (valeur « CAF »). On applique d'abord les <strong>droits de douane de 10 %</strong> sur
        cette base, puis la <strong>TVA de 20 %</strong> sur l'ensemble (valeur CAF + droits). Le paiement
        de ces taxes débloque le <strong>quitus fiscal</strong>, indispensable pour immatriculer le
        véhicule.
      </p>

      <h2>Un exemple simplifié</h2>
      <p>
        Pour un véhicule à 20 000 € avec 2 000 € de transport et assurance : valeur en douane =
        22 000 €. Droits de douane (10 %) = 2 200 €. Base TVA = 24 200 €. TVA (20 %) = 4 840 €.
        À cela s'ajoutent les frais locaux et l'<a href="/homologation-vehicule-japonais">homologation</a>.
        Cet exemple est indicatif : nous établissons un chiffrage précis pour votre projet.
      </p>

      <h2>Le cas des véhicules de collection</h2>
      <p>
        Certains véhicules de plus de 30 ans, d'origine et d'intérêt historique, peuvent relever
        d'un <strong>régime douanier de faveur</strong> (droits et TVA réduits). C'est un levier
        d'optimisation réel, mais soumis à conditions strictes. Nous étudions l'éligibilité au cas
        par cas.
      </p>

      <h2>La transparence, notre signature</h2>
      <p>
        Chez AKS Motors, vous recevez un <strong>devis global tout compris</strong> dès le départ et
        un justificatif à chaque étape (confirmation d'enchère, connaissement maritime, déclaration
        douanière). <a href="/#contact">Demandez votre estimation</a> pour le véhicule de votre choix.
      </p>
    </ArticleLayout>
  );
}
