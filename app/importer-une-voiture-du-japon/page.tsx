import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/content/ArticleLayout';
import { serviceJsonLd } from '@/lib/seo';

const PATH = '/importer-une-voiture-du-japon';

export const metadata: Metadata = {
  title: 'Importer une voiture du Japon : guide complet (étapes, délais, prix)',
  description:
    "Comment importer une voiture du Japon en France : étapes de l'enchère à la carte grise, délais réels, coûts, et accompagnement clé en main par AKS Motors.",
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Importer une voiture du Japon : le guide complet',
    description:
      "De l'enchère japonaise à l'homologation française : étapes, délais et coûts d'une importation réussie.",
    url: PATH,
    type: 'article',
  },
};

const faq = [
  {
    q: "Est-il légal d'importer une voiture du Japon en France ?",
    a: "Oui, totalement. L'importation d'un véhicule japonais est parfaitement légale dès lors que les formalités de dédouanement et d'homologation sont respectées. Le véhicule reçoit au terme du processus une carte grise française définitive (SIV).",
  },
  {
    q: "Combien de temps prend une importation depuis le Japon ?",
    a: "En moyenne 3 à 5 mois : 2 à 4 semaines pour identifier le bon véhicule aux enchères, 6 à 8 semaines de transport maritime, puis 4 à 6 semaines pour le dédouanement et l'homologation.",
  },
  {
    q: "Puis-je importer une voiture du Japon sans intermédiaire ?",
    a: "C'est possible mais risqué : accès aux enchères réservé aux professionnels agréés, barrière de la langue, feuilles d'enchère techniques, logistique maritime, douane et homologation. Une erreur peut coûter cher. Un importateur spécialisé sécurise chaque étape.",
  },
  {
    q: "Quel budget prévoir pour importer une voiture japonaise ?",
    a: "Au prix d'achat s'ajoutent le transport maritime, les droits de douane (10 %) et la TVA (20 %), puis l'homologation. AKS Motors fournit un devis global tout compris dès le départ, sans surprise.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={[{ name: 'Importer une voiture du Japon', path: PATH }]}
      eyebrow="Guide importation"
      title="Importer une voiture du Japon"
      lede="Le marché japonais (JDM) est une mine de véhicules de sport et de collection en état exceptionnel. Voici comment en importer un en France, étape par étape, sans mauvaise surprise."
      faq={faq}
      jsonLd={serviceJsonLd({
        name: 'Importation de véhicules japonais',
        description:
          "Service complet d'importation de voitures depuis le Japon : sourcing aux enchères, transport, dédouanement et homologation française.",
        path: PATH,
      })}
      related={[
        { label: 'Homologation des véhicules japonais', href: '/homologation-vehicule-japonais', desc: 'DREAL, UTAC, carte grise : tout comprendre.' },
        { label: 'Dédouanement & frais d’import', href: '/dedouanement-frais-import-japon', desc: 'Droits de douane, TVA, coût réel.' },
        { label: 'Les enchères automobiles japonaises', href: '/encheres-japonaises', desc: 'USS, CAA : comment ça marche.' },
        { label: 'Nos modèles JDM', href: '/modeles', desc: 'Skyline, Supra, RX-7, NSX…' },
      ]}
    >
      <p>
        Importer une voiture du Japon, c'est accéder à un marché unique : entretien méticuleux,
        faible kilométrage, modèles introuvables en Europe et une transparence totale grâce aux
        <strong> feuilles d'enchère</strong> qui notent chaque véhicule. Encore faut-il maîtriser
        un parcours technique — c'est tout le métier d'un importateur spécialisé.
      </p>

      <h2>Pourquoi importer une voiture japonaise ?</h2>
      <ul>
        <li><strong>Un état mécanique remarquable</strong> : au Japon, le contrôle technique (shaken) est strict et coûteux, ce qui pousse à un entretien irréprochable.</li>
        <li><strong>Des modèles rares</strong> : Nissan Skyline GT-R, Toyota Supra, Mazda RX-7, Honda NSX, Mitsubishi Lancer Evo… souvent invendus neufs en France.</li>
        <li><strong>Une traçabilité réelle</strong> : la feuille d'enchère (auction sheet) décrit l'état exact du véhicule, note globale à l'appui.</li>
        <li><strong>Un rapport prix / rareté</strong> imbattable comparé au marché européen de l'occasion JDM.</li>
      </ul>

      <h2>Les étapes pour importer une voiture du Japon</h2>
      <ol>
        <li><strong>Cahier des charges</strong> : modèle, grade, kilométrage, budget. Nous cadrons votre recherche.</li>
        <li><strong>Recherche aux enchères</strong> : nous scrutons les enchères japonaises (USS, CAA…) et vous présentons les lots correspondants, feuilles d'enchère traduites.</li>
        <li><strong>Achat & inspection</strong> : nous enchérissons pour vous après votre validation, puis vérifions le véhicule.</li>
        <li><strong>Transport maritime</strong> : mise en conteneur ou roro, assurance, acheminement vers un port européen (Rotterdam, Anvers…).</li>
        <li><strong>Dédouanement</strong> : déclaration douanière, droits de douane et TVA. <a href="/dedouanement-frais-import-japon">Voir le détail des frais</a>.</li>
        <li><strong>Homologation</strong> : passage DREAL / UTAC pour la conformité européenne. <a href="/homologation-vehicule-japonais">Comprendre l'homologation</a>.</li>
        <li><strong>Carte grise & livraison</strong> : immatriculation française définitive, puis remise des clés.</li>
      </ol>

      <h2>Quels délais pour une importation ?</h2>
      <p>
        Comptez en moyenne <strong>3 à 5 mois</strong> entre le lancement de la recherche et la
        remise des clés. Le transport maritime représente à lui seul 6 à 8 semaines. Nous vous
        communiquons un calendrier précis dès le démarrage et un suivi à chaque étape.
      </p>

      <h2>Combien coûte l'importation d'une voiture japonaise ?</h2>
      <p>
        Au prix d'achat au Japon s'ajoutent quatre postes : le <strong>transport maritime</strong>,
        les <strong>droits de douane (10 %)</strong>, la <strong>TVA (20 %)</strong> et
        l'<strong>homologation</strong>. Chez AKS Motors, tous ces postes sont intégrés dans un
        <strong> devis global tout compris</strong>, sans frais cachés. Le détail figure sur notre
        page <a href="/dedouanement-frais-import-japon">dédouanement et frais d'import</a>.
      </p>

      <h2>Importer seul ou via un importateur spécialisé ?</h2>
      <p>
        L'accès aux enchères japonaises est réservé aux professionnels agréés. S'ajoutent la
        barrière de la langue, l'analyse technique des feuilles d'enchère, la logistique maritime,
        les formalités douanières et l'homologation. Une seule erreur (mauvais grade, modèle
        difficile à homologuer, frais sous-estimés) peut transformer la bonne affaire en gouffre.
        Passer par AKS Motors, c'est <strong>un seul interlocuteur</strong>, de l'enchère à la carte
        grise, et zéro démarche de votre côté.
      </p>

      <h2>AKS Motors, votre importateur de véhicules japonais</h2>
      <p>
        Basés à Strasbourg, nous accompagnons les passionnés dans toute la France pour importer la
        voiture japonaise de leurs rêves, en toute transparence. <a href="/#contact">Contactez-nous</a> pour
        une première analyse gratuite de votre projet.
      </p>
    </ArticleLayout>
  );
}
