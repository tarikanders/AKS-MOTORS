export type CarModel = {
  slug: string;
  brand: string;
  model: string;
  name: string; // titre complet affiché
  era: string;
  metaDescription: string;
  lede: string;
  intro: string;
  highlights: string[];
  considerations: string[];
  closing: string;
};

export const MODELS: CarModel[] = [
  {
    slug: 'nissan-skyline-r34-gtr',
    brand: 'Nissan',
    model: 'Skyline R34 GT-R',
    name: 'Nissan Skyline R34 GT-R',
    era: '1999 – 2002',
    metaDescription:
      "Importer une Nissan Skyline R34 GT-R du Japon : prix, légalité en France, homologation et points à vérifier. Sourcing aux enchères japonaises par AKS Motors.",
    lede: "La GT-R la plus mythique du JDM. Importer une R34 GT-R du Japon demande méthode et réseau : voici l'essentiel avant de se lancer.",
    intro:
      "La Nissan Skyline R34 GT-R est devenue une icône absolue de la culture JDM. Sa cote ne cesse de grimper, ce qui rend l'importation depuis le Japon d'autant plus pertinente — mais aussi plus exposée aux mauvaises affaires. Le sourcing direct aux enchères japonaises reste la voie royale pour trouver un exemplaire sain au juste prix.",
    highlights: [
      'Moteur RB26DETT 2.6L biturbo, légendaire et préparable.',
      'Transmission intégrale ATTESA E-TS et boîte Getrag 6 rapports.',
      'Cote en forte hausse : un véritable actif de collection.',
      'Disponible aux enchères japonaises en différents grades.',
    ],
    considerations: [
      'Vérifier l’authenticité (châssis BNR34) et l’historique via la feuille d’enchère.',
      'Attention aux exemplaires gonflés/modifiés : privilégier l’origine.',
      'Homologation possible en France ; les modèles de +30 ans ouvriront le régime collection.',
      'Budget à anticiper : prix d’achat élevé + douane, TVA et homologation.',
    ],
    closing:
      "Nous identifions pour vous des R34 GT-R à l'historique vérifié, analysons chaque feuille d'enchère et orchestrons tout jusqu'à la carte grise française.",
  },
  {
    slug: 'toyota-supra-mk4',
    brand: 'Toyota',
    model: 'Supra A80 (MK4)',
    name: 'Toyota Supra A80 (MK4)',
    era: '1993 – 2002',
    metaDescription:
      "Importer une Toyota Supra MK4 (A80) du Japon : moteur 2JZ, prix, homologation France et conseils d'achat aux enchères japonaises avec AKS Motors.",
    lede: "Le 2JZ qui a marqué une génération. Importer une Supra MK4 du Japon, c'est viser un exemplaire d'origine et sain.",
    intro:
      "La Toyota Supra A80, propulsée par le mythique moteur 2JZ-GTE, est l'une des sportives japonaises les plus convoitées au monde. L'importation directe du Japon permet d'accéder à des exemplaires mieux entretenus et souvent plus proches de l'origine qu'en Europe.",
    highlights: [
      'Moteur 2JZ-GTE 3.0L biturbo, increvable et culte.',
      'Versions boîte manuelle 6 rapports très recherchées.',
      'Forte demande mondiale, valeur de collection en hausse.',
      'Large choix de grades disponibles au Japon.',
    ],
    considerations: [
      'Distinguer les versions atmosphériques (2JZ-GE) des biturbo (2JZ-GTE).',
      'Contrôler l’état d’origine : beaucoup d’exemplaires fortement modifiés.',
      'Vérifier la corrosion et l’historique d’entretien via la feuille d’enchère.',
      'Prévoir douane, TVA et homologation dans le budget global.',
    ],
    closing:
      "AKS Motors recherche pour vous la Supra MK4 correspondant à vos critères, feuille d'enchère traduite à l'appui, et gère l'intégralité de l'import.",
  },
  {
    slug: 'mazda-rx7-fd',
    brand: 'Mazda',
    model: 'RX-7 FD',
    name: 'Mazda RX-7 FD',
    era: '1992 – 2002',
    metaDescription:
      "Importer une Mazda RX-7 FD du Japon : moteur rotatif 13B, prix, homologation et points de vigilance. Sourcing aux enchères japonaises par AKS Motors.",
    lede: "Le rotatif dans sa plus belle expression. La RX-7 FD demande un œil expert — exactement notre métier.",
    intro:
      "La Mazda RX-7 FD, avec son moteur rotatif 13B biturbo et son design intemporel, est une sportive d'exception. Son moteur atypique exige un historique d'entretien sérieux : le marché japonais, plus rigoureux, offre de meilleures garanties.",
    highlights: [
      'Moteur rotatif 13B-REW biturbo, unique en son genre.',
      'Châssis léger et équilibré, plaisir de conduite rare.',
      'Lignes devenues iconiques, cote en progression.',
      'Disponible en plusieurs séries et finitions au Japon.',
    ],
    considerations: [
      'Le moteur rotatif réclame un entretien suivi : historique indispensable.',
      'Vérifier les compressions et tout signe de surchauffe passée.',
      'Méfiance envers les préparations mal réalisées.',
      'Anticiper douane, TVA et homologation.',
    ],
    closing:
      "Nous sélectionnons des RX-7 FD à l'historique vérifié et vous accompagnons jusqu'à l'immatriculation française.",
  },
  {
    slug: 'honda-nsx',
    brand: 'Honda',
    model: 'NSX (NA1/NA2)',
    name: 'Honda NSX',
    era: '1990 – 2005',
    metaDescription:
      "Importer une Honda NSX du Japon : la supercar accessible, prix, homologation France et conseils d'achat aux enchères japonaises avec AKS Motors.",
    lede: "La supercar pensée avec Senna. Importer une NSX du Japon, c'est viser un exemplaire choyé.",
    intro:
      "La Honda NSX a redéfini la supercar : performances de pointe et fiabilité Honda au quotidien. Les exemplaires japonais, souvent peu kilométrés et soigneusement entretenus, sont particulièrement prisés.",
    highlights: [
      'Châssis tout aluminium, V6 VTEC en position centrale arrière.',
      'Fiabilité légendaire pour une supercar.',
      'Mise au point associée à Ayrton Senna.',
      'Valeur de collection solide et croissante.',
    ],
    considerations: [
      'Distinguer NA1 et NA2 (motorisation, boîte).',
      'Vérifier l’authenticité et l’historique d’entretien.',
      'Les versions Type R sont rares et très valorisées.',
      'Prévoir le coût global import + homologation.',
    ],
    closing:
      "AKS Motors déniche pour vous la NSX au juste grade et orchestre l'import de bout en bout.",
  },
  {
    slug: 'nissan-gtr-r35',
    brand: 'Nissan',
    model: 'GT-R R35',
    name: 'Nissan GT-R R35',
    era: '2007 – aujourd’hui',
    metaDescription:
      "Importer une Nissan GT-R R35 du Japon : performances, prix, homologation et points à vérifier. Sourcing aux enchères japonaises par AKS Motors.",
    lede: "Godzilla moderne. La R35 importée du Japon offre un rapport performances/prix redoutable.",
    intro:
      "La Nissan GT-R R35 est une machine de performance pure, capable de rivaliser avec des supercars bien plus chères. Le marché japonais propose un large choix de millésimes et de finitions, souvent à des conditions attractives.",
    highlights: [
      'V6 VR38DETT biturbo, transmission intégrale, accélérations canon.',
      'Nombreux millésimes et éditions disponibles au Japon.',
      'Rapport performances/prix exceptionnel.',
      'Entretien suivi sur le marché japonais.',
    ],
    considerations: [
      'Vérifier l’historique d’entretien (boîte GR6, embrayages).',
      'Attention aux exemplaires fortement reprogrammés.',
      'Choisir le millésime selon les évolutions techniques.',
      'Intégrer douane, TVA et homologation au budget.',
    ],
    closing:
      "Nous vous aidons à choisir le bon millésime de R35 et gérons l'import jusqu'à la carte grise.",
  },
  {
    slug: 'mitsubishi-lancer-evo',
    brand: 'Mitsubishi',
    model: 'Lancer Evolution',
    name: 'Mitsubishi Lancer Evolution',
    era: '1992 – 2016',
    metaDescription:
      "Importer une Mitsubishi Lancer Evolution du Japon : Evo des séries rares, prix, homologation et conseils d'achat aux enchères japonaises avec AKS Motors.",
    lede: "L'icône de la transmission intégrale issue du rallye. Les Evo japonaises sont les plus pures.",
    intro:
      "La Mitsubishi Lancer Evolution, née de la compétition, est une berline survitaminée à transmission intégrale. Le Japon abrite les séries et finitions les plus recherchées (Evo VI Tommi Mäkinen, Evo IX…).",
    highlights: [
      'Transmission intégrale AWD redoutable d’efficacité.',
      'Moteur 4G63 turbo très préparable (selon génération).',
      'Séries spéciales rares disponibles au Japon.',
      'Héritage rallye authentique.',
    ],
    considerations: [
      'Identifier précisément la génération et la série.',
      'Contrôler l’état moteur/transmission et l’historique.',
      'Éviter les exemplaires malmenés en compétition amateur.',
      'Prévoir douane, TVA et homologation.',
    ],
    closing:
      "AKS Motors recherche l'Evo correspondant à vos critères et sécurise l'ensemble de l'importation.",
  },
  {
    slug: 'subaru-impreza-wrx-sti',
    brand: 'Subaru',
    model: 'Impreza WRX STI',
    name: 'Subaru Impreza WRX STI',
    era: '1992 – 2014',
    metaDescription:
      "Importer une Subaru Impreza WRX STI du Japon : flat-4 turbo, AWD, prix, homologation et conseils d'achat aux enchères japonaises avec AKS Motors.",
    lede: "Le boxer turbo et l'AWD façon rallye. Les STI japonaises offrent les versions les plus désirables.",
    intro:
      "La Subaru Impreza WRX STI, rivale historique de l'Evo, séduit par son moteur boxer turbo et sa transmission intégrale symétrique. Les versions JDM (STI, séries spéciales) sont les plus recherchées par les passionnés.",
    highlights: [
      'Moteur boxer turbo, sonorité et caractère uniques.',
      'Transmission intégrale symétrique héritée du rallye.',
      'Versions STI et séries limitées propres au marché japonais.',
      'Communauté et préparation très développées.',
    ],
    considerations: [
      'Vérifier l’état du moteur boxer (joints, historique).',
      'Distinguer les générations et finitions STI.',
      'Privilégier les exemplaires d’origine et suivis.',
      'Anticiper le coût global import + homologation.',
    ],
    closing:
      "Nous trouvons l'Impreza STI qui vous correspond et orchestrons l'import jusqu'à l'immatriculation.",
  },
];

export function getModel(slug: string): CarModel | undefined {
  return MODELS.find((m) => m.slug === slug);
}
