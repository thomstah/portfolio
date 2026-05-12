import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactSection } from './ContactSection';

vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, initial, whileInView, viewport, transition, ...props }: any) =>
      <section {...props}>{children}</section>,
  },
}));

describe('ContactSection', () => {
  it('renders the CONTACT heading', () => {
    render(<ContactSection />);
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
  });

  it('renders the email link', () => {
    render(<ContactSection />);
    expect(screen.getByTestId('contact-email')).toBeInTheDocument();
  });

  it('renders the github link', () => {
    render(<ContactSection />);
    expect(screen.getByTestId('contact-github-link')).toBeInTheDocument();
  });

  it('renders the linkedin link', () => {
    render(<ContactSection />);
    expect(screen.getByTestId('contact-linkedin-link')).toBeInTheDocument();
  });
});
