# Rapport UX & Design — AKS Motors
**Commandé par :** Mustafa Aksu, Co-fondateur  
**Date :** Juin 2026  
**Analysé par :** Claude — Navigation réelle du site  
**Périmètre :** Design · IHM · Contenu · Bugs

---

**Score global : 6.2/10** — 3 bugs critiques · 7 points à améliorer · 5 éléments manquants

Le site a une identité visuelle forte et un positionnement premium clair. Les fondations sont solides, mais plusieurs problèmes bloquent la conversion.

---

## 1. Points forts — ce qui fonctionne bien

- **Identité visuelle forte** — Le triptyque noir/blanc/rouge est cohérent, premium, parfaitement adapté à l'univers JDM. Le logo AKS Motors est bien positionné.
- **Hero cinématique** — La vidéo de showroom avec "L'EXCELLENCE NIPPONE" crée immédiatement une émotion et positionne la marque dans le haut de gamme.
- **Section Processus limpide** — Les 4 étapes (Cahier des charges → Achat → Importation → Homologation) sont claires. L'utilisateur comprend d'emblée le service.
- **Cartes voiture bien structurées** — Année, grade, kilométrage, prix visibles d'un coup d'œil. Les badges EN TRANSIT / DISPONIBLE / VENDU sont utiles.
- **Services bien couverts** — Sourcing, logistique, dédouanement, homologation : la description est complète et rassurante pour des acheteurs novices.
- **Typography impactante** — Les titres condensés en majuscules donnent du caractère. Le split blanc/gris crée une hiérarchie visuelle efficace.

---

## 2. Design & Identité visuelle

### 🔴 Images voitures totalement incorrectes — Bug majeur
La carte "Nissan Skyline GT-R BNR34" affiche une photo de **BMW M4**. La carte "Toyota Supra JZA80" affiche une photo d'**Audi R8**. Ce sont des images placeholder sans aucun rapport avec les véhicules listés. Pour un spécialiste JDM, c'est une faute de crédibilité impardonnable.

> **→ Remplacer par des photos réelles ou des images de référence des modèles exacts (BNR34, JZA80, FD3S).**

### 🔴 Image cassée — Mazda RX-7 FD3S — Bug
La 3ème carte du catalogue n'affiche que le texte alt "RX-7 Type R Bathurst R". L'image est introuvable ou son URL est incorrecte. Sur un site premium, une image cassée détruit instantanément la confiance.

> **→ Corriger le chemin de l'image ou la remplacer.**

### 🟠 Carte "Sourcing & Enchères" avec trop d'espace vide
Cette carte est environ 2x plus grande que les autres cartes services. Sa moitié supérieure est vide — on ne voit qu'une icône en haut à gauche. Ce déséquilibre rompt la cohérence visuelle de la grille.

> **→ Ajouter une image ou illustration dans cet espace, ou réduire la hauteur pour l'aligner sur les autres.**

### 🟡 "NIPPONE" partiellement illisible
Le mot "NIPPONE" utilise un dégradé blanc → gris très prononcé. La fin du mot se noie dans le fond sombre. "NIPPE" est lisible, "ONE" presque invisible.

> **→ Ajuster le dégradé pour garantir un contraste minimum 4.5:1 sur toute la longueur.**

### 🟡 Accroche "IMPORTATION DIRECTE DU JAPON" invisible à l'arrivée
Ce sous-titre n'est visible qu'après la fin de l'animation et un léger scroll. Un visiteur voit uniquement un fond noir pendant 8 secondes sans savoir où il est.

> **→ S'assurer que cette accroche est visible dès la fin de l'animation, avant tout scroll.**

---

## 3. IHM & Navigation

### 🔴 Animation d'intro beaucoup trop longue — Critique
 Elle se relance entièrement à chaque navigation de section (cliquer sur STOCK depuis la homepage recharge tout depuis zéro). Sur mobile, 80% des utilisateurs partent avant 3 secondes de chargement.

> **→ Limiter à 2-3 sec max. Afficher uniquement lors de la 1ère visite (sessionStorage). Ajouter un bouton "Skip" visible dès la 1ère seconde.**

### 🔴 Navigation interne déclenche un rechargement complet
Les liens SERVICES, PROCESSUS, STOCK, CONTACT sont des ancres de scroll sur la homepage. Mais quand l'URL change en /stock ou /contact, la page redémarre depuis le début avec la pleine animation avant de scroller vers la section. L'utilisateur subit l'animation 2 fois.

