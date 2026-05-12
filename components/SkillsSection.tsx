'use client';

import { motion } from 'framer-motion';
import { colors, fontSizes, animation } from '../lib/tokens';
import { skills } from '../data/profile';

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      data-testid="skills-section"
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
          marginBottom: '24px',
        }}
      >
        SKILLS
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {skills.map((skill) => (
          <span
            key={skill}
            data-testid="skill-tag"
            style={{
              fontFamily: 'var(--font-pixelify-sans)',
              fontSize: fontSizes.label,
              letterSpacing: '0.1em',
              color: colors.textMuted,
              border: `1px solid ${colors.rule}`,
              padding: '4px 10px',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
