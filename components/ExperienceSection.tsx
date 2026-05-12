'use client';

import { motion } from 'framer-motion';
import { colors, fontSizes, animation } from '../lib/tokens';
import { experiences } from '../data/profile';

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      data-testid="experience-section"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animation.fadeInDuration, ease: 'easeOut' }}
      style={{
        padding: '64px 32px',
        maxWidth: '640px',
        margin: '0 auto',
        borderTop: `1px solid ${colors.rule}`,
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-pixelify-sans)',
          fontSize: fontSizes.name,
          fontWeight: 700,
          color: colors.text,
          marginBottom: '32px',
        }}
      >
        EXPERIENCE
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.role}`} data-testid="experience-item">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '4px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-pixelify-sans)',
                  fontSize: fontSizes.subtitle,
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: colors.text,
                }}
              >
                {exp.company}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-pixelify-sans)',
                  fontSize: fontSizes.label,
                  letterSpacing: '0.1em',
                  color: colors.textMuted,
                }}
              >
                {exp.period}
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-pixelify-sans)',
                fontSize: fontSizes.label,
                letterSpacing: '0.1em',
                color: colors.textMuted,
                marginBottom: '12px',
              }}
            >
              {exp.role}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {exp.bullets.map((bullet) => (
                <li
                  key={bullet}
                  style={{
                    fontSize: '13px',
                    color: colors.textMuted,
                    paddingLeft: '12px',
                    borderLeft: `2px solid ${colors.rule}`,
                  }}
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
