'use client';

import { motion } from 'framer-motion';
import { colors, fontSizes, animation } from '../lib/tokens';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      data-testid="projects-section"
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
        PROJECTS
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
