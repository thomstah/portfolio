import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceSection } from './ExperienceSection';
import { leadership } from '../data/profile';

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
    expect(screen.getAllByText('CVS Health').length).toBeGreaterThan(0);
  });

  it('renders the organization name once per org, not once per role', () => {
    render(<ExperienceSection />);
    expect(screen.getAllByTestId('leadership-org')).toHaveLength(leadership.length);
    leadership.forEach((org) => {
      expect(screen.getAllByText(org.name)).toHaveLength(1);
    });
  });

  it('renders every leadership role as a timeline entry', () => {
    render(<ExperienceSection />);
    const totalRoles = leadership.reduce((n, org) => n + org.roles.length, 0);
    expect(screen.getAllByTestId('leadership-item')).toHaveLength(totalRoles);
    leadership.forEach((org) =>
      org.roles.forEach((entry) => {
        expect(screen.getByText(entry.role)).toBeInTheDocument();
        expect(screen.getByText(entry.period)).toBeInTheDocument();
      }),
    );
  });
});
