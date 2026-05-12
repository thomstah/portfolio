import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PortfolioNav } from './PortfolioNav';

describe('PortfolioNav', () => {
  it('renders the hub back-link', () => {
    render(<PortfolioNav />);
    expect(screen.getByTestId('nav-hub-link')).toBeInTheDocument();
  });

  it('renders the bio section link', () => {
    render(<PortfolioNav />);
    expect(screen.getByTestId('nav-link-bio')).toBeInTheDocument();
  });

  it('renders the skills section link', () => {
    render(<PortfolioNav />);
    expect(screen.getByTestId('nav-link-skills')).toBeInTheDocument();
  });

  it('renders the experience section link', () => {
    render(<PortfolioNav />);
    expect(screen.getByTestId('nav-link-experience')).toBeInTheDocument();
  });

  it('renders the projects section link', () => {
    render(<PortfolioNav />);
    expect(screen.getByTestId('nav-link-projects')).toBeInTheDocument();
  });

  it('renders the contact section link', () => {
    render(<PortfolioNav />);
    expect(screen.getByTestId('nav-link-contact')).toBeInTheDocument();
  });
});
