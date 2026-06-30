import type { Metadata } from 'next';
import Image from 'next/image';
import { ArticleLayout } from '@/components/content/ArticleLayout';

const PATH = '/a-propos';

export const metadata: Metadata = {
  title: 'À propos — Votre importateur de véhicules japonais',
  description:
    "AKS Motors, spécialiste de l'importation de véhicules de sport et de collection japonais, de l'enchère à l'homologation française. Basés à Strasbourg, au service des passionnés.",
  alternates: { canonical: PATH },
  openGraph: {
    title: 'À propos d’AKS Motors',
    description:
      "Spécialiste de l'importation JDM, de l'enchère japonaise à l'homologation française.",
    url: PATH,
    type: 'website',
  },
};

export default function Page() {
  return (
    <ArticleLayout
      breadcrumb={[{ name: 'À propos', path: PATH }]}
      eyebrow="Notre histoire"
      title="Passionnés, pas simples intermédiaires"
      lede="AKS Motors est né d'une conviction : l'importation d'un véhicule japonais doit être une expérience transparente, sécurisée et passionnante — pas un parcours du combattant."
      related={[
        { label: 'Importer une voiture du Japon', href: '/importer-une-voiture-du-japon', desc: 'Notre métier, étape par étape.' },
        { label: 'Nos modèles JDM', href: '/modeles', desc: 'Les légendes que nous sourçons.' },
      ]}
    >
      <h2>Notre mission</h2>
      <p>
        Nous accompagnons les passionnés dans toute la France pour importer la voiture japonaise de
        leurs rêves, depuis les enchères du Japon jusqu'à l'homologation française. Un seul
        interlocuteur, zéro démarche de votre côté, et une <strong>transparence absolue</strong> à
        chaque étape.
      </p>

      <h2>Notre engagement de transparence</h2>
      <ul>
        <li>Feuilles d'enchère japonaises intégralement traduites avant tout achat.</li>
        <li>Devis global tout compris dès le départ, sans frais cachés.</li>
        <li>Justificatif à chaque étape : enchère, transport, douane, homologation.</li>
        <li>Validation de votre part avant chaque engagement.</li>
      </ul>

      <h2>L'équipe</h2>
      <p>
        Basés à Strasbourg, nous mettons notre réseau au Japon et notre maîtrise des formalités
        françaises au service de votre projet.
      </p>

      {/* TODO: compléter les biographies réelles des fondateurs. */}
      <div className="not-prose grid sm:grid-cols-2 gap-6 mt-8">
        <figure className="border border-white/5 rounded-xl bg-zinc-900/60 p-6 text-center">
          <Image
            src="/auteur/mustafaksu.png"
            alt="Mustafa Aksu, cofondateur d'AKS Motors"
            width={160}
            height={160}
            className="mx-auto rounded-full object-cover w-32 h-32"
          />
          <figcaption className="mt-4">
            <span className="block font-display font-bold text-lg">Mustafa Aksu</span>
            <span className="block text-xs uppercase tracking-widest text-zinc-500 mt-1">Cofondateur</span>
            <span className="block text-sm text-zinc-400 font-light mt-3">[Bio à compléter — parcours, expertise, passion JDM]</span>
          </figcaption>
        </figure>
        <figure className="border border-white/5 rounded-xl bg-zinc-900/60 p-6 text-center">
          <Image
            src="/auteur/serdaraksu.png"
            alt="Serdar Aksu, cofondateur d'AKS Motors"
            width={160}
            height={160}
            className="mx-auto rounded-full object-cover w-32 h-32"
          />
          <figcaption className="mt-4">
            <span className="block font-display font-bold text-lg">Serdar Aksu</span>
            <span className="block text-xs uppercase tracking-widest text-zinc-500 mt-1">Cofondateur</span>
            <span className="block text-sm text-zinc-400 font-light mt-3">[Bio à compléter — parcours, expertise, passion JDM]</span>
          </figcaption>
        </figure>
      </div>
    </ArticleLayout>
  );
}
