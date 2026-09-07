'use client';

import { useCallback, useEffect } from 'react';
import { colors, fontSizes } from '../lib/tokens';

const controlStyle = {
  fontFamily: 'var(--font-redaction)',
  background: 'none',
  border:     'none',
  cursor:     'pointer',
  color:      '#fff',
  padding:    '8px 12px',
} as const;

/**
 * Full-size screenshot viewer.
 *
 * Project cards are narrow, so a desktop screenshot is unreadable inside one.
 * The card shows a thumbnail and this shows the real thing, bounded by the
 * viewport rather than the card, which is also what makes it work on a phone.
 */
export function Lightbox({
  images,
  index,
  title,
  onClose,
  onIndexChange,
}: {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  const prev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange],
  );
  const next = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && images.length > 1) prev();
      if (event.key === 'ArrowRight' && images.length > 1) next();
    }
    window.addEventListener('keydown', onKeyDown);

    // The page behind must not scroll while the viewer is covering it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [images.length, next, onClose, prev]);

  return (
    <div
      data-testid="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshot viewer`}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '12px', padding: '24px',
        backgroundColor: 'rgba(0,0,0,0.92)',
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close screenshot viewer"
        style={{ ...controlStyle, position: 'absolute', top: '12px', right: '16px', fontSize: '18px' }}
      >
        ✕
      </button>

      <div
        onClick={(event) => event.stopPropagation()}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', maxWidth: '100%', maxHeight: '100%' }}
      >
        {images.length > 1 && (
          <button onClick={prev} aria-label="Previous screenshot"
                  style={{ ...controlStyle, fontSize: '28px', flexShrink: 0 }}>‹</button>
        )}
        <img
          data-testid="lightbox-image"
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          style={{
            // Bounded by the viewport, so it is as large as the screen allows.
            maxWidth: '100%', maxHeight: '82vh',
            width: 'auto', height: 'auto',
            objectFit: 'contain', borderRadius: '8px',
          }}
        />
        {images.length > 1 && (
          <button onClick={next} aria-label="Next screenshot"
                  style={{ ...controlStyle, fontSize: '28px', flexShrink: 0 }}>›</button>
        )}
      </div>

      {images.length > 1 && (
        <p style={{ fontFamily: 'var(--font-redaction)', fontSize: fontSizes.label, color: colors.textMuted }}>
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  );
}
