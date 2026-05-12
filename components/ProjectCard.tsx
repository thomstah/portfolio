import { colors, fontSizes } from '../lib/tokens';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
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
      {(project.github || project.demo) && (
        <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="project-github-link"
              style={{
                fontFamily: 'var(--font-pixelify-sans)',
                fontSize: fontSizes.label,
                letterSpacing: '0.1em',
                color: colors.text,
                textDecoration: 'none',
              }}
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
              style={{
                fontFamily: 'var(--font-pixelify-sans)',
                fontSize: fontSizes.label,
                letterSpacing: '0.1em',
                color: colors.textMuted,
                textDecoration: 'none',
              }}
            >
              DEMO
            </a>
          )}
        </div>
      )}
    </div>
  );
}
