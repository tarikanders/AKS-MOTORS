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
  /** Fourchettes de prix marché/enchères — estimations 2026, rédigées. */
  marketPrice: string;
  /** Spécificités d'homologation en France pour ce modèle précis. */
  homologation: string;
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
    marketPrice:
      "Aux enchères japonaises, une R34 GT-R saine se négocie autour de 10 à 20 millions de yens selon grade, kilométrage et version — soit généralement un budget final de 90 000 à 160 000 € tout compris pour un bel exemplaire standard (estimation 2026, à affiner lot par lot). Les V-Spec, V-Spec II et M-Spec se paient nettement plus cher, et les séries rares (Nür) atteignent des sommets. La cote progresse d'année en année : un exemplaire au bon grade, acheté au juste prix, est aussi un placement.",
    homologation:
      "La R34 GT-R n'a jamais été homologuée en Europe : l'immatriculation passe par une réception à titre isolé (RTI) auprès de la DREAL, avec les adaptations classiques (éclairage, antibrouillard arrière, support de plaque). Produite de 1999 à 2002, elle ouvrira la carte grise de collection (30 ans) à partir de 2029 pour les premiers millésimes — avec, pour les exemplaires éligibles, un dédouanement au régime « véhicule de collection » bien plus avantageux.",
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
    marketPrice:
      "L'écart est énorme entre une SZ atmosphérique (2JZ-GE) et une vraie RZ biturbo (2JZ-GTE) en boîte manuelle 6 : comptez grossièrement 35 000 à 60 000 € tout compris pour une atmosphérique soignée, et 70 000 à 120 000 € pour une RZ Twin Turbo d'origine au bon grade (estimation 2026). Les exemplaires stock à faible kilométrage sont en forte hausse et partent vite aux enchères.",
    homologation:
      "Le parcours standard est la réception à titre isolé (DREAL/UTAC) avec les adaptations d'usage. Gros avantage de la MK4 : les premiers millésimes (1993-1996) ont dépassé les 30 ans — ils peuvent prétendre à la carte grise de collection et, à l'import, au régime douanier « véhicule de collection » (droits de douane 0 %, TVA réduite à 5,5 %) si l'état d'origine le justifie.",
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
    marketPrice:
      "Comptez environ 30 000 à 55 000 € tout compris pour une FD saine au grade 4 ou plus ; les dernières séries (Spirit R de 2002 notamment) dépassent largement les 60 000 € (estimation 2026). Sur ce modèle, le critère n° 1 n'est pas le prix mais l'historique moteur : un rotatif refait dans les règles vaut mieux qu'un exemplaire « pas cher » à l'historique flou.",
    homologation:
      "RTI classique via DREAL/UTAC, avec adaptations d'éclairage et de plaque. Les FD produites entre 1992 et 1996 ont plus de 30 ans : carte grise de collection possible, et dédouanement au régime « véhicule de collection » (droits 0 %, TVA 5,5 %) pour les exemplaires restés proches de l'origine.",
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
    marketPrice:
      "Une NA1 saine se négocie généralement entre 70 000 et 110 000 € tout compris selon kilométrage et boîte ; les NA2 et les rares Type R / Type S se valorisent bien au-delà (estimation 2026). Les exemplaires japonais peu kilométrés, carnet d'entretien à l'appui, tirent la cote vers le haut — c'est précisément ceux que le sourcing aux enchères permet d'atteindre.",
    homologation:
      "Réception à titre isolé (DREAL/UTAC) avec adaptations mineures. Les NSX de 1990 à 1996 ont franchi le cap des 30 ans : elles ouvrent droit à la carte grise de collection et au dédouanement en régime « véhicule de collection » (droits 0 %, TVA 5,5 %) si l'exemplaire est resté conforme à l'origine.",
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
    marketPrice:
      "Le marché japonais regorge de R35 : comptez environ 55 000 à 80 000 € tout compris pour un millésime 2008-2012 sain, davantage pour les phases récentes, les Nismo et les séries spéciales (estimation 2026). À performances égales, l'économie face au marché français reste substantielle — c'est l'un des meilleurs rapports performances/prix de l'import JDM.",
    homologation:
      "Véhicule récent oblige, pas de régime de collection : c'est la réception à titre isolé classique. La R35 ayant été commercialisée en Europe, les écarts techniques entre version JDM et version européenne sont limités, ce qui simplifie les mises en conformité (éclairage, affichages). Nous validons la faisabilité millésime par millésime avant tout achat.",
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
    marketPrice:
      "La fourchette est large selon la génération : de 20 000 à 35 000 € tout compris pour une Evo VII à IX correcte, jusqu'à 50 000 € et au-delà pour les séries recherchées — Evo VI Tommi Mäkinen en tête (estimation 2026). Les exemplaires d'origine, jamais préparés, deviennent rares : ce sont eux qu'il faut viser aux enchères.",
    homologation:
      "RTI via DREAL/UTAC pour toutes les générations, avec les adaptations d'usage. Les Evo I à III (1992-1995) ont dépassé les 30 ans : carte grise de collection et régime douanier de collection possibles. Pour les générations récentes, le parcours standard s'applique sans difficulté particulière.",
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
    marketPrice:
      "Comptez environ 18 000 à 35 000 € tout compris pour une GDB/GRB saine, 25 000 à 45 000 € pour une belle GC8 STI, et des sommets pour les séries limitées — Type RA, S-séries, l'inaccessible 22B (estimation 2026). Comme pour l'Evo, l'état d'origine et l'historique priment sur tout le reste.",
    homologation:
      "Réception à titre isolé classique (DREAL/UTAC). Les premières GC8 (1992-1995) ont plus de 30 ans et ouvrent le régime de collection — carte grise dédiée et dédouanement à taux réduit. Pour le reste de la gamme, le parcours standard s'applique avec les adaptations habituelles d'éclairage et de plaque.",
    closing:
      "Nous trouvons l'Impreza STI qui vous correspond et orchestrons l'import jusqu'à l'immatriculation.",
  },
];

export function getModel(slug: string): CarModel | undefined {
  return MODELS.find((m) => m.slug === slug);
}
