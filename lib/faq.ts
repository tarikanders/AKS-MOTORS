// Questions/réponses de la FAQ de la page d'accueil.
// Données partagées entre le composant client (components/FAQ.tsx) et le
// JSON-LD FAQPage injecté côté serveur (app/page.tsx) — une seule source de
// vérité pour éviter toute divergence entre l'affichage et le rich snippet.
export const HOME_FAQ = [
  {
    q: "Combien de temps dure le processus complet, de l'enchère à la remise des clés ?",
    a: "En moyenne 3 à 5 mois : 2 à 4 semaines pour trouver le bon lot aux enchères, 6 à 8 semaines de transport maritime, puis 4 à 6 semaines pour le dédouanement et l'homologation DREAL/UTAC. Nous vous donnons un calendrier précis dès le démarrage.",
  },
  {
    q: "Combien coûte l'homologation en France ?",
    a: "L'homologation (DREAL + UTAC) représente généralement 3 000 à 8 000 € selon le véhicule, ses équipements et les modifications nécessaires pour respecter les normes européennes. Grâce à notre connaissance du marché et des démarches administratives, nous réduisons drastiquement ce coût et simplifions vos formalités.",
  },
  {
    q: "Puis-je choisir moi-même la voiture aux enchères japonaises ?",
    a: "Oui, c'est même notre mode de fonctionnement privilégié. Vous définissez votre cahier des charges (modèle, grade, kilométrage, options), nous identifions les lots correspondants et vous présentons les feuilles d'enchère traduites avant tout achat. Vous validez avant chaque engagement.",
  },
  {
    q: "Quelle garantie ai-je sur l'état réel du véhicule ?",
    a: "La feuille d'enchère japonaise (USS, CAA) est le document de référence : elle détaille précisément l'état de chaque partie du véhicule, avec note globale et photos. Nous vous la fournissons intégralement traduite et nous vous expliquons chaque code avant toute décision d'achat.",
  },
  {
    q: "Le véhicule aura-t-il une vraie carte grise française ?",
    a: "Absolument. C'est l'aboutissement de tout le processus d'homologation : réception d'une carte grise française définitive (SIV), pleinement valable pour la circulation et l'assurance en France et dans l'UE.",
  },
  {
    q: "Peut-on importer n'importe quel modèle japonais ?",
    a: "Presque tous les modèles peuvent être importés et homologués, mais certains nécessitent plus de modifications (remplacement des feux, support de plaque, clignotants). Quelques modèles très anciens ou très exotiques peuvent être difficiles à homologuer. Nous vous conseillons en amont sur la faisabilité.",
  },
  {
    q: "Comment se passe le paiement et est-il sécurisé ?",
    a: "Vous payez le prix d'achat du véhicule et les frais liés aux services à la commande, puis les taxes à l'arrivée du véhicule au port européen (droits de douane 10 %, TVA 20 %). Nous fournissons des justificatifs à chaque étape (confirmation d'enchère, connaissement maritime, déclaration douanière). Aucun virement sans document à l'appui.",
  },
  {
    q: "AKS Motors peut-il trouver des véhicules hors enchères (gré à gré) ?",
    a: "Oui. Pour les modèles rares ou les configurations très précises (couleur, options spécifiques), nous activons notre réseau de concessionnaires partenaires au Japon pour des achats de gré à gré. Cela peut allonger légèrement le délai mais garantit d'obtenir exactement ce que vous cherchez.",
  },
  {
    q: "Importez-vous aussi des Porsche et des allemandes depuis le Japon ?",
    a: "Oui. Le marché japonais est un excellent vivier de Porsche, Mercedes-Benz, BMW et Audi : entretien méticuleux, kilométrages faibles, compteurs déjà en kilomètres et de nombreux exemplaires vendus neufs en conduite à gauche. L'import et l'homologation suivent exactement le même parcours que pour un véhicule japonais. Nous détaillons ce cas sur notre page dédiée à l'importation d'une Porsche du Japon.",
  },
  {
    q: "Où êtes-vous situés, et travaillez-vous partout en France ?",
    a: "AKS Motors est basé à Strasbourg (67000), dans le Bas-Rhin. Nous accompagnons les passionnés d'Alsace et du Grand Est — Strasbourg, Haguenau, Saverne, Sélestat, Colmar, Mulhouse — avec la possibilité de nous rencontrer sur rendez-vous, et nous travaillons partout en France : l'import, le dédouanement et l'homologation se pilotent à distance, avec un justificatif à chaque étape.",
  },
  {
    q: "Que couvre exactement votre prestation de bout en bout ?",
    a: "Définition de votre besoin → recherche aux enchères → achat et inspection → transport maritime → dédouanement (TVA, droits de douane) → homologation → carte grise → livraison. Une seule interlocution, zéro démarche de votre côté avec l'offre « clé en main ».",
  },
];
