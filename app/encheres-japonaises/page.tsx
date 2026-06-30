import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/ArticleLayout';
import { serviceJsonLd } from '@/lib/seo';

const PATH = '/encheres-japonaises';

export const metadata: Metadata = {
  title: 'Enchères automobiles japonaises (USS, CAA) : comment ça marche',
  description:
    "Comment fonctionnent les enchères de voitures au Japon (USS, CAA, TAA) ? Feuilles d'enchère, grades, accès professionnel : le guide pour acheter au meilleur prix avec AKS Motors.",
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Les enchères automobiles japonaises expliquées',
    description:
      "USS, CAA, feuilles d'enchère et grades : comment acheter une voiture aux enchères au Japon en toute sécurité.",
    url: PATH,
    type: 'article',
  },
};

const faq = [
  {
    q: "Qu'est-ce qu'une feuille d'enchère (auction sheet) ?",
    a: "C'est le document de référence émis par la maison d'enchères. Il décrit précisément l'état du véhicule (carrosserie, intérieur, mécanique), avec une note globale et un schéma des défauts. C'est la garantie de transparence du marché japonais.",
  },
  {
    q: 'Que signifient les grades aux enchères japonaises ?',
    a: "Les véhicules sont notés de 1 à 6 (et S pour le neuf). Un grade 4 ou 4.5 correspond à un très bon état général ; 5 et plus à un état exceptionnel. L'intérieur reçoit aussi une note (A à D). Nous traduisons et analysons chaque feuille pour vous.",
  },
  {
    q: 'Peut-on participer aux enchères japonaises en tant que particulier ?',
    a: "Non : l'accès aux grandes maisons d'enchères (USS, CAA, TAA…) est réservé aux professionnels agréés et membres. Il faut passer par un intermédiaire disposant d'un compte et d'un dépôt de garantie, comme AKS Motors.",
  },
  {
    q: 'Choisit-on soi-même le véhicule à enchérir ?',
    a: "Oui, c'est notre mode de fonctionnement privilégié : vous définissez vos critères, nous vous présentons les lots correspondants avec feuilles d'enchère traduites, et vous validez avant chaque enchère.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={[{ name: 'Enchères japonaises', path: PATH }]}
      eyebrow="Guide enchères"
      title="Les enchères automobiles japonaises"
      lede="Le Japon écoule des dizaines de milliers de véhicules chaque semaine via un système d'enchères unique et transparent. Voici comment il fonctionne — et comment en profiter."
      faq={faq}
      jsonLd={serviceJsonLd({
        name: 'Achat aux enchères automobiles japonaises',
        description:
          "Sourcing et achat de véhicules aux enchères japonaises (USS, CAA, TAA) pour le compte de clients français, avec analyse des feuilles d'enchère.",
        path: PATH,
      })}
      related={[
        { label: 'Importer une voiture du Japon', href: '/importer-une-voiture-du-japon', desc: 'Le parcours complet.' },
        { label: 'Dédouanement & frais d’import', href: '/dedouanement-frais-import-japon', desc: 'Le coût réel.' },
        { label: 'Homologation véhicule japonais', href: '/homologation-vehicule-japonais', desc: 'Rouler légalement en France.' },
      ]}
    >
      <p>
        Les <strong>enchères japonaises</strong> sont le cœur du marché de l'occasion au Japon.
        Centralisées, encadrées et d'une transparence rare, elles permettent d'acheter des
        véhicules en excellent état à des prix de gros — à condition d'y avoir accès et de savoir
        lire une feuille d'enchère.
      </p>

      <h2>Les grandes maisons d'enchères</h2>
      <ul>
        <li><strong>USS</strong> (Used Car System Solutions) : le plus grand réseau d'enchères du Japon.</li>
        <li><strong>CAA</strong> et <strong>TAA</strong> : réseaux majeurs adossés aux constructeurs.</li>
        <li>Des dizaines de sites physiques répartis dans tout le pays, avec des ventes quotidiennes.</li>
      </ul>

      <h2>La feuille d'enchère : la clé de la transparence</h2>
      <p>
        Chaque véhicule est inspecté par un expert indépendant qui établit une <strong>feuille
        d'enchère</strong> : note globale (de 1 à 6, voire S), note d'intérieur (A à D), et un
        schéma détaillant les éraflures, impacts ou réparations. Cette traçabilité est ce qui rend
        l'achat à distance fiable — encore faut-il la décrypter correctement.
      </p>

      <h2>Comprendre les grades</h2>
      <p>
        Un <strong>grade 4 à 4.5</strong> indique un très bon état général ; un <strong>grade 5 ou
        plus</strong>, un état exceptionnel, souvent faible kilométrage. En dessous de 3.5, le
        véhicule peut présenter des défauts ou réparations. Nous <strong>traduisons et analysons</strong>
        chaque feuille pour vous éviter les pièges.
      </p>

      <h2>Pourquoi un intermédiaire est indispensable</h2>
      <p>
        L'accès aux enchères est <strong>réservé aux professionnels agréés</strong> disposant d'un
        compte et d'un dépôt de garantie. AKS Motors enchérit pour vous, dans la limite que vous
        fixez, après validation du lot. Pour les modèles rares, nous activons aussi notre réseau de
        concessionnaires pour des achats de <strong>gré à gré</strong>.
      </p>

      <h2>De l'enchère à votre garage</h2>
      <p>
        Une fois le véhicule remporté, nous orchestrons <a href="/dedouanement-frais-import-japon">le transport
        et le dédouanement</a> puis <a href="/homologation-vehicule-japonais">l'homologation</a> jusqu'à la
        carte grise. <a href="/#contact">Confiez-nous votre recherche</a> : nous trouvons le bon lot, au
        bon prix.
      </p>
    </ArticleLayout>
  );
}
