export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string; // ISO
  dateModified?: string;
  readingMinutes: number;
  // Contenu HTML (rédigé en interne, donc fiable) rendu dans .prose-aks.
  html: string;
};

export const ARTICLES: Article[] = [
  {
    slug: 'combien-coute-importation-voiture-japon-2026',
    title: "Combien coûte l'importation d'une voiture du Japon en 2026 ?",
    description:
      "Prix d'achat, transport, droits de douane (10 %), TVA (20 %), homologation : le détail du coût réel pour importer une voiture du Japon en 2026.",
    excerpt:
      "Le prix affiché au Japon n'est que le début. On décompose chaque poste pour estimer le coût réel d'une importation en 2026.",
    datePublished: '2026-01-15',
    dateModified: '2026-06-30',
    readingMinutes: 6,
    html: `
      <p>C'est <strong>la</strong> question de tout futur importateur. La réponse tient en une
      logique simple : au prix d'achat s'ajoutent le transport, les taxes douanières et
      l'homologation. Voyons chaque poste en détail.</p>

      <h2>1. Le prix d'achat au Japon</h2>
      <p>Il dépend du modèle, du grade (note de la feuille d'enchère) et de la demande. Les modèles
      cultes (R34 GT-R, Supra MK4) atteignent des sommes élevées ; d'autres JDM restent très
      accessibles.</p>

      <h2>2. Les frais locaux et le transport maritime</h2>
      <p>Commission d'enchère, transport intérieur au Japon, mise en conteneur, puis fret maritime
      assuré jusqu'à un port européen (Rotterdam, Anvers). Comptez plusieurs milliers d'euros selon
      le mode (conteneur partagé ou dédié).</p>

      <h2>3. Les droits de douane : 10 %</h2>
      <p>À l'entrée dans l'Union européenne, un véhicule particulier supporte <strong>10 % de droits
      de douane</strong>, calculés sur la valeur « CAF » (achat + transport + assurance).</p>

      <h2>4. La TVA : 20 %</h2>
      <p>La <strong>TVA française de 20 %</strong> s'applique ensuite sur la valeur CAF majorée des
      droits de douane. Son paiement débloque le quitus fiscal, indispensable à l'immatriculation.</p>

      <h2>5. L'homologation</h2>
      <p>Le passage <strong>DREAL / UTAC</strong> et les éventuelles modifications représentent
      généralement 3 000 à 8 000 €. <a href="/homologation-vehicule-japonais">Voir notre guide
      homologation</a>.</p>

      <h2>Un ordre de grandeur</h2>
      <p>Pour un véhicule à 20 000 € avec 2 000 € de transport : ~2 200 € de droits, ~4 840 € de TVA,
      auxquels s'ajoutent frais locaux et homologation. Le détail figure sur notre page
      <a href="/dedouanement-frais-import-japon">dédouanement et frais d'import</a>.</p>

      <p>Chez AKS Motors, tout cela tient dans un <strong>devis global tout compris</strong> annoncé
      dès le départ. <a href="/#contact">Demandez votre estimation</a>.</p>
    `,
  },
  {
    slug: 'nissan-skyline-r34-france-prix-legalite',
    title: 'Nissan Skyline R34 GT-R en France : prix, homologation, légalité',
    description:
      "La R34 GT-R est-elle légale en France ? Quel prix, quelle homologation ? Tout ce qu'il faut savoir avant d'importer une Skyline R34 du Japon.",
    excerpt:
      "Mythe absolu du JDM, la R34 GT-R fait rêver. Mais est-elle légale en France, et à quel prix l'importer ?",
    datePublished: '2026-02-20',
    readingMinutes: 5,
    html: `
      <p>La <strong>Nissan Skyline R34 GT-R</strong> est l'une des voitures les plus convoitées au
      monde. Avant de se lancer dans son importation, trois questions reviennent toujours.</p>

      <h2>La R34 GT-R est-elle légale en France ?</h2>
      <p>Oui. Contrairement à certains pays, la France autorise l'importation et l'homologation de la
      R34 GT-R. Une fois dédouanée et homologuée, elle reçoit une <strong>carte grise française
      définitive</strong> et circule en toute légalité.</p>

      <h2>Quel prix pour une R34 GT-R ?</h2>
      <p>Sa cote grimpe d'année en année. Les exemplaires d'origine, à l'historique vérifié et au bon
      grade, atteignent des sommes importantes aux enchères japonaises. Le sourcing direct reste le
      meilleur moyen d'éviter les exemplaires gonflés et surévalués.</p>

      <h2>Quelle homologation ?</h2>
      <p>Le parcours classique DREAL / UTAC s'applique. Les exemplaires de plus de 30 ans pourront,
      le moment venu, ouvrir le régime <strong>véhicule de collection</strong>. <a
      href="/homologation-vehicule-japonais">Voir le guide homologation</a>.</p>

      <h2>Notre conseil</h2>
      <p>Sur un modèle aussi recherché, l'authenticité et l'historique sont primordiaux. Nous
      analysons chaque feuille d'enchère et privilégions l'origine. Découvrez notre page dédiée :
      <a href="/modeles/nissan-skyline-r34-gtr">importer une Nissan Skyline R34 GT-R</a>.</p>
    `,
  },
  {
    slug: 'importer-voiture-plus-25-ans-collection',
    title: 'Importer une voiture de plus de 25 ans : ce qui change',
    description:
      "Carte grise de collection, régime douanier, homologation simplifiée : ce qui change quand on importe une voiture japonaise de plus de 25 ou 30 ans.",
    excerpt:
      "L'âge du véhicule change beaucoup de choses à l'import : douane, homologation, carte grise de collection. Le point.",
    datePublished: '2026-03-18',
    readingMinutes: 5,
    html: `
      <p>L'âge d'un véhicule a un vrai impact sur son importation. Voici ce qui change avec les
      seuils de 25 et 30 ans.</p>

      <h2>Le seuil des 30 ans : carte grise de collection</h2>
      <p>À partir de 30 ans, un véhicule peut prétendre à une <strong>carte grise de collection</strong>,
      sous conditions (état d'origine, intérêt historique). Elle offre certains avantages mais impose
      aussi des règles spécifiques.</p>

      <h2>Le régime douanier de faveur</h2>
      <p>Certains véhicules anciens d'intérêt historique peuvent bénéficier de <strong>droits de
      douane et d'une TVA réduits</strong>. Un vrai levier d'optimisation, mais soumis à des critères
      stricts évalués au cas par cas. <a href="/dedouanement-frais-import-japon">Voir notre guide
      dédouanement</a>.</p>

      <h2>Une homologation parfois simplifiée</h2>
      <p>Pour les véhicules anciens, certaines exigences techniques d'homologation peuvent être
      adaptées. Cela ne dispense pas du parcours DREAL / UTAC, mais peut le faciliter.</p>

      <h2>Notre rôle</h2>
      <p>Nous évaluons en amont l'éligibilité de votre projet à ces régimes et vous orientons vers la
      meilleure stratégie. <a href="/#contact">Parlons de votre projet</a>.</p>
    `,
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatDateFr(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
