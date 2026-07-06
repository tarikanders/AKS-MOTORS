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
    dateModified: '2026-07-06',
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

      <h2>6. Les frais annexes, souvent oubliés</h2>
      <p>Trois postes passent régulièrement sous le radar des budgets : le <strong>transport du port
      européen jusqu'à chez vous</strong> (camion porte-voiture ou plaques provisoires), les
      <strong>frais de port et de manutention</strong> (déchargement, stationnement, transitaire) et
      l'<strong>assurance</strong> du véhicule entre le déchargement et l'immatriculation définitive.
      Individuellement modestes, ils représentent ensemble plusieurs centaines à plus d'un millier
      d'euros.</p>

      <h2>Le cas particulier des véhicules de plus de 30 ans</h2>
      <p>Un véhicule de plus de 30 ans conservé dans son état d'origine peut être dédouané en
      <strong>régime « véhicule de collection »</strong> : droits de douane à <strong>0 %</strong> et
      TVA réduite à <strong>5,5 %</strong> au lieu de 10 % + 20 %. Sur une Supra MK4 ou une RX-7 des
      premières années, l'économie se chiffre en milliers d'euros. Nous vérifions l'éligibilité de
      chaque projet en amont — voir aussi notre article sur
      <a href="/blog/importer-voiture-plus-25-ans-collection">l'importation des voitures de plus de
      25 ans</a>.</p>

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
    dateModified: '2026-07-06',
    readingMinutes: 6,
    html: `
      <p>La <strong>Nissan Skyline R34 GT-R</strong> est l'une des voitures les plus convoitées au
      monde. Avant de se lancer dans son importation, trois questions reviennent toujours.</p>

      <h2>La R34 GT-R est-elle légale en France ?</h2>
      <p>Oui. Contrairement à certains pays, la France autorise l'importation et l'homologation de la
      R34 GT-R. Une fois dédouanée et homologuée, elle reçoit une <strong>carte grise française
      définitive</strong> et circule en toute légalité.</p>

      <h2>Quel prix pour une R34 GT-R ?</h2>
      <p>Sa cote grimpe d'année en année. Les exemplaires d'origine, à l'historique vérifié et au bon
      grade, atteignent des sommes importantes aux enchères japonaises : comptez généralement un
      budget final de <strong>90 000 à 160 000 € tout compris</strong> pour un bel exemplaire
      standard (estimation 2026). Le sourcing direct reste le meilleur moyen d'éviter les exemplaires
      gonflés et surévalués.</p>

      <h2>Quelle version viser ?</h2>
      <p>La gamme s'étage entre la GT-R « standard », les <strong>V-Spec et V-Spec II</strong>
      (aérodynamique et châssis affûtés, les plus recherchées), la rare <strong>M-Spec</strong> et
      les éditions <strong>Nür</strong> (moteur N1, production confidentielle) qui s'échangent à des
      niveaux de collection pure. À budget donné, mieux vaut une standard saine et d'origine qu'une
      V-Spec au passé douteux : sur ce marché, l'authenticité fait le prix. La
      <a href="/encheres-japonaises">feuille d'enchère</a> et le numéro de châssis BNR34 sont vos
      meilleurs alliés.</p>

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
    dateModified: '2026-07-06',
    readingMinutes: 6,
    html: `
      <p>L'âge d'un véhicule a un vrai impact sur son importation. Voici ce qui change avec les
      seuils de 25 et 30 ans.</p>

      <h2>Les « 25 ans » : une règle américaine, pas française</h2>
      <p>Si vous avez lu que « les JDM deviennent légales à 25 ans », c'est la règle…
      <strong>des États-Unis</strong> (exemption fédérale d'importation à 25 ans). En France, il n'y
      a pas de seuil d'interdiction : un véhicule japonais peut être importé et homologué à tout âge
      via la <a href="/homologation-vehicule-japonais">réception à titre isolé</a>. Le vrai seuil qui
      change la donne chez nous est celui des <strong>30 ans</strong>.</p>

      <h2>Le seuil des 30 ans : carte grise de collection</h2>
      <p>À partir de 30 ans, un véhicule peut prétendre à une <strong>carte grise de collection</strong>,
      sous conditions (état d'origine, intérêt historique). Elle offre certains avantages mais impose
      aussi des règles spécifiques.</p>

      <h2>Le régime douanier de faveur</h2>
      <p>Un véhicule de plus de 30 ans, conservé dans son état d'origine et représentatif de son
      époque, peut être déclaré en douane comme <strong>véhicule de collection</strong> : droits de
      douane à <strong>0 %</strong> (au lieu de 10 %) et TVA réduite à <strong>5,5 %</strong> (au
      lieu de 20 %). Sur un achat de 40 000 €, l'écart dépasse 9 000 €. Le classement est soumis à
      des critères stricts (originalité, état) évalués au cas par cas par la douane.
      <a href="/dedouanement-frais-import-japon">Voir notre guide dédouanement</a>.</p>

      <h2>Quels modèles JDM sont concernés en 2026 ?</h2>
      <p>Le seuil des 30 ans englobe désormais une belle partie de l'âge d'or du JDM : premières
      <a href="/modeles/toyota-supra-mk4">Supra MK4</a> (1993-1996), premières
      <a href="/modeles/mazda-rx7-fd">RX-7 FD</a>, <a href="/modeles/honda-nsx">NSX NA1</a>,
      Skyline R32 et R33, premières Impreza et Lancer Evolution. La
      <a href="/modeles/nissan-skyline-r34-gtr">R34 GT-R</a> (1999-2002) commencera à y entrer
      en 2029.</p>

      <h2>Une homologation parfois simplifiée</h2>
      <p>Pour les véhicules anciens, certaines exigences techniques d'homologation peuvent être
      adaptées. Cela ne dispense pas du parcours DREAL / UTAC, mais peut le faciliter.</p>

      <h2>Notre rôle</h2>
      <p>Nous évaluons en amont l'éligibilité de votre projet à ces régimes et vous orientons vers la
      meilleure stratégie. <a href="/#contact">Parlons de votre projet</a>.</p>
    `,
  },
  {
    slug: 'homologation-rti-vehicule-japonais',
    title: "Homologation à titre isolé (RTI) : démarches, prix et délais en 2026",
    description:
      "La réception à titre isolé (RTI) est le passage obligé pour immatriculer un véhicule japonais en France : dossier DREAL, passage UTAC, modifications, prix et délais détaillés.",
    excerpt:
      "Sans réception européenne, pas de carte grise sans RTI. On détaille la procédure DREAL/UTAC pas à pas, avec les prix et les délais réels.",
    datePublished: '2026-04-14',
    readingMinutes: 6,
    html: `
      <p>La plupart des véhicules du marché intérieur japonais (JDM) n'ont jamais reçu de
      <strong>réception communautaire européenne</strong>. Pour les immatriculer en France, il faut
      donc passer par la <strong>réception à titre isolé (RTI)</strong>, instruite par la DREAL.
      Voici la procédure, sans jargon.</p>

      <h2>Quand la RTI est-elle nécessaire ?</h2>
      <p>Dès que le véhicule n'a ni réception communautaire (véhicule vendu neuf en Europe), ni
      certificat de conformité exploitable. C'est le cas de la quasi-totalité des JDM : Skyline,
      Supra RZ, RX-7, Evo, STI japonaises… Un véhicule identique à une version européenne peut
      parfois s'appuyer sur une attestation du constructeur, mais pour les modèles jamais vendus en
      Europe, la RTI est incontournable.</p>

      <h2>Étape 1 : la mise en conformité</h2>
      <p>Avant tout passage en contrôle, le véhicule doit répondre aux exigences françaises. Les
      adaptations classiques sur un JDM : réglage ou remplacement des <strong>feux</strong> (faisceau
      asymétrique gauche), ajout d'un <strong>antibrouillard arrière</strong>, conformité des
      clignotants et du support de plaque avant. Les compteurs japonais étant déjà en km/h, ce poste
      ne pose pas de problème.</p>

      <h2>Étape 2 : le passage UTAC (si requis)</h2>
      <p>Selon le dossier, la DREAL peut exiger un <strong>procès-verbal d'essai UTAC</strong>
      (laboratoire de Linas-Montlhéry) attestant la conformité technique. C'est le poste le plus
      coûteux et le plus long à planifier — d'où l'intérêt de constituer un dossier solide dès le
      départ pour limiter les exigences.</p>

      <h2>Étape 3 : le dossier DREAL</h2>
      <p>Le dossier comprend notamment le <strong>certificat d'exportation japonais traduit</strong>,
      la facture d'achat, le <strong>quitus fiscal</strong> (délivré après paiement de la TVA — voir
      notre guide <a href="/dedouanement-frais-import-japon">dédouanement</a>), la notice descriptive
      du véhicule et les justificatifs de conformité. Une fois la RTI accordée, l'immatriculation se
      fait normalement via l'ANTS.</p>

      <h2>Prix et délais réels</h2>
      <p>Budget global : <strong>3 000 à 8 000 €</strong> selon le véhicule, les modifications
      nécessaires et l'exigence ou non d'un passage UTAC. Délais : comptez <strong>4 à 8
      semaines</strong> après l'arrivée du véhicule, si le dossier est bien préparé. Un dossier
      incomplet peut facilement doubler ce délai — c'est la première cause de projets qui s'enlisent.</p>

      <h2>Ce que nous faisons pour vous</h2>
      <p>AKS Motors prépare le dossier complet, anticipe les modifications dès l'achat au Japon et
      pilote les échanges DREAL/UTAC jusqu'à la carte grise définitive. Le détail du parcours est sur
      notre page <a href="/homologation-vehicule-japonais">homologation d'un véhicule japonais</a>,
      et le processus complet sur <a href="/importer-une-voiture-du-japon">importer une voiture du
      Japon</a>. <a href="/#contact">Parlez-nous de votre projet</a>.</p>
    `,
  },
  {
    slug: 'lire-feuille-encheres-japonaise-uss',
    title: "Comment lire une feuille d'enchères japonaise (USS) : notes, codes et pièges",
    description:
      "Note globale, note intérieure, codes carrosserie (A, U, W, S, XX…) : apprenez à décoder une feuille d'enchères japonaise USS et à repérer les pièges avant d'acheter.",
    excerpt:
      "La feuille d'enchère dit tout du véhicule — à condition de savoir la lire. Décodage complet des notes et des codes carrosserie USS.",
    datePublished: '2026-05-19',
    readingMinutes: 6,
    html: `
      <p>Au Japon, chaque véhicule présenté aux enchères est inspecté par un expert indépendant qui
      rédige une <strong>feuille d'enchère (auction sheet)</strong>. C'est le document le plus fiable
      du marché de l'occasion mondial — à condition de savoir le décoder.</p>

      <h2>La note globale : de S à R</h2>
      <p>Elle résume l'état général : <strong>S ou 6</strong> (quasi neuf), <strong>5</strong>
      (excellent), <strong>4,5</strong> (très bon), <strong>4</strong> (bon état, défauts mineurs),
      <strong>3,5</strong> (usure visible, retouches à prévoir), <strong>3 et moins</strong> (état
      moyen à médiocre). Les lettres <strong>R / RA</strong> signalent un véhicule accidenté puis
      réparé. Pour une sportive des années 90, un grade 4 sain est déjà un très bon lot.</p>

      <h2>La note intérieure : de A à D</h2>
      <p>Attribuée séparément, elle va de <strong>A</strong> (intérieur impeccable) à
      <strong>D</strong> (usé, taché, brûlures). Une note C sur un véhicule de 30 ans n'a rien
      d'alarmant ; une note B sur un faible kilométrage confirme un exemplaire choyé.</p>

      <h2>Le schéma carrosserie et ses codes</h2>
      <p>Le croquis du véhicule est annoté panneau par panneau : <strong>A1-A3</strong> (rayure, du
      plus léger au plus marqué), <strong>U1-U3</strong> (bosse), <strong>B</strong> (bosse avec
      rayure), <strong>W1-W3</strong> (réparation/peinture, W3 = visible), <strong>S</strong>
      (rouille), <strong>C</strong> (corrosion), <strong>X</strong> (élément à remplacer),
      <strong>XX</strong> (élément déjà remplacé). Un XX sur une aile n'est pas forcément
      rédhibitoire ; un W3 sur un montant doit alerter.</p>

      <h2>Les pièges classiques</h2>
      <p>Premier piège : comparer les grades entre maisons d'enchères — les barèmes d'<strong>USS,
      CAA, TAA ou JU</strong> ne sont pas strictement identiques. Deuxième piège : se focaliser sur
      la note globale en ignorant les remarques manuscrites de l'inspecteur (fuites, bruits moteur,
      témoins allumés), souvent décisives. Troisième piège : un grade R systématiquement écarté —
      certaines réparations anciennes et mineures, bien documentées, font d'excellentes affaires.</p>

      <h2>Notre méthode</h2>
      <p>Nous traduisons intégralement chaque feuille, remarques manuscrites comprises, et nous vous
      la commentons avant toute enchère. C'est le cœur de notre travail de sourcing, décrit sur notre
      page <a href="/encheres-japonaises">enchères japonaises</a>. Pour voir ce que nous recherchons,
      parcourez <a href="/modeles">les modèles que nous importons</a> ou
      <a href="/#contact">décrivez-nous votre projet</a>.</p>
    `,
  },
  {
    slug: 'delais-importation-voiture-japon-etapes',
    title: "Importer une voiture du Japon : la chronologie complète, étape par étape",
    description:
      "De la recherche aux enchères à la carte grise française : la chronologie réelle d'une importation depuis le Japon, étape par étape, avec les délais de chaque phase.",
    excerpt:
      "Combien de temps entre « je me lance » et « je roule » ? Le déroulé réel d'un import Japon → France, phase par phase.",
    datePublished: '2026-06-23',
    readingMinutes: 6,
    html: `
      <p>« Combien de temps ça prend ? » — c'est, avec le prix, la question qu'on nous pose le plus.
      Réponse honnête : <strong>3 à 5 mois</strong> entre le lancement de la recherche et la remise
      des clés. Voici où passe ce temps.</p>

      <h2>Semaines 1 à 4 : la recherche aux enchères</h2>
      <p>Définition du cahier des charges (modèle, grade minimum, kilométrage, budget), puis veille
      quotidienne sur les enchères. Selon la rareté du modèle, le bon lot se présente en quelques
      jours… ou en quelques semaines. Nous vous présentons chaque candidat avec sa
      <a href="/blog/lire-feuille-encheres-japonaise-uss">feuille d'enchère traduite</a> ; vous
      validez avant toute enchère.</p>

      <h2>Semaine de l'achat : enchère, paiement, transport intérieur</h2>
      <p>Une fois l'enchère remportée, le véhicule est payé, sorti de la maison d'enchères et
      acheminé vers le port d'embarquement japonais (Yokohama, Nagoya, Osaka…). Les formalités
      d'export japonaises (radiation, certificat d'exportation) sont lancées en parallèle :
      comptez <strong>1 à 3 semaines</strong> jusqu'à l'embarquement selon les rotations de navires.</p>

      <h2>Semaines 6 à 14 : le transport maritime</h2>
      <p>La traversée vers l'Europe (Rotterdam, Anvers, Le Havre) prend <strong>6 à 8 semaines</strong>
      en RoRo ou en conteneur. C'est la phase la plus longue — et la plus tranquille : le véhicule
      est assuré, et vous recevez le connaissement maritime comme justificatif.</p>

      <h2>À l'arrivée : le dédouanement (1 à 2 semaines)</h2>
      <p>Au port, le véhicule est déclaré en douane : <strong>10 % de droits</strong> puis
      <strong>20 % de TVA</strong> sur la valeur CAF (ou le régime de collection pour les plus de
      30 ans éligibles). Le paiement débloque le <strong>quitus fiscal</strong>, indispensable pour
      la suite. Détail complet sur notre page
      <a href="/dedouanement-frais-import-japon">dédouanement et frais d'import</a>.</p>

      <h2>Semaines finales : homologation et carte grise (4 à 8 semaines)</h2>
      <p>Mise en conformité (feux, antibrouillard arrière, plaque), dossier de
      <a href="/blog/homologation-rti-vehicule-japonais">réception à titre isolé</a> auprès de la
      DREAL, passage UTAC si exigé, puis demande de carte grise via l'ANTS. Un dossier préparé dès
      l'achat au Japon fait gagner plusieurs semaines sur cette phase.</p>

      <h2>Le calendrier AKS Motors</h2>
      <p>Dès le démarrage, nous vous remettons un calendrier prévisionnel et vous tenons informé à
      chaque jalon (enchère, embarquement, arrivée, dédouanement, homologation). Le parcours complet
      est décrit sur <a href="/importer-une-voiture-du-japon">importer une voiture du Japon</a>.
      <a href="/#contact">Lancez votre projet</a>.</p>
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
