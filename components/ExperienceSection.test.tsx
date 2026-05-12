import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceSection } from './ExperienceSection';

vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, initial, whileInView, viewport, transition, ...props }: any) =>
      <section {...props}>{children}</section>,
  },
}));

describe('ExperienceSection', () => {
  it('renders the section heading', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('EXPERIENCE')).toBeInTheDocument();
  });

  it('renders at least one experience item', () => {
    render(<ExperienceSection />);
    expect(screen.getAllByTestId('experience-item').length).toBeGreaterThan(0);
  });

  it('renders CVS Health', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('CVS Health')).toBeInTheDocument();
  });
});
