 # Guide SEO off-site — AKS Motors

> Le code (Next.js, contenu, sitemap, données structurées) pose la **fondation**.
> Ce qui fait réellement grimper sur Google pour des requêtes comme « importation
> japon » ou « homologation voiture japonaise », c'est le **hors-site** : autorité,
> avis, citations locales et backlinks. Voici le plan d'action concret.

---

## 0. Cartographie mots-clés → pages (on-site)

Chaque requête cible a **une** page propriétaire. Ne jamais optimiser deux pages
sur la même requête (cannibalisation) : renforcer la page propriétaire et lier
les autres vers elle.

| Requête cible | Page propriétaire |
| --- | --- |
| homologation japon · homologation japon véhicule · homologation véhicule japonais | `/homologation-vehicule-japonais` |
| homologation porsche japon · importer une porsche du japon · import porsche japon | `/importer-une-porsche-du-japon` |
| import japon alsace · import japon bas-rhin · importateur voiture japon strasbourg | `/import-voiture-japon-alsace` |
| importer une voiture du japon · importation véhicule japonais | `/importer-une-voiture-du-japon` |
| frais import japon · droits de douane voiture japon · tva import véhicule | `/dedouanement-frais-import-japon` |
| enchères japonaises voiture · USS · CAA · HAA | `/encheres-japonaises` |
| [modèle] import france (R34, Supra MK4…) | `/modeles/[slug]` |

Le NAP (Nom / Adresse / Téléphone) et les zones desservies sont centralisés dans
`lib/seo.ts` (`autoDealerJsonLd`, `AREAS_SERVED`) : toute modification d'adresse
ou de téléphone se fait **là**, jamais page par page — la cohérence NAP est un
critère de classement local majeur (voir § 2).

⚠️ Le nœud `AutoDealer` est émis une seule fois, par `app/layout.tsx`. Ne pas le
redéclarer dans une page : deux nœuds sous le même `@id` se contrediraient.

---

## 1. Google Search Console (à faire en premier, gratuit)

1. Aller sur https://search.google.com/search-console
2. Ajouter la propriété **Domaine** `aksmotors.com` (vérification par enregistrement DNS TXT).
3. Soumettre le sitemap : `https://aksmotors.com/sitemap.xml`.
4. Utiliser **Inspection d'URL** sur la home + 2-3 pages piliers → « Demander une indexation ».
5. Surveiller chaque semaine : pages indexées, requêtes qui rapportent des impressions,
   erreurs d'exploration.

➡️ C'est ton tableau de bord SEO. Tout part de là.

