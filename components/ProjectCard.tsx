'use client';

import { useState } from 'react';
import { colors, fontSizes } from '../lib/tokens';
import type { Project } from '../data/projects';

const linkStyle = {
  fontFamily: 'var(--font-pixelify-sans)',
  fontSize: fontSizes.label,
  letterSpacing: '0.1em',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
} as const;

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const images = project.images ?? [];
  const hasLinks = project.github || project.demo || images.length > 0;

  function prev() {
    setActiveIdx((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setActiveIdx((i) => (i + 1) % images.length);
  }

  return (
    <div
      data-testid="project-card"
      style={{
        border: `1px solid ${colors.rule}`,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-pixelify-sans)',
          fontSize: fontSizes.name,
          fontWeight: 700,
          color: colors.text,
        }}
      >
        {project.title}
      </h3>
      <p style={{ fontSize: '13px', color: colors.textMuted, lineHeight: 1.5 }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            data-testid="project-tag"
            style={{
              fontFamily: 'var(--font-pixelify-sans)',
              fontSize: fontSizes.label,
              letterSpacing: '0.1em',
              color: colors.textMuted,
              border: `1px solid ${colors.rule}`,
              padding: '2px 8px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {hasLinks && (
        <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="project-github-link"
              style={{ ...linkStyle, color: colors.text }}
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
              style={{ ...linkStyle, color: colors.textMuted }}
            >
              DEMO
            </a>
          )}
          {images.length > 0 && (
            <button
              data-testid="project-preview-toggle"
              onClick={() => { setShowCarousel((v) => !v); setActiveIdx(0); }}
              style={{ ...linkStyle, color: colors.textMuted }}
            >
              {showCarousel ? 'HIDE' : 'PREVIEW'}
            </button>
          )}
        </div>
      )}

      {showCarousel && images.length > 0 && (
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
            {images.length > 1 && (
              <button
                onClick={prev}
                style={{ ...linkStyle, color: colors.textMuted, fontSize: '16px' }}
              >
                ‹
              </button>
            )}
            <img
              src={images[activeIdx]}
              alt={`${project.title} screenshot ${activeIdx + 1}`}
              style={{
                height: '340px',
                width: 'auto',
                borderRadius: '14px',
                border: `1px solid ${colors.rule}`,
              }}
            />
            {images.length > 1 && (
              <button
                onClick={next}
                style={{ ...linkStyle, color: colors.textMuted, fontSize: '16px' }}
              >
                ›
              </button>
            )}
          </div>
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '6px' }}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    backgroundColor: i === activeIdx ? colors.text : colors.rule,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
