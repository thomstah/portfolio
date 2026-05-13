'use client';

import { useState } from 'react';
import { colors, fontSizes } from '../lib/tokens';

const SECTIONS = [
  { label: 'BIO',        href: '#bio' },
  { label: 'SKILLS',     href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS',   href: '#projects' },
  { label: 'CONTACT',    href: '#contact' },
] as const;

export const NAV_HEIGHT_PX = 48;

const linkStyle = {
  fontFamily: 'var(--font-pixelify-sans)',
  fontSize: fontSizes.label,
  letterSpacing: '0.15em',
  color: colors.textMuted,
  textDecoration: 'none',
} as const;

export function PortfolioNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        data-testid="portfolio-nav"
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          right:           0,
          height:          `${NAV_HEIGHT_PX}px`,
          backgroundColor: colors.background,
          borderBottom:    `1px solid ${colors.rule}`,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          padding:         '0 24px',
          zIndex:          50,
        }}
      >
        <a href="https://thommyxay.com" data-testid="nav-hub-link" style={linkStyle}>
          ← HUB
        </a>

        {/* Desktop links */}
        <div className="desktop-only" style={{ gap: '24px' }}>
          {SECTIONS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              data-testid={`nav-link-${label.toLowerCase()}`}
              style={linkStyle}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="mobile-only"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          style={{
            background: 'none',
            border:     'none',
            cursor:     'pointer',
            display:    'flex',
            flexDirection: 'column',
            gap:        '5px',
            padding:    '4px',
          }}
        >
          {open ? (
            <span style={{ fontFamily: 'var(--font-pixelify-sans)', fontSize: '14px', color: colors.textMuted }}>✕</span>
          ) : (
            <>
              <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: colors.textMuted }} />
              <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: colors.textMuted }} />
              <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: colors.textMuted }} />
            </>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            position:        'fixed',
            top:             NAV_HEIGHT_PX,
            left:            0,
            right:           0,
            backgroundColor: colors.background,
            borderBottom:    `1px solid ${colors.rule}`,
            display:         'flex',
            flexDirection:   'column',
            zIndex:          49,
          }}
        >
          {SECTIONS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              data-testid={`nav-link-${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                ...linkStyle,
                padding:     '16px 24px',
                borderBottom: `1px solid ${colors.rule}`,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
