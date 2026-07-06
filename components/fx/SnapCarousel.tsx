'use client';

import { useEffect, useState, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type Breakpoint = 'md' | 'lg';

/** Classes statiques par breakpoint (Tailwind ne compile pas les classes dynamiques). */
const BP = {
  md: {
    query: '(min-width: 768px)',
    viewport: 'overflow-hidden md:overflow-visible -mx-6 md:mx-0',
    container: 'px-6 md:px-0',
    dots: 'md:hidden',
  },
  lg: {
    query: '(min-width: 1024px)',
    viewport: 'overflow-hidden lg:overflow-visible -mx-6 lg:mx-0',
    container: 'px-6 lg:px-0',
    dots: 'lg:hidden',
  },
} as const;

type SnapCarouselProps = {
  /** Une slide par élément. */
  children: ReactNode[];
  /** Breakpoint au-delà duquel le carrousel se dissout dans le layout desktop du container. */
  breakpoint?: Breakpoint;
  /** Gap mobile + layout desktop du container (ex. `gap-4 lg:grid lg:grid-cols-3 lg:gap-8`). */
  containerClassName?: string;
  /** Largeur des slides en mobile (ex. `flex-[0_0_78%]`) — ignorée en grille desktop. */
  slideClassName?: string;
  ariaLabel?: string;
};

/**
 * Carrousel mobile à priorité de scroll vertical (Embla).
 * Le container porte `touch-action: pan-y` : un geste vertical scrolle toujours
 * la page nativement ; le drag horizontal n'est engagé que si l'intention est
 * clairement horizontale. Les slides en « peek » + les points de pagination
 * rendent la présence d'autres cartes évidente sans toucher l'écran.
 * Au-delà du breakpoint, Embla se désactive et le container reprend son layout
 * desktop (grille).
 */
export function SnapCarousel({
  children,
  breakpoint = 'md',
  containerClassName = '',
  slideClassName = '',
  ariaLabel,
}: SnapCarouselProps) {
  const bp = BP[breakpoint];
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    breakpoints: { [bp.query]: { active: false } },
  });
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    const onReInit = () => {
      setSnapCount(embla.scrollSnapList().length);
      onSelect();
    };
    onReInit();
    embla.on('select', onSelect).on('reInit', onReInit);
    return () => {
      embla.off('select', onSelect).off('reInit', onReInit);
    };
  }, [embla]);

  return (
    <div role={ariaLabel ? 'region' : undefined} aria-label={ariaLabel}>
      <div ref={emblaRef} className={bp.viewport}>
        <div className={`flex touch-pan-y touch-pinch-zoom ${bp.container} ${containerClassName}`}>
          {children.map((child, i) => (
            <div key={i} className={`min-w-0 shrink-0 ${slideClassName}`}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {snapCount > 1 && (
        <div className={`flex items-center justify-center gap-1.5 mt-6 ${bp.dots}`}>
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Aller à l'élément ${i + 1} sur ${snapCount}`}
              className="py-2 px-0.5"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === selected ? 'w-7 bg-red-500' : 'w-1.5 bg-zinc-700'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
