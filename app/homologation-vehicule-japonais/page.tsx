import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/ArticleLayout';
import { serviceJsonLd } from '@/lib/seo';

const PATH = '/homologation-vehicule-japonais';

export const metadata: Metadata = {
  title: "Homologation Japon : homologuer un véhicule japonais en France (DREAL, UTAC, carte grise)",
  description:
    "Homologation Japon : comment homologuer une voiture importée du Japon en France. Démarches DREAL et UTAC, réception à titre isolé, modifications, prix, délais et carte grise. Guide AKS Motors, importateur à Strasbourg (Alsace).",
  keywords: [
    'homologation japon',
    'homologation véhicule japonais',
    'homologation japon véhicule',
    'homologation voiture importée du japon',
    'homologation porsche japon',
    'réception à titre isolé DREAL',
    'carte grise véhicule importé du japon',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Homologation Japon : homologuer un véhicule japonais en France",
    description:
      'DREAL, UTAC, réception à titre isolé et carte grise : le guide complet pour homologuer une voiture importée du Japon.',
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
  {
    q: "Peut-on homologuer une Porsche importée du Japon ?",
    a: "Oui, et c'est une demande fréquente : le marché japonais recèle des Porsche faiblement kilométrées, souvent en conduite à gauche. L'homologation suit le même parcours que pour un véhicule japonais — dossier d'import, justification de la conformité (attestation constructeur lorsqu'elle est disponible, sinon réception à titre isolé DREAL/UTAC), puis carte grise. Voir notre page dédiée à l'import d'une Porsche du Japon.",
  },
  {
    q: "Combien de temps dure l'homologation d'un véhicule importé du Japon ?",
    a: "Comptez 4 à 6 semaines une fois le véhicule dédouané et sur le territoire, en fonction des délais de rendez-vous UTAC, du volume de mises aux normes à réaliser et du traitement du dossier par la DREAL.",
  },
  {
    q: "Homologuez-vous des véhicules en Alsace et dans le Grand Est ?",
    a: "Oui. AKS Motors est basé à Strasbourg (67), dans le Bas-Rhin, et accompagne les projets d'import et d'homologation en Alsace, dans le Grand Est et partout en France — le parcours administratif se pilote à distance, avec justificatif à chaque étape.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={[{ name: 'Homologation véhicule japonais', path: PATH }]}
      eyebrow="Guide homologation Japon"
      title="Homologation d'un véhicule importé du Japon"
      lede="Importer ne suffit pas : pour rouler légalement en France, une voiture venue du Japon doit être homologuée. Réception à titre isolé, DREAL, UTAC, carte grise — voici comment l'homologation Japon se passe réellement."
      faq={faq}
      jsonLd={serviceJsonLd({
        name: 'Homologation Japon — homologation de véhicules importés du Japon',
        description:
          "Accompagnement complet pour homologuer en France une voiture importée du Japon (véhicules japonais, Porsche et allemandes de spécification japonaise) : réception à titre isolé UTAC, dossier DREAL et obtention de la carte grise.",
        path: PATH,
      })}
      related={[
        { label: 'Importer une voiture du Japon', href: '/importer-une-voiture-du-japon', desc: 'Le parcours complet, de A à Z.' },
        { label: 'Dédouanement & frais d’import', href: '/dedouanement-frais-import-japon', desc: 'Droits de douane et TVA.' },
        { label: 'Importer une Porsche du Japon', href: '/importer-une-porsche-du-japon', desc: 'Homologation Porsche : le cas particulier.' },
        { label: 'Import Japon en Alsace', href: '/import-voiture-japon-alsace', desc: 'Strasbourg, Bas-Rhin, Haut-Rhin.' },
        { label: 'Nos modèles JDM', href: '/modeles', desc: 'Skyline, Supra, RX-7…' },
      ]}
    >
      <p>
        L'<strong>homologation</strong> est l'étape qui rend votre véhicule importé conforme aux
        normes européennes et autorise son immatriculation. C'est souvent la partie la plus
        technique d'une importation — et celle où l'expérience d'un spécialiste fait la différence.
      </p>

      <h2>« Homologation Japon » : de quoi parle-t-on exactement ?</h2>
      <p>
        L'expression <strong>homologation Japon</strong> désigne, dans le langage courant des
        importateurs, l'ensemble des démarches qui transforment un véhicule acheté sur le marché
        japonais en véhicule légalement immatriculé en France. Elle recouvre trois choses distinctes
        qu'il vaut mieux ne pas confondre :
      </p>
      <ul>
        <li>
          <strong>Le dédouanement</strong> : l'entrée du véhicule dans l'Union européenne, avec droits
          de douane et TVA. C'est une formalité fiscale, pas une homologation — le détail figure sur
          notre page <a href="/dedouanement-frais-import-japon">frais d'import</a>.
        </li>
        <li>
          <strong>L'homologation proprement dite</strong> : la démonstration que le véhicule satisfait
          aux exigences techniques applicables en France, par attestation du constructeur lorsqu'elle
          existe, ou par <strong>réception à titre isolé</strong> auprès de la DREAL.
        </li>
        <li>
          <strong>L'immatriculation</strong> : la délivrance de la <strong>carte grise française</strong>{' '}
          définitive (SIV), qui clôt le parcours.
        </li>
      </ul>
      <p>
        Ces trois étapes s'enchaînent, mais chacune a ses propres pièces, ses propres délais et ses
        propres pièges. C'est la raison pour laquelle nous les traitons comme un tout, dans un devis
        unique.
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

      <h2>Homologuer une Porsche, une Mercedes ou une BMW venue du Japon</h2>
      <p>
        L'<strong>homologation d'une Porsche importée du Japon</strong> — ou d'une Mercedes-Benz,
        d'une BMW, d'une Audi — obéit à la même logique, avec une nuance importante : ces modèles
        existent en version européenne, ce qui ouvre parfois la voie à une justification de conformité
        par le constructeur plutôt qu'à une réception à titre isolé complète. Tout dépend du type
        exact, du millésime et de la spécification du véhicule, que nous vérifions avant l'achat.
      </p>
      <p>
        Le marché japonais est particulièrement intéressant sur ce segment : entretien rigoureux,
        kilométrages faibles, compteurs déjà en kilomètres, et de nombreux exemplaires vendus neufs en
        conduite à gauche. Nous détaillons ce cas de figure sur notre page{' '}
        <a href="/importer-une-porsche-du-japon">importer et homologuer une Porsche du Japon</a>.
      </p>

      <h2>Homologation d'un véhicule japonais en Alsace et dans le Grand Est</h2>
      <p>
        AKS Motors est établi à <strong>Strasbourg (67)</strong>, dans le <strong>Bas-Rhin</strong>.
        Nous suivons les dossiers d'<strong>homologation de véhicules importés du Japon</strong> pour
        des clients de toute l'<strong>Alsace</strong> — Strasbourg, Haguenau, Saverne, Sélestat,
        Colmar, Mulhouse — du Grand Est et du reste de la France, le parcours administratif se pilotant
        à distance. Détails sur notre page{' '}
        <a href="/import-voiture-japon-alsace">import Japon en Alsace</a>.
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
