'use client';

import { motion } from 'framer-motion';
import { colors, fontSizes, animation } from '../lib/tokens';
import { experiences, leadership, type Experience } from '../data/profile';

function SectionHeading({ children, first }: { children: React.ReactNode; first?: boolean }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-redaction-display)',
        fontSize: fontSizes.name,
        fontWeight: 700,
        letterSpacing: '0.02em',
        color: colors.text,
        marginBottom: '32px',
        ...(first
          ? {}
          : { marginTop: '64px', paddingTop: '64px', borderTop: `1px solid ${colors.rule}` }),
      }}
    >
      {children}
    </h2>
  );
}

function Entry({ exp, testid }: { exp: Experience; testid: string }) {
  return (
    <div data-testid={testid}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '16px',
          marginBottom: '4px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-redaction)',
            fontSize: fontSizes.subtitle,
            fontWeight: 700,
            letterSpacing: '0.01em',
            color: colors.text,
          }}
        >
          {exp.company}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-redaction)',
            fontSize: fontSizes.label,
            letterSpacing: '0.02em',
            color: colors.textMuted,
            whiteSpace: 'nowrap',
          }}
        >
          {exp.period}
        </span>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-redaction)',
          fontStyle: 'italic',
          fontSize: fontSizes.label,
          color: colors.textMuted,
          marginBottom: '14px',
        }}
      >
        {exp.role}
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {exp.bullets.map((bullet) => (
          <li
            key={bullet}
            style={{
              fontSize: '14px',
              lineHeight: 1.6,
              color: colors.textMuted,
              paddingLeft: '14px',
              borderLeft: `2px solid ${colors.rule}`,
            }}
          >
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

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
      <SectionHeading first>EXPERIENCE</SectionHeading>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {experiences.map((exp) => (
          <Entry key={`${exp.company}-${exp.role}`} exp={exp} testid="experience-item" />
        ))}
      </div>

      <SectionHeading>LEADERSHIP</SectionHeading>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {leadership.map((exp) => (
          <Entry key={`${exp.company}-${exp.role}`} exp={exp} testid="leadership-item" />
        ))}
      </div>
    </motion.section>
  );
}