Bonus : faire la même chose sur **Bing Webmaster Tools** (https://www.bing.com/webmasters) —
5 minutes, trafic supplémentaire.

---

## 1 bis. IndexNow (Bing, Yandex, Naver, Seznam, Yep)

Ces moteurs acceptent une notification directe a chaque publication, au lieu
d'attendre leur prochain crawl. **Google n'y participe pas** (teste depuis 2021,
jamais adopte) : pour lui, seuls le sitemap et la demande d'indexation via
Search Console comptent.

La cle de verification est servie a la racine du domaine :
`https://aksmotors.com/014c3cd470ebcf4bc6709a0a22df0eed.txt` (fichier `public/014c3cd470ebcf4bc6709a0a22df0eed.txt`, dont le contenu
est la cle elle-meme). Ne pas la renommer ni la supprimer : le fichier doit
rester accessible, sinon les soumissions sont rejetees.

Pour resoumettre apres une mise en ligne (reponse attendue : HTTP 200 ou 202) :

```sh
KEY=014c3cd470ebcf4bc6709a0a22df0eed
python3 - "$KEY" <<'PY' > /tmp/indexnow.json
import json,sys,urllib.request,re
key=sys.argv[1]
xml=urllib.request.urlopen("https://aksmotors.com/sitemap.xml",timeout=30).read().decode()
print(json.dumps({
  "host":"aksmotors.com","key":key,
  "keyLocation":f"https://aksmotors.com/{key}.txt",
  "urlList":re.findall(r"<loc>(.*?)</loc>",xml),
}))
PY
curl -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json; charset=utf-8" \
  --data-binary @/tmp/indexnow.json
```

---

## 2. Google Business Profile (déterminant pour le local + la marque)

1. Créer/revendiquer la fiche sur https://business.google.com
2. **Catégorie principale** : « Importateur automobile » (ou « Concessionnaire automobile »).
   Catégories secondaires : « Société d'importation/exportation ».
3. **NAP cohérent au pixel près** avec le site :
   - Nom : **AKS Motors**
   - Adresse : **67000 Strasbourg** (adresse précise requise par Google ; si pas de vitrine,
     option « zone de service » sans afficher l'adresse).
   - Téléphone : **+33 6 73 68 17 84**
   - Site : **https://aksmotors.com**
4. Remplir : description (avec mots-clés « importation véhicules japonais JDM », « homologation »),
   horaires, photos de voitures importées, du process, de l'équipe.
5. Publier régulièrement des « posts » Google (nouvelles arrivées, véhicules livrés).

⚠️ La cohérence **Nom / Adresse / Téléphone** entre le site, la fiche Google et tous les
annuaires est un critère de classement local majeur.

---

## 3. Avis clients (preuve sociale + étoiles dans Google)

- Demander **systématiquement** un avis Google après chaque livraison (lien direct vers la fiche).
- Viser un flux régulier (2-4/mois) plutôt qu'un pic suspect.
- Répondre à **tous** les avis (positifs comme négatifs), c'est un signal de qualité.
- ⚠️ Ne **jamais** inventer de faux avis : Google sanctionne, et on ne mettra des données
  structurées « Review/AggregateRating » sur le site **que** lorsqu'il y aura de vrais avis.
  (Le code est prêt à les accueillir le moment venu.)

---

## 4. Backlinks (l'autorité — le travail de fond)

Qualité > quantité. Quelques liens pertinents valent mieux que 100 liens spam.

**Cibles prioritaires (FR + JDM)**
- Forums et communautés JDM / sportives japonaises (signature, fil de présentation, build threads).
- Annuaires automobiles et locaux sérieux (Strasbourg/Grand Est, CCI, Pages Jaunes pro).
- Presse spécialisée auto / blogs JDM : proposer un article invité ou un retour d'expérience.
- Partenariats : préparateurs, garages spécialisés, clubs (Skyline, Supra, RX-7…), événements/meetings.
- Réseaux sociaux actifs (Instagram, YouTube) : montrer les imports, les livraisons, les enchères.
  Le contenu vidéo génère des liens et de la notoriété de marque.

**À éviter** : achat de liens en masse, fermes de liens, annuaires douteux → risque de pénalité.

---

## 5. Contenu (alimenter le blog dans la durée)

Le blog est en place (`/blog`). Publier **1-2 articles/mois** ciblant la longue traîne :
- « Importer une [modèle] en France : prix et démarches »
- « R34 vs R33 vs R32 : quelle Skyline importer ? »
- « Combien de temps pour importer une voiture du Japon ? »
- « Carte grise d'un véhicule importé : le guide »
- Retours d'expérience clients (avec photos) → contenu unique et engageant.

Chaque article doit mailler vers les pages piliers et modèles concernés (déjà la convention en place).

---

## 6. Suivi (mensuel)

- Positions sur les requêtes cibles (Search Console + éventuellement un outil type Ubersuggest/SE Ranking).
- Évolution du trafic organique.
- Nombre d'avis Google et note moyenne.
- Nouveaux backlinks (Search Console > Liens).

---

## Ordre de priorité recommandé

1. **Déployer** la nouvelle version (Next.js indexable).
2. **Search Console** + soumission sitemap + demande d'indexation.
3. **Google Business Profile** complet.
4. Mettre en place la **collecte d'avis**.
5. **Backlinks** + **réseaux sociaux** en continu.
6. **Blog** : rythme régulier.

> Réaliste : longue traîne et local peuvent bouger en quelques semaines. Les requêtes-tête
> très concurrentielles (« importation japon ») se gagnent sur 6-12 mois de constance.
