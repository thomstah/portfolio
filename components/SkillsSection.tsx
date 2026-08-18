'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, fontSizes, animation } from '../lib/tokens';
import { skillCategories } from '../data/profile';

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
          fontFamily: 'var(--font-redaction-display)',
          fontSize: fontSizes.name,
          fontWeight: 700,
          letterSpacing: '0.02em',
          color: colors.text,
          marginBottom: '32px',
        }}
      >
        SKILLS
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {skillCategories.map((category) => (
          <div key={category.name} data-testid="skill-category">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-redaction)',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: colors.textSubtle,
                  whiteSpace: 'nowrap',
                }}
              >
                {category.name}
              </span>
              <span style={{ flex: 1, height: '1px', background: colors.rule }} />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.items.map((skill) => {
                const isHovered = hoveredSkill === skill;
                return (
                  <span
                    key={skill}
                    data-testid="skill-tag"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{
                      fontFamily: 'var(--font-redaction)',
                      fontSize: fontSizes.label,
                      letterSpacing: '0.01em',
                      color: isHovered ? category.accent : colors.textMuted,
                      border: `1px solid ${isHovered ? category.accent : colors.rule}`,
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
          </div>
        ))}
      </div>
    </motion.section>
  );
}
