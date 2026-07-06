import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Les pages sont surtout statiques (marketing) → SSG par défaut.
  // Le contenu texte est donc présent dans le HTML servi (indexable).
  images: {
    // Visuels du carrousel « stock » servis depuis Unsplash via next/image.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
