'use client';

import { motion } from 'framer-motion';
import { PortfolioNav, NAV_HEIGHT_PX } from '../components/PortfolioNav';
import { BioSection } from '../components/BioSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';
import { colors, animation } from '../lib/tokens';

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: animation.transitionDuration / 1000, ease: 'easeInOut' }}
    >
      <PortfolioNav />
      <main
        style={{
          backgroundColor: colors.background,
          minHeight: '100vh',
          paddingTop: `${NAV_HEIGHT_PX}px`,
        }}
      >
        <BioSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </motion.div>
  );
}
