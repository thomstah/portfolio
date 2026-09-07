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

  /**
   * Screenshots are sized by height, which suits portrait phone captures. A
   * wide desktop capture at the same height overflows the card unless width is
   * constrained, which is what this guards.
   */
  it('keeps a screenshot inside the card whatever its aspect ratio', () => {
    render(
      <ProjectCard project={{ ...baseProject, images: ['/projects/wide.png'] }} />,
    );
    fireEvent.click(screen.getAllByText('PREVIEW')[0]);

    const image = screen.getAllByTestId('project-screenshot')[0];
    expect(image).toHaveStyle({ maxWidth: '100%' });
    expect(image).toHaveStyle({ maxHeight: '300px' });
    // Both dimensions must be free to shrink, or the frame letterboxes.
    expect(image).toHaveStyle({ height: 'auto' });
    expect(image).toHaveStyle({ width: 'auto' });
  });

  it('opens the full-size viewer when a screenshot is clicked', () => {
    render(
      <ProjectCard project={{ ...baseProject, images: ['/projects/a.png', '/projects/b.png'] }} />,
    );
    fireEvent.click(screen.getAllByText('PREVIEW')[0]);
    expect(screen.queryByTestId('lightbox')).not.toBeInTheDocument();

    fireEvent.click(screen.getAllByTestId('project-screenshot')[0]);

    expect(screen.getByTestId('lightbox')).toBeInTheDocument();
    // Sized against the viewport, not the card, which is the whole point.
    expect(screen.getByTestId('lightbox-image')).toHaveStyle({ maxHeight: '82vh' });
  });

  it('closes the viewer on Escape', () => {
    render(
      <ProjectCard project={{ ...baseProject, images: ['/projects/a.png'] }} />,
    );
    fireEvent.click(screen.getAllByText('PREVIEW')[0]);
    fireEvent.click(screen.getAllByTestId('project-screenshot')[0]);

    fireEvent.keyDown(window, { key: 'Escape' });

    expect(screen.queryByTestId('lightbox')).not.toBeInTheDocument();
  });

  it('pages through screenshots in the viewer with the arrow keys', () => {
    render(
      <ProjectCard project={{ ...baseProject, images: ['/projects/a.png', '/projects/b.png'] }} />,
    );
    fireEvent.click(screen.getAllByText('PREVIEW')[0]);
    fireEvent.click(screen.getAllByTestId('project-screenshot')[0]);

    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', '/projects/a.png');
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', '/projects/b.png');
  });

  it('restores page scrolling after the viewer closes', () => {
    render(
      <ProjectCard project={{ ...baseProject, images: ['/projects/a.png'] }} />,
    );
    fireEvent.click(screen.getAllByText('PREVIEW')[0]);
    fireEvent.click(screen.getAllByTestId('project-screenshot')[0]);
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.keyDown(window, { key: 'Escape' });

    expect(document.body.style.overflow).not.toBe('hidden');
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
