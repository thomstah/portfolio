export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Personal Site',
    description: 'Pixel-art personal hub built with Next.js, Turborepo, and a custom LPC spritesheet character.',
    tags: ['TypeScript', 'Next.js', 'React'],
    github: 'https://github.com/thomstah/personal-site',
    demo: 'https://thommyxay.com',
  },
];
