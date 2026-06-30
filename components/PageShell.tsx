'use client';

import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SmoothScroll } from './fx/SmoothScroll';
import { Cursor } from './fx/Cursor';
import { Grain } from './fx/Grain';
import { FloatingActions } from './fx/FloatingActions';

/**
 * Coquille partagée des pages de contenu (piliers, modèles, blog, légal…).
 * Reprend les effets immersifs de la home (smooth scroll, curseur, grain) et
 * la navigation/footer communs. La home garde sa propre composition (Preloader).
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <Cursor />
      <Grain />
      <div className="min-h-screen bg-zinc-950">
        <Navbar introDone />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </div>
    </SmoothScroll>
  );
}
