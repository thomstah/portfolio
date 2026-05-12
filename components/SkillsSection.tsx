'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, fontSizes, animation } from '../lib/tokens';
import { skills } from '../data/profile';

const HOVER_COLORS = [
  '#93c5fd',
  '#86efac',
  '#c4b5fd',
  '#fdba74',
  '#f9a8d4',
  '#fde047',
  '#5eead4',
  '#fca5a5',
  '#a5b4fc',
  '#6ee7b7',
];

export function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        {skills.map((skill, i) => {
          const hoverColor = HOVER_COLORS[i % HOVER_COLORS.length];
          const isHovered = hoveredIndex === i;
          return (
            <span
              key={skill}
              data-testid="skill-tag"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                fontFamily: 'var(--font-pixelify-sans)',
                fontSize: fontSizes.label,
                letterSpacing: '0.1em',
                color: isHovered ? hoverColor : colors.textMuted,
                border: `1px solid ${isHovered ? hoverColor : colors.rule}`,
                padding: '4px 10px',
                cursor: 'default',
                transition: 'color 150ms ease, border-color 150ms ease',
              }}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </motion.section>
  );
}
