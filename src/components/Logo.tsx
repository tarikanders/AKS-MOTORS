interface LogoProps {
  /** Classes appliquées à l'image (gérez la taille via la hauteur, ex. "h-12 w-auto"). */
  className?: string;
  /** eager pour le logo de la navbar (above the fold), lazy pour le footer. */
  priority?: boolean;
}

/**
 * Logo AKS Motors. Sert le WebP (~82 Ko) avec repli PNG pour les anciens navigateurs.
 * Fichiers sources dans /public/logo.webp et /public/logo.png.
 */
export function Logo({ className, priority = false }: LogoProps) {
  return (
    <picture>
      <source srcSet="/logo.webp" type="image/webp" />
      <img
        src="/logo.png"
        alt="AKS Motors"
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
      />
    </picture>
  );
}
