'use client';

import { useState } from 'react';
import { colors, fontSizes } from '../lib/tokens';
import type { Project } from '../data/projects';

const pill = {
  fontFamily:    'var(--font-pixelify-sans)',
  fontSize:      fontSizes.label,
  letterSpacing: '0.1em',
  color:         colors.textMuted,
  border:        `1px solid ${colors.rule}`,
  padding:       '2px 8px',
} as const;

const linkStyle = {
  fontFamily:     'var(--font-pixelify-sans)',
  fontSize:       fontSizes.label,
  letterSpacing:  '0.1em',
  textDecoration: 'none',
  background:     'none',
  border:         'none',
  padding:        0,
  cursor:         'pointer',
} as const;

interface Props { project: Project; }

export function ProjectCard({ project }: Props) {
  // Desktop inline carousel
  const [showCarousel, setShowCarousel] = useState(false);
  const [desktopIdx,   setDesktopIdx]   = useState(0);

  // Mobile modal
  const [open,      setOpen]      = useState(false);
  const [modalIdx,  setModalIdx]  = useState(0);

  const images = project.images ?? [];

  function prevDesktop() { setDesktopIdx((i) => (i - 1 + images.length) % images.length); }
  function nextDesktop() { setDesktopIdx((i) => (i + 1) % images.length); }
  function prevModal()   { setModalIdx((i)   => (i - 1 + images.length) % images.length); }
  function nextModal()   { setModalIdx((i)   => (i + 1) % images.length); }

  const tags = (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {project.tags.map((tag) => (
        <span key={tag} data-testid="project-tag" style={pill}>{tag}</span>
      ))}
    </div>
  );

  return (
    <div data-testid="project-card">

      {/* ─── Desktop: full card ─── */}
      <div
        className="desktop-block"
        style={{
          border:  `1px solid ${colors.rule}`,
          padding: '20px',
          gap:     '10px',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-pixelify-sans)',
            fontSize:   fontSizes.name,
            fontWeight: 700,
            color:      colors.text,
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: '13px', color: colors.textMuted, lineHeight: 1.6 }}>
          {project.description}
        </p>
        {tags}
        <div style={{ display: 'flex', gap: '16px', marginTop: '2px' }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               data-testid="project-github-link" style={{ ...linkStyle, color: colors.text }}>
              GITHUB
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
               data-testid="project-demo-link" style={{ ...linkStyle, color: colors.textMuted }}>
              DEMO
            </a>
          )}
          {images.length > 0 && (
            <button
              onClick={() => { setShowCarousel((v) => !v); setDesktopIdx(0); }}
              style={{ ...linkStyle, color: colors.textMuted }}
            >
              {showCarousel ? 'HIDE' : 'PREVIEW'}
            </button>
          )}
        </div>
        {showCarousel && images.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {images.length > 1 && (
                <button onClick={prevDesktop} style={{ ...linkStyle, color: colors.textMuted, fontSize: '20px' }}>‹</button>
              )}
              <img
                src={images[desktopIdx]}
                alt={`${project.title} screenshot ${desktopIdx + 1}`}
                style={{ height: '300px', width: 'auto', borderRadius: '12px', border: `1px solid ${colors.rule}` }}
              />
              {images.length > 1 && (
                <button onClick={nextDesktop} style={{ ...linkStyle, color: colors.textMuted, fontSize: '20px' }}>›</button>
              )}
            </div>
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '6px' }}>
                {images.map((_, i) => (
                  <button key={i} onClick={() => setDesktopIdx(i)} style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    border: 'none', cursor: 'pointer', padding: 0,
                    backgroundColor: i === desktopIdx ? colors.text : colors.rule,
                  }} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ─── Mobile: compact card ─── */}
      <div
        className="mobile-block"
        onClick={() => { setModalIdx(0); setOpen(true); }}
        style={{
          border:          `1px solid ${colors.rule}`,
          backgroundColor: 'transparent',
          padding:         '16px',
          gap:             '10px',
          cursor:          'pointer',
        }}
      >
        <h3 style={{ fontFamily: 'var(--font-pixelify-sans)', fontSize: fontSizes.name, fontWeight: 700, color: colors.text }}>
          {project.title}
        </h3>
        {tags}
        <div style={{ display: 'flex', gap: '10px' }}>
          {project.github  && <span style={{ ...linkStyle, color: colors.textMuted }}>GITHUB</span>}
          {project.demo    && <span style={{ ...linkStyle, color: colors.textMuted }}>DEMO</span>}
          {images.length > 0 && <span style={{ ...linkStyle, color: colors.textMuted }}>PREVIEW</span>}
        </div>
      </div>

      {/* ─── Mobile modal ─── */}
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)' }} />
          <div style={{
            position: 'relative', backgroundColor: colors.surface, border: `1px solid ${colors.rule}`,
            width: '100%', maxWidth: '520px', maxHeight: '85vh', overflowY: 'auto',
            padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px',
          }}>
            <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-pixelify-sans)', fontSize: '14px', color: colors.textMuted }}>✕</button>
            <h3 style={{ fontFamily: 'var(--font-pixelify-sans)', fontSize: fontSizes.name, fontWeight: 700, color: colors.text, paddingRight: '24px' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '13px', color: colors.textMuted, lineHeight: 1.6 }}>{project.description}</p>
            {tags}
            <div style={{ display: 'flex', gap: '16px' }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                   data-testid="project-github-link" style={{ ...linkStyle, color: colors.text }}>GITHUB</a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                   data-testid="project-demo-link" style={{ ...linkStyle, color: colors.textMuted }}>DEMO</a>
              )}
            </div>
            {images.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {images.length > 1 && <button onClick={prevModal} style={{ ...linkStyle, color: colors.textMuted, fontSize: '20px' }}>‹</button>}
                  <img src={images[modalIdx]} alt={`${project.title} screenshot ${modalIdx + 1}`}
                    style={{ height: '300px', width: 'auto', borderRadius: '12px', border: `1px solid ${colors.rule}` }} />
                  {images.length > 1 && <button onClick={nextModal} style={{ ...linkStyle, color: colors.textMuted, fontSize: '20px' }}>›</button>}
                </div>
                {images.length > 1 && (
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {images.map((_, i) => (
                      <button key={i} onClick={() => setModalIdx(i)} style={{
                        width: '6px', height: '6px', borderRadius: '50%', border: 'none',
                        cursor: 'pointer', padding: 0,
                        backgroundColor: i === modalIdx ? colors.text : colors.rule,
                      }} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
