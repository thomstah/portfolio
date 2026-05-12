import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillsSection } from './SkillsSection';

vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, initial, whileInView, viewport, transition, ...props }: any) =>
      <section {...props}>{children}</section>,
  },
}));

describe('SkillsSection', () => {
  it('renders the SKILLS heading', () => {
    render(<SkillsSection />);
    expect(screen.getByText('SKILLS')).toBeInTheDocument();
  });

  it('renders at least one skill tag', () => {
    render(<SkillsSection />);
    expect(screen.getAllByTestId('skill-tag').length).toBeGreaterThan(0);
  });

  it('renders TypeScript as a skill', () => {
    render(<SkillsSection />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});
