import { ImageResponse } from 'next/og';

// Renderer partagé des images Open Graph (1200×630) : fond sombre de la marque,
// filet rouge, titre de la page. Utilisé par les fichiers `opengraph-image.tsx`
// de chaque segment (convention App Router, prioritaire sur metadata.openGraph.images).
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#09090b',
          backgroundImage: 'radial-gradient(ellipse at top right, rgba(127,29,29,0.35), transparent 60%)',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 56, height: 3, backgroundColor: '#dc2626' }} />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#f87171',
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: title.length > 55 ? 56 : 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ fontSize: 30, color: '#a1a1aa', maxWidth: 960, lineHeight: 1.35 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: 32,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 12,
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            <span>AKS</span>
            <span style={{ color: '#dc2626' }}>Motors</span>
          </div>
          <div style={{ fontSize: 26, color: '#71717a' }}>aksmotors.com</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