> **→ Utiliser des hash links (#stock, #contact…) qui ne rechargent pas la page, ou implémenter un routage côté client qui évite de relancer l'animation.**

### 🔴 Bouton CONTACT ne mène à aucun formulaire — Critique conversion
Le bouton CONTACT dans la navbar est l'appel à l'action principal du site. Pourtant, il ne fait que scroller jusqu'au footer qui contient uniquement une adresse email. Aucun formulaire, aucune zone de saisie, aucun moyen de laisser ses coordonnées sans quitter le site.

> **→ Créer une section/page Contact avec formulaire : Prénom, Email, Téléphone, Voiture recherchée, Budget, Message. Ajouter un bouton WhatsApp.**

### 🟠 Cartes voiture : cliquer sur "›" ne mène nulle part
Aucune page de détail (VDP — Vehicle Detail Page) n'existe. L'utilisateur ne sait pas ce qui se passe s'il clique. Pour des voitures à 30 000-150 000€, une fiche complète est indispensable.

> **→ Créer une page détail par véhicule : galerie photos, description, feuille d'enchère traduite, prix détaillé (véhicule + transport + douane + homologation).**

### 🟠 Aucun filtre sur le stock
Pas de filtre par marque, statut, tranche de prix ou kilométrage. Avec 10+ véhicules, la navigation devient fastidieuse.

> **→ Ajouter une barre de filtres sur une page /stock dédiée : Marque, Statut, Prix min/max, Kilométrage.**

### 🟡 Pas d'indicateur de position dans la page
La page est longue. Aucun élément ne signale à l'utilisateur où il se trouve dans le scroll. Le lien de navigation actif n'est pas mis en surbrillance.

> **→ Highlighter le lien nav correspondant à la section visible. Optionnel : barre de progression ou dots latéraux.**

### 🟡 Pas de bouton "Retour en haut"
Après avoir scrollé jusqu'au footer, aucun bouton pour remonter rapidement.

> **→ Ajouter un bouton "↑" fixe en bas à droite, apparaissant après 300px de scroll.**

---

## 4. Contenu & Pages manquantes

### ❌ Aucune page "À propos" — et aucune histoire racontée

C'est le manque le plus stratégique du site. **Serdar Aksu a plus de 10 ans d'expérience dans l'importation japonaise. Mustafa Aksu est co-fondateur.** Aucun de ces éléments n'apparaît nulle part sur le site.

Les acheteurs de voitures à 50 000-100 000€ ne signent pas avec un site anonyme. Ils veulent **savoir à qui ils font confiance, pourquoi ces personnes sont légitimes, et ce qui les a menés à créer AKS Motors.** Une histoire bien racontée fait toute la différence entre un visiteur qui repart et un prospect qui envoie un message.

Il faut construire cette narrative : d'où vient la passion de Serdar pour le marché japonais, comment il a développé son réseau aux enchères USS et CAA sur 10 ans, pourquoi AKS Motors a été fondée, ce que Mustafa apporte en tant que co-fondateur. Ce n'est pas du contenu "nice to have" — c'est le socle de la confiance, et c'est ce qui différencie AKS Motors d'un intermédiaire lambda.

> **→ Créer une page "Notre histoire" avec :**
> - Portrait et parcours de Serdar Aksu (10+ ans d'expérience, expertise enchères, réseau Japon)
> - Portrait de Mustafa Aksu (rôle, compétences, vision)
> - La genèse d'AKS Motors — pourquoi et comment
> - Chiffres clés : nombre de véhicules importés, années d'activité, enchères partenaires (USS, CAA)
> - Photos réelles des deux fondateurs (indispensable pour humaniser)
> - La vision : ce que AKS Motors veut représenter sur le marché français

### ❌ Email incohérent avec la marque
Le footer affiche `contact@jdm-prestige.fr` alors que la marque est **AKS MOTORS**. Les deux noms ne correspondent pas, ce qui sème un doute immédiat sur la légitimité de l'entreprise.

> **→ Unifier sous un seul domaine : contact@aksmotors.fr ou contact@aks-motors.fr. Mettre à jour partout.**

### ❌ Aucun numéro de téléphone ni WhatsApp
Pour des transactions à 30 000-150 000€, l'absence de numéro de téléphone est un frein majeur. Les acheteurs veulent parler à quelqu'un. WhatsApp est particulièrement adapté à ce marché (partage de photos, documents, échanges rapides).

> **→ Afficher un numéro visible dans le header et footer. Intégrer un bouton WhatsApp flottant.**

### ❌ Pas de témoignages clients
Aucun avis, aucune preuve sociale. Sur un marché de niche avec des transactions élevées, les témoignages sont essentiels. "J'ai reçu ma Supra exactement comme annoncé, 4 mois après l'enchère." vaut plus que n'importe quel texte commercial.

> **→ Section "Ils nous ont fait confiance" avec 3-5 témoignages : prénom, modèle acheté, note. Intégrer avis Google si disponibles.**

### ❌ Pas de FAQ
L'importation japonaise génère beaucoup de questions : Combien coûte l'homologation ? Combien de temps dure le processus ? Peut-on choisir sa voiture aux enchères ? Quelle garantie ? Ces réponses rassurent les visiteurs et améliorent le référencement (SEO).

> **→ Section FAQ avec les 8-10 questions les plus fréquentes.**

### 🟡 "Sur mesure" dans le footer mais absent du nav principal
Le footer liste "Sur mesure" dans la navigation mais ce lien n'existe pas dans la navbar. Un utilisateur qui clique ne sait pas où il va atterrir.

> **→ Ajouter "Sur mesure" dans la navbar (c'est un différenciateur fort à mettre en avant), ou supprimer le lien du footer s'il n'est pas encore prêt.**

---

## 5. Bugs techniques — à corriger en priorité absolue

| Sévérité | Problème | Correction |
|----------|----------|------------|
| 🔴 Critique | Image cassée Mazda RX-7 FD3S | Corriger le chemin ou remplacer l'image |
| 🔴 Critique | Images placeholder incorrectes (BMW M4, Audi R8) | Remplacer par les bons modèles (BNR34, JZA80, FD3S) |
| 

---

## 6. Tableau de priorisation

| Priorité | Action | Impact | Effort |
|----------|--------|--------|--------|
| **P1 — Urgent** | Corriger les images voitures (mauvaises + cassée) | Crédibilité | Faible |
| **P1 — Urgent** | Créer une section Contact avec formulaire | Conversion directe | Moyen |
| **P1 — Urgent** | Corriger l'email (jdm-prestige → aksmotors) | Cohérence marque | Très faible |
| **P1 — Urgent** | 
| **P2 — Important** | Ajouter numéro de téléphone + bouton WhatsApp | Conversion | Très faible |
| **P2 — Important** | Créer page "À propos" avec histoire et profil des fondateurs | Confiance | Moyen |
| **P2 — Important** | Fiches détail par voiture (VDP) | Engagement | Élevé |
| **P2 — Important** | Ajouter témoignages clients | Confiance | Faible |
| **P2 — Important** | Corriger l'asymétrie de la card Sourcing & Enchères | Design | Très faible |
| **P3 — Moyen terme** | Page stock dédiée avec filtres | UX catalogue | Élevé |
| **P3 — Moyen terme** | Ajouter FAQ | SEO + Confiance | Faible |
| **P3 — Moyen terme** | Active state de la navbar au scroll | Navigation | Faible |
| **P3 — Moyen terme** | Bouton "Retour en haut" fixe | Confort | Très faible |
| **P3 — Moyen terme** | Ajouter "Sur mesure" dans la navbar | Navigation | Très faible |

---

## 7. Conclusion

AKS Motors dispose d'une base visuelle solide et d'un positionnement clair sur un marché de niche à forte valeur. Le design est premium, l'offre est bien articulée, et le processus en 4 étapes est rassurant.

Mais trois faiblesses majeures pénalisent directement la conversion aujourd'hui :

1. **Pas de moyen de contact direct** — Un prospect intéressé ne peut pas laisser ses coordonnées. Il repart sans laisser de trace.
2. **Les voitures n'ont pas les bonnes photos** — Un spécialiste JDM qui affiche une BMW pour une Skyline perd instantanément sa crédibilité auprès des connaisseurs — qui sont précisément la cible.
.

Et une lacune stratégique qui dépasse le design : **il n'y a aucune histoire humaine sur le site.** AKS Motors, c'est Serdar et Mustafa Aksu — deux personnes réelles avec un parcours, une expertise, une passion. Raconter cette histoire n'est pas optionnel : c'est ce qui transforme un site vitrine en une marque en laquelle on a envie d'avoir confiance pour un achat de cette envergure.

---

*Rapport généré par Claude — AKS Motors · Juin 2026 · Confidentiel*