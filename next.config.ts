import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Les pages sont surtout statiques (marketing) → SSG par défaut.
  // Le contenu texte est donc présent dans le HTML servi (indexable).
};

export default nextConfig;
