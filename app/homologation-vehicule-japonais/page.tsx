import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/ArticleLayout';
import { serviceJsonLd } from '@/lib/seo';

const PATH = '/homologation-vehicule-japonais';

export const metadata: Metadata = {
  title: "Homologation d'un véhicule japonais en France (DREAL, UTAC, carte grise)",
  description:
    "Homologation d'une voiture importée du Japon : démarches DREAL et UTAC, modifications nécessaires, prix, délais et obtention de la carte grise française. Guide AKS Motors.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Homologation d'un véhicule japonais en France",
    description:
      'DREAL, UTAC, conformité européenne et carte grise : le guide complet pour homologuer une voiture importée du Japon.',
    url: PATH,
    type: 'article',
  },
};

const faq = [
  {
    q: "Combien coûte l'homologation d'une voiture japonaise ?",
    a: "L'homologation (DREAL + UTAC) représente généralement 3 000 à 8 000 € selon le véhicule, ses équipements et les modifications nécessaires pour respecter les normes européennes. Ce coût est inclus dans le devis global AKS Motors.",
  },
  {
    q: 'Peut-on homologuer n\'importe quel modèle japonais ?',
    a: "Presque tous les modèles peuvent être homologués. Certains exigent davantage de modifications (éclairage, catalyseur, pare-chocs, clignotants). Quelques modèles très anciens ou exotiques sont plus délicats : nous évaluons la faisabilité en amont.",
  },
  {
    q: 'Le véhicule aura-t-il une vraie carte grise française ?',
    a: "Oui. L'homologation aboutit à une carte grise française définitive (SIV), pleinement valable pour circuler et assurer le véhicule en France et dans l'Union européenne.",
  },
  {
    q: "Quelle est la différence entre DREAL et UTAC ?",
    a: "L'UTAC réalise les essais et la réception à titre isolé (RTI) attestant la conformité technique du véhicule ; la DREAL est le service de l'État qui valide le dossier et autorise l'immatriculation. Les deux interviennent dans le parcours d'homologation.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={[{ name: 'Homologation véhicule japonais', path: PATH }]}
      eyebrow="Guide homologation"
      title="Homologation d'un véhicule japonais"
      lede="Importer ne suffit pas : pour rouler légalement en France, une voiture japonaise doit être homologuée. DREAL, UTAC, carte grise — voici comment ça se passe réellement."
      faq={faq}
      jsonLd={serviceJsonLd({
        name: 'Homologation de véhicules importés du Japon',
        description:
          'Accompagnement complet pour homologuer une voiture japonaise en France : réception à titre isolé UTAC, dossier DREAL et obtention de la carte grise.',
        path: PATH,
      })}
      related={[
        { label: 'Importer une voiture du Japon', href: '/importer-une-voiture-du-japon', desc: 'Le parcours complet, de A à Z.' },
        { label: 'Dédouanement & frais d’import', href: '/dedouanement-frais-import-japon', desc: 'Droits de douane et TVA.' },
        { label: 'Nos modèles JDM', href: '/modeles', desc: 'Skyline, Supra, RX-7…' },
      ]}
    >
      <p>
        L'<strong>homologation</strong> est l'étape qui rend votre véhicule importé conforme aux
        normes européennes et autorise son immatriculation. C'est souvent la partie la plus
        technique d'une importation — et celle où l'expérience d'un spécialiste fait la différence.
      </p>

      <h2>Pourquoi l'homologation est-elle obligatoire ?</h2>
      <p>
        Un véhicule conçu pour le marché japonais ne respecte pas d'emblée toutes les normes
        européennes (éclairage, émissions, signalisation). L'homologation vérifie et atteste cette
        conformité, condition indispensable pour obtenir une <strong>carte grise française</strong> et
        circuler légalement.
      </p>

      <h2>Les étapes de l'homologation en France</h2>
      <ol>
        <li><strong>Constitution du dossier</strong> : documents japonais, certificat de conformité ou attestation, justificatifs d'importation et de dédouanement.</li>
        <li><strong>Réception à titre isolé (RTI)</strong> : essais et contrôle technique approfondi par l'<strong>UTAC</strong> pour vérifier la conformité du véhicule.</li>
        <li><strong>Modifications éventuelles</strong> : mise aux normes de l'éclairage, des feux, parfois du catalyseur ou des pare-chocs.</li>
        <li><strong>Validation DREAL</strong> : le dossier est validé par la <strong>DREAL</strong>, qui autorise l'immatriculation.</li>
        <li><strong>Carte grise</strong> : émission de l'immatriculation française définitive (SIV).</li>
      </ol>

      <h2>Quelles modifications sont nécessaires ?</h2>
      <p>
        Cela dépend du modèle et de son année. Les points les plus fréquents : passage de
        l'éclairage aux normes européennes, ajout de feux antibrouillard arrière, clignotants
        conformes, parfois adaptation du système d'échappement. Pour les modèles de plus de 30 ans,
        le parcours <strong>véhicule de collection</strong> peut simplifier certaines exigences.
      </p>

      <h2>Combien coûte et combien de temps prend l'homologation ?</h2>
      <p>
        Comptez généralement <strong>3 000 à 8 000 €</strong> et <strong>4 à 6 semaines</strong>
        une fois le véhicule sur le territoire. Ces montants varient selon les modifications. Chez
        AKS Motors, l'homologation est <strong>incluse dans le devis global</strong> annoncé dès le
        départ : pas de mauvaise surprise en fin de parcours.
      </p>

      <h2>AKS Motors gère l'homologation pour vous</h2>
      <p>
        Nous prenons en charge l'intégralité des démarches DREAL et UTAC, les éventuelles
        modifications et l'obtention de la carte grise. Vous récupérez un véhicule prêt à rouler,
        en règle. Découvrez aussi <a href="/importer-une-voiture-du-japon">le parcours complet d'importation</a> ou
        <a href="/#contact"> contactez-nous</a> pour évaluer la faisabilité de votre projet.
      </p>
    </ArticleLayout>
  );
}
