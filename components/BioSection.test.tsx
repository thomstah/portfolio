import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BioSection } from './BioSection';

vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, initial, whileInView, viewport, transition, ...props }: any) =>
      <section {...props}>{children}</section>,
  },
}));

describe('BioSection', () => {
  it('renders the name', () => {
    render(<BioSection />);
    expect(screen.getByText('Thommy Xay')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<BioSection />);
    expect(screen.getByText('SOFTWARE ENGINEERING STUDENT · UTA · DFW')).toBeInTheDocument();
  });

  it('renders the github link', () => {
    render(<BioSection />);
    expect(screen.getByTestId('bio-github-link')).toBeInTheDocument();
  });

  it('renders the linkedin link', () => {
    render(<BioSection />);
    expect(screen.getByTestId('bio-linkedin-link')).toBeInTheDocument();
  });
});
