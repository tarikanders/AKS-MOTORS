import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/ArticleLayout';
import { serviceJsonLd } from '@/lib/seo';

const PATH = '/importer-une-porsche-du-japon';

export const metadata: Metadata = {
  title: 'Homologation Porsche Japon : importer une Porsche du Japon en France',
  description:
    "Importer et homologuer une Porsche du Japon : pourquoi le marché japonais, modèles disponibles (964, 993, 996, 997, GT3, Cayman), homologation DREAL/UTAC, carte grise, prix et délais. Accompagnement AKS Motors, Strasbourg (Alsace).",
  keywords: [
    'homologation porsche japon',
    'importer une porsche du japon',
    'import porsche japon',
    'porsche japonaise import france',
    'homologation porsche france',
    'porsche 911 import japon',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Importer & homologuer une Porsche du Japon',
    description:
      "Le marché japonais regorge de Porsche faiblement kilométrées et méticuleusement entretenues. Import, homologation DREAL/UTAC et carte grise française.",
    url: PATH,
    type: 'article',
  },
};

const faq = [
  {
    q: 'Peut-on homologuer une Porsche importée du Japon en France ?',
    a: "Oui. Une Porsche achetée au Japon s'homologue en France comme tout véhicule importé hors Union européenne : dossier d'importation et de dédouanement, justification de la conformité technique, puis carte grise française définitive (SIV). Selon le millésime et la spécification exacte du véhicule, la conformité peut être établie par une attestation du constructeur ou, à défaut, par une réception à titre isolé (RTI) auprès de la DREAL avec le passage UTAC correspondant. Nous vérifions la voie applicable avant tout achat.",
  },
  {
    q: "Combien coûte l'homologation d'une Porsche venue du Japon ?",
    a: "L'enveloppe d'homologation se situe généralement entre 3 000 et 8 000 € selon le modèle, son millésime et les mises aux normes nécessaires. À cela s'ajoutent les droits de douane (10 %) et la TVA (20 %) calculés sur la valeur CAF. Chez AKS Motors, l'ensemble est intégré dans un devis global annoncé dès le départ.",
  },
  {
    q: 'Les Porsche vendues au Japon sont-elles à conduite à droite ?',
    a: "Pas nécessairement. Le Japon roule à gauche, mais Porsche y a commercialisé de nombreux exemplaires en conduite à gauche, très recherchés par la clientèle locale. Le marché japonais est donc l'un des rares marchés à conduite à droite où l'on trouve régulièrement des Porsche LHD directement compatibles avec un usage français. Nous filtrons systématiquement les lots selon le côté de conduite souhaité.",
  },
  {
    q: 'Pourquoi acheter une Porsche au Japon plutôt qu’en Europe ?',
    a: "Trois raisons : l'état (contrôle technique japonais « shaken » strict, entretien méticuleux, stationnement majoritairement en garage), le kilométrage souvent faible, et une carrosserie généralement épargnée par le sel de déneigement sur la majorité du territoire. À état et millésime équivalents, l'écart de prix avec le marché européen justifie fréquemment le coût d'import et d'homologation.",
  },
  {
    q: 'Le compteur est-il en kilomètres ?',
    a: "Oui. Le Japon utilise le système métrique : les compteurs sont gradués en km/h et l'odomètre en kilomètres, contrairement aux importations nord-américaines. C'est un point de moins à traiter lors de l'homologation.",
  },
  {
    q: 'Combien de temps prend l’importation d’une Porsche depuis le Japon ?',
    a: "Comptez 3 à 5 mois de bout en bout : 2 à 4 semaines pour identifier le bon exemplaire (enchères ou achat de gré à gré chez un revendeur partenaire), 6 à 8 semaines de transport maritime vers un port européen, puis 4 à 6 semaines pour le dédouanement, l'homologation et la carte grise.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={[{ name: 'Importer une Porsche du Japon', path: PATH }]}
      eyebrow="Porsche · Import Japon"
      title="Importer & homologuer une Porsche du Japon"
      lede="Le Japon est l'un des meilleurs viviers de Porsche au monde : faible kilométrage, entretien obsessionnel, exemplaires souvent en conduite à gauche. Voici comment en importer une et obtenir son homologation française."
      faq={faq}
      jsonLd={serviceJsonLd({
        name: 'Import et homologation de Porsche depuis le Japon',
        description:
          "Sourcing, achat, transport, dédouanement et homologation française (DREAL / UTAC) de Porsche importées du marché japonais. Service clé en main AKS Motors.",
        path: PATH,
      })}
      related={[
        { label: 'Homologation d’un véhicule japonais', href: '/homologation-vehicule-japonais', desc: 'DREAL, UTAC, carte grise : le guide.' },
        { label: 'Import Japon en Alsace', href: '/import-voiture-japon-alsace', desc: 'Strasbourg, Bas-Rhin, Haut-Rhin.' },
        { label: 'Dédouanement & frais d’import', href: '/dedouanement-frais-import-japon', desc: 'Droits de douane 10 %, TVA 20 %.' },
        { label: 'Les enchères japonaises', href: '/encheres-japonaises', desc: 'USS, CAA, HAA : comment ça marche.' },
      ]}
    >
      <p>
        On associe spontanément l'<strong>import depuis le Japon</strong> aux légendes JDM. Pourtant,
        l'archipel est aussi l'un des marchés les plus fournis au monde en <strong>Porsche</strong>{' '}
        d'exception : la clientèle japonaise achète beaucoup, roule peu et entretient avec une rigueur
        rare. Résultat, des 911, Cayman et Boxster dans un état que l'on ne trouve plus en Europe à
        prix comparable — d'où l'intérêt croissant pour l'
        <strong>importation et l'homologation d'une Porsche venue du Japon</strong>.
      </p>

      <h2>Pourquoi le Japon est un excellent marché pour acheter une Porsche</h2>
      <ul>
        <li>
          <strong>Un entretien sans compromis</strong> : le contrôle technique japonais (le{' '}
          <em>shaken</em>) est fréquent, exigeant et coûteux. Il pousse les propriétaires à entretenir
          en réseau, pièces d'origine à l'appui, avec des carnets renseignés.
        </li>
        <li>
          <strong>Des kilométrages faibles</strong> : distances courtes, trafic urbain dense et usage
          souvent « plaisir » — beaucoup d'exemplaires affichent moins de 10 000 km par an.
        </li>
        <li>
          <strong>Des carrosseries saines</strong> : sur la majeure partie du territoire japonais, le
          salage hivernal est marginal et le stationnement se fait très majoritairement en garage
          fermé ou en parking mécanisé.
        </li>
        <li>
          <strong>Des exemplaires en conduite à gauche</strong> : Porsche a largement diffusé des
          versions LHD au Japon, prisées localement. Le marché japonais est donc l'un des rares
          marchés roulant à gauche où l'on source régulièrement des Porsche directement adaptées à un
          usage français.
        </li>
        <li>
          <strong>Des compteurs en kilomètres</strong> : contrairement aux imports nord-américains,
          aucun sujet de conversion mph / km/h à traiter.
        </li>
      </ul>

      <h2>Quelles Porsche importer du Japon ?</h2>
      <p>
        Le marché japonais couvre l'essentiel du catalogue, du youngtimer au sportif moderne. Les
        recherches que nous traitons le plus souvent :
      </p>
      <ul>
        <li><strong>911 air-cooled (964, 993)</strong> : les millésimes qui basculent progressivement en régime de collection.</li>
        <li><strong>911 996 et 997</strong>, y compris les <strong>GT3</strong> et <strong>Turbo</strong>, très bien conservées au Japon.</li>
        <li><strong>Cayman et Boxster</strong> (987, 981, 718), dont les <strong>Cayman GT4</strong>.</li>
        <li><strong>911 992 et 991</strong> récentes, souvent faiblement kilométrées.</li>
        <li>Séries limitées et configurations rares, accessibles via nos <a href="/encheres-japonaises">enchères japonaises</a> ou en gré à gré chez nos revendeurs partenaires.</li>
      </ul>
      <p>
        Le raisonnement vaut d'ailleurs pour les autres marques allemandes fortement représentées au
        Japon — <strong>Mercedes-Benz</strong>, <strong>BMW</strong>, <strong>Audi</strong> — que nous
        importons et homologuons selon exactement le même parcours.
      </p>

      <h2>L'homologation d'une Porsche importée du Japon, étape par étape</h2>
      <p>
        C'est la question centrale de tout projet : <strong>homologuer une Porsche du Japon</strong>{' '}
        suppose de prouver que le véhicule, construit pour le marché japonais, satisfait aux exigences
        applicables en France. Le parcours type :
      </p>
      <ol>
        <li>
          <strong>Étude de faisabilité en amont</strong> : identification exacte du type, du millésime
          et de la spécification (VIN, code option), pour déterminer la voie d'homologation applicable
          <em> avant</em> d'engager le moindre euro.
        </li>
        <li>
          <strong>Dédouanement à l'entrée dans l'Union européenne</strong> : droits de douane de 10 %
          et TVA de 20 % sur la valeur CAF, puis quitus fiscal. Voir le détail sur notre page{' '}
          <a href="/dedouanement-frais-import-japon">dédouanement et frais d'import</a>.
        </li>
        <li>
          <strong>Justification de la conformité</strong> : selon le véhicule, une attestation du
          constructeur peut suffire ; à défaut, on passe par la <strong>réception à titre isolé (RTI)</strong>{' '}
          avec essais et contrôle <strong>UTAC</strong>, puis validation du dossier par la{' '}
          <strong>DREAL</strong>.
        </li>
        <li>
          <strong>Mises aux normes éventuelles</strong> : éclairage, feu antibrouillard arrière,
          signalisation et support de plaque figurent parmi les points les plus courants sur un
          véhicule de spécification japonaise.
        </li>
        <li>
          <strong>Carte grise française définitive (SIV)</strong>, puis livraison du véhicule prêt à
          rouler et à assurer.
        </li>
      </ol>
      <p>
        Le détail complet du volet administratif est développé sur notre guide{' '}
        <a href="/homologation-vehicule-japonais">homologation d'un véhicule importé du Japon</a>.
      </p>

      <h2>Budget : ce que coûte réellement une Porsche importée du Japon</h2>
      <p>
        Au prix d'achat japonais s'ajoutent quatre postes : les frais locaux et le{' '}
        <strong>transport maritime</strong>, les <strong>droits de douane (10 %)</strong>, la{' '}
        <strong>TVA (20 %)</strong> et l'<strong>homologation</strong> (généralement 3 000 à 8 000 €).
        Pour les modèles de plus de 30 ans éligibles au régime « véhicule de collection », le
        traitement douanier est nettement plus favorable — un point à vérifier au cas par cas sur les
        964 et 993.
      </p>
      <p>
        Nous annonçons un <strong>devis global tout compris</strong> dès le départ, avec justificatif à
        chaque étape : confirmation d'enchère, connaissement maritime, déclaration douanière, dossier
        d'homologation.
      </p>

      <h2>AKS Motors, votre importateur Porsche depuis le Japon</h2>
      <p>
        Basés à <strong>Strasbourg</strong>, dans le <strong>Bas-Rhin</strong>, nous accompagnons des
        clients en <strong>Alsace</strong>, dans le Grand Est et partout en France. Réseau au Japon,
        analyse des feuilles d'enchère traduites, logistique, douane et homologation : un seul
        interlocuteur, de la recherche jusqu'à la carte grise.{' '}
        <a href="/#contact">Décrivez-nous la Porsche que vous cherchez</a> — nous vous répondons sous
        24 h avec une première analyse de faisabilité et de budget.
      </p>
    </ArticleLayout>
  );
}
