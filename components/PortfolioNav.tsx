import { colors, fontSizes } from '../lib/tokens';

const SECTIONS = [
  { label: 'BIO',        href: '#bio' },
  { label: 'SKILLS',     href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS',   href: '#projects' },
  { label: 'CONTACT',    href: '#contact' },
] as const;

export const NAV_HEIGHT_PX = 48;

export function PortfolioNav() {
  return (
    <nav
      data-testid="portfolio-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: `${NAV_HEIGHT_PX}px`,
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.rule}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        zIndex: 10,
      }}
    >
      <a
        href="https://thommyxay.com"
        data-testid="nav-hub-link"
        style={{
          fontFamily: 'var(--font-pixelify-sans)',
          fontSize: fontSizes.label,
          letterSpacing: '0.1em',
          color: colors.textMuted,
          textDecoration: 'none',
        }}
      >
        ← HUB
      </a>
      <div style={{ display: 'flex', gap: '24px' }}>
        {SECTIONS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            data-testid={`nav-link-${label.toLowerCase()}`}
            style={{
              fontFamily: 'var(--font-pixelify-sans)',
              fontSize: fontSizes.label,
              letterSpacing: '0.15em',
              color: colors.textMuted,
              textDecoration: 'none',
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
