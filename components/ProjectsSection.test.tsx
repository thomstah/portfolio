import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectsSection } from './ProjectsSection';

vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, initial, whileInView, viewport, transition, ...props }: any) =>
      <section {...props}>{children}</section>,
  },
}));

describe('ProjectsSection', () => {
  it('renders the PROJECTS heading', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();
  });

  it('renders a card for each project in the data file', () => {
    render(<ProjectsSection />);
    expect(screen.getAllByTestId('project-card').length).toBeGreaterThan(0);
  });
});
