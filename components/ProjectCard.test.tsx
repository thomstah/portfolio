import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../data/projects';

const baseProject: Project = {
  title: 'Test Project',
  description: 'A test description.',
  tags: ['TypeScript', 'React'],
};

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getAllByText('Test Project').length).toBeGreaterThan(0);
  });

  it('renders the project description', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText('A test description.')).toBeInTheDocument();
  });

  it('renders all tags', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
  });

  it('omits github link when not provided', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.queryByTestId('project-github-link')).not.toBeInTheDocument();
  });

  it('omits demo link when not provided', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.queryByTestId('project-demo-link')).not.toBeInTheDocument();
  });

  it('renders github link when provided', () => {
    const project = { ...baseProject, github: 'https://github.com/thomstah/test' };
    render(<ProjectCard project={project} />);
    expect(screen.getByTestId('project-github-link')).toBeInTheDocument();
  });

  it('renders demo link when provided', () => {
    const project = { ...baseProject, demo: 'https://example.com' };
    render(<ProjectCard project={project} />);
    expect(screen.getByTestId('project-demo-link')).toBeInTheDocument();
  });
});
