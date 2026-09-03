import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/ArticleLayout';
import { serviceJsonLd } from '@/lib/seo';

const PATH = '/import-voiture-japon-alsace';

export const metadata: Metadata = {
  title: 'Import Japon en Alsace : importateur de véhicules à Strasbourg (Bas-Rhin)',
  description:
    "Importateur de voitures du Japon en Alsace : sourcing aux enchères japonaises, dédouanement, homologation DREAL/UTAC et carte grise. Basés à Strasbourg (67), nous intervenons dans tout le Bas-Rhin, le Haut-Rhin et le Grand Est.",
  keywords: [
    'import japon alsace',
    'import japon bas-rhin',
    'importateur voiture japon strasbourg',
    'importation véhicule japonais alsace',
    'homologation japon alsace',
    'import voiture japon grand est',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Import Japon en Alsace — AKS Motors, Strasbourg',
    description:
      "Votre importateur de véhicules japonais en Alsace : enchères au Japon, dédouanement, homologation et carte grise, de Strasbourg à Mulhouse.",
    url: PATH,
    type: 'website',
  },
};

const faq = [
  {
    q: 'Où êtes-vous situés en Alsace ?',
    a: "AKS Motors est basé à Strasbourg (67000), dans le Bas-Rhin. Nous recevons sur rendez-vous et intervenons dans tout le département, dans le Haut-Rhin et plus largement dans le Grand Est — ainsi que partout en France pour la partie import et homologation, qui se traite à distance.",
  },
  {
    q: 'Faut-il être en Alsace pour faire appel à vous ?',
    a: "Non. Le parcours d'importation (sourcing, enchères, transport, dédouanement, homologation) est entièrement piloté à distance, avec justificatif à chaque étape. Nos clients alsaciens apprécient simplement de pouvoir échanger de vive voix et voir le véhicule avant la livraison ; les autres reçoivent leur véhicule immatriculé à l'adresse de leur choix.",
  },
  {
    q: 'Où le véhicule arrive-t-il avant de rejoindre l’Alsace ?',
    a: "Les véhicules débarquent généralement à Rotterdam ou Anvers, où s'effectuent le dédouanement et les formalités d'import européennes. Le trajet jusqu'en Alsace se fait ensuite par camion porte-voiture ou sous plaques provisoires — une proximité géographique qui limite les frais d'acheminement final.",
  },
  {
    q: 'Puis-je faire homologuer en Alsace un véhicule japonais que j’ai déjà importé ?',
    a: "Contactez-nous avec les documents du véhicule (documents japonais, justificatifs d'importation et de dédouanement) : nous évaluons la faisabilité et le coût de l'homologation au cas par cas. Certains dossiers déjà engagés se rattrapent sans difficulté, d'autres demandent des mises aux normes plus lourdes.",
  },
  {
    q: 'Quelles villes couvrez-vous en Alsace ?',
    a: "Strasbourg, Haguenau, Schiltigheim, Illkirch-Graffenstaden, Saverne, Sélestat, Obernai, Molsheim et l'ensemble du Bas-Rhin ; Colmar, Mulhouse, Saint-Louis et le Haut-Rhin. Également Metz, Nancy et le reste du Grand Est.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={[{ name: 'Import Japon en Alsace', path: PATH }]}
      eyebrow="Alsace · Bas-Rhin · Grand Est"
      title="Import de véhicules du Japon en Alsace"
      lede="Basés à Strasbourg, nous importons des véhicules du Japon pour les passionnés d'Alsace et du Grand Est : enchères japonaises, dédouanement, homologation DREAL/UTAC et carte grise française."
      faq={faq}
      // Le nœud AutoDealer (NAP + areaServed Alsace/Bas-Rhin) est déjà émis par le
      // layout sur toutes les pages : le redéclarer ici créerait deux nœuds
      // concurrents sous le même @id.
      jsonLd={[
        serviceJsonLd({
          name: 'Import et homologation de véhicules japonais en Alsace',
          description:
            "Importateur de voitures japonaises et de Porsche depuis le Japon, basé à Strasbourg : sourcing aux enchères, transport maritime, dédouanement, homologation et carte grise, pour le Bas-Rhin, le Haut-Rhin et le Grand Est.",
          path: PATH,
        }),
      ]}
      related={[
        { label: 'Importer une voiture du Japon', href: '/importer-une-voiture-du-japon', desc: 'Le parcours complet, étape par étape.' },
        { label: 'Homologation d’un véhicule japonais', href: '/homologation-vehicule-japonais', desc: 'DREAL, UTAC, carte grise.' },
        { label: 'Importer une Porsche du Japon', href: '/importer-une-porsche-du-japon', desc: 'Sourcing et homologation Porsche.' },
        { label: 'À propos d’AKS Motors', href: '/a-propos', desc: 'Qui nous sommes, notre réseau.' },
      ]}
    >
      <p>
        Chercher un <strong>importateur de véhicules japonais en Alsace</strong> pose vite la même
        question : à qui confier un achat à 10 000 km de distance, dans une langue qu'on ne lit pas,
        avec un dédouanement et une <strong>homologation</strong> à la clé ? AKS Motors est établi à{' '}
        <strong>Strasbourg (67)</strong> et prend en charge la totalité du parcours, de l'enchère
        japonaise à la carte grise française.
      </p>

      <h2>Un importateur Japon implanté dans le Bas-Rhin</h2>
      <p>
        Notre implantation strasbourgeoise n'est pas un détail administratif. Elle permet un{' '}
        <strong>échange de vive voix</strong>, une visite du véhicule sur rendez-vous avant livraison,
        et une proximité réelle avec les ports d'arrivée du nord de l'Europe — Rotterdam et Anvers —
        d'où repartent les véhicules vers l'Alsace. Concrètement, cela raccourcit le dernier maillon
        logistique et limite les frais d'acheminement final.
      </p>

      <h2>Les zones que nous couvrons</h2>
      <ul>
        <li>
          <strong>Bas-Rhin (67)</strong> : Strasbourg, Schiltigheim, Illkirch-Graffenstaden, Haguenau,
          Saverne, Sélestat, Obernai, Molsheim, Bischwiller, Wissembourg.
        </li>
        <li>
          <strong>Haut-Rhin (68)</strong> : Colmar, Mulhouse, Saint-Louis, Guebwiller, Thann.
        </li>
        <li>
          <strong>Grand Est</strong> : Metz, Nancy, Épinal, Reims, Troyes.
        </li>
        <li>
          <strong>Reste de la France</strong> : le processus étant piloté à distance avec justificatif
          à chaque étape, nous livrons partout, véhicule immatriculé.
        </li>
      </ul>

      <h2>Ce que nous prenons en charge, de bout en bout</h2>
      <ol>
        <li><strong>Cadrage du projet</strong> : modèle, grade, kilométrage, budget, délai.</li>
        <li><strong>Sourcing au Japon</strong> : <a href="/encheres-japonaises">enchères japonaises</a> (USS, CAA, HAA) et achats de gré à gré via notre réseau de revendeurs partenaires.</li>
        <li><strong>Feuille d'enchère traduite</strong> et analyse d'état avant toute validation de votre part.</li>
        <li><strong>Transport maritime</strong> assuré jusqu'à Rotterdam ou Anvers.</li>
        <li><strong>Dédouanement</strong> : droits de douane 10 %, TVA 20 %, quitus fiscal — le détail sur notre page <a href="/dedouanement-frais-import-japon">frais d'import</a>.</li>
        <li><strong>Homologation DREAL / UTAC</strong> et mises aux normes — voir le guide <a href="/homologation-vehicule-japonais">homologation d'un véhicule japonais</a>.</li>
        <li><strong>Carte grise française (SIV)</strong> puis livraison en Alsace ou ailleurs.</li>
      </ol>

      <h2>JDM, mais pas seulement</h2>
      <p>
        Nos clients alsaciens viennent chercher les légendes japonaises — <a href="/modeles">Skyline
        GT-R, Supra, RX-7, NSX, Lancer Evo, Impreza STI</a> — mais aussi les allemandes que le marché
        japonais conserve remarquablement bien : <a href="/importer-une-porsche-du-japon">Porsche</a>,
        Mercedes-Benz, BMW et Audi, souvent faiblement kilométrées et fréquemment disponibles en
        conduite à gauche.
      </p>

      <h2>Parlons de votre projet</h2>
      <p>
        Décrivez-nous le véhicule recherché, votre budget et votre échéance : nous répondons sous 24 h
        avec une première analyse de faisabilité et une estimation du budget global tout compris,
        homologation incluse. <a href="/#contact">Contactez-nous</a> ou appelez-nous directement —
        AKS Motors, 67000 Strasbourg, visite sur rendez-vous.
      </p>
    </ArticleLayout>
  );
}
