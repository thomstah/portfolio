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

const linkBtn = {
  fontFamily:    'var(--font-pixelify-sans)',
  fontSize:      fontSizes.label,
  letterSpacing: '0.1em',
  textDecoration: 'none',
  background:    'none',
  border:        'none',
  padding:       0,
  cursor:        'pointer',
} as const;

interface Props { project: Project; }

export function ProjectCard({ project }: Props) {
  const [open,      setOpen]      = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [hovered,   setHovered]   = useState(false);

  const images = project.images ?? [];

  function prev() { setActiveIdx((i) => (i - 1 + images.length) % images.length); }
  function next() { setActiveIdx((i) => (i + 1) % images.length); }

  function openModal() { setActiveIdx(0); setOpen(true); }

  return (
    <>
      {/* ── Compact card ── */}
      <div
        data-testid="project-card"
        onClick={openModal}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border:          `1px solid ${hovered ? colors.textMuted : colors.rule}`,
          backgroundColor: hovered ? colors.surface : 'transparent',
          padding:         '16px',
          display:         'flex',
          flexDirection:   'column',
          gap:             '10px',
          cursor:          'pointer',
          transition:      'border-color 150ms ease, background-color 150ms ease',
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.map((tag) => (
            <span key={tag} data-testid="project-tag" style={pill}>{tag}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '2px' }}>
          {project.github  && <span style={{ ...linkBtn, color: colors.textMuted }}>GITHUB</span>}
          {project.demo    && <span style={{ ...linkBtn, color: colors.textMuted }}>DEMO</span>}
          {images.length > 0 && <span style={{ ...linkBtn, color: colors.textMuted }}>PREVIEW</span>}
        </div>
      </div>

      {/* ── Modal ── */}
      {open && (
        <div
          style={{
            position:        'fixed',
            inset:           0,
            zIndex:          100,
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            padding:         '16px',
          }}
        >
          {/* backdrop */}
          <div
            onClick={() => setOpen(false)}
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)' }}
          />

          {/* content */}
          <div
            style={{
              position:        'relative',
              backgroundColor: colors.surface,
              border:          `1px solid ${colors.rule}`,
              width:           '100%',
              maxWidth:        '520px',
              maxHeight:       '85vh',
              overflowY:       'auto',
              padding:         '28px 24px',
              display:         'flex',
              flexDirection:   'column',
              gap:             '16px',
            }}
          >
            {/* close */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position:   'absolute',
                top:        '16px',
                right:      '16px',
                background: 'none',
                border:     'none',
                cursor:     'pointer',
                fontFamily: 'var(--font-pixelify-sans)',
                fontSize:   '14px',
                color:      colors.textMuted,
              }}
            >
              ✕
            </button>

            <h3
              style={{
                fontFamily: 'var(--font-pixelify-sans)',
                fontSize:   fontSizes.name,
                fontWeight: 700,
                color:      colors.text,
                paddingRight: '24px',
              }}
            >
              {project.title}
            </h3>

            <p style={{ fontSize: '13px', color: colors.textMuted, lineHeight: 1.6 }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.tags.map((tag) => (
                <span key={tag} data-testid="project-tag" style={pill}>{tag}</span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="project-github-link"
                  style={{ ...linkBtn, color: colors.text }}
                >
                  GITHUB
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="project-demo-link"
                  style={{ ...linkBtn, color: colors.textMuted }}
                >
                  DEMO
                </a>
              )}
            </div>

            {/* Carousel */}
            {images.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {images.length > 1 && (
                    <button onClick={prev} style={{ ...linkBtn, color: colors.textMuted, fontSize: '20px' }}>‹</button>
                  )}
                  <img
                    src={images[activeIdx]}
                    alt={`${project.title} screenshot ${activeIdx + 1}`}
                    style={{ height: '320px', width: 'auto', borderRadius: '12px', border: `1px solid ${colors.rule}` }}
                  />
                  {images.length > 1 && (
                    <button onClick={next} style={{ ...linkBtn, color: colors.textMuted, fontSize: '20px' }}>›</button>
                  )}
                </div>
                {images.length > 1 && (
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        style={{
                          width:           '6px',
                          height:          '6px',
                          borderRadius:    '50%',
                          border:          'none',
                          cursor:          'pointer',
                          padding:         0,
                          backgroundColor: i === activeIdx ? colors.text : colors.rule,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
