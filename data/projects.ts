export interface Project {
  title: string;
  description: string;
  tags: string[];
  images?: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'DayNote',
    description: 'BeReal-inspired iOS journaling app with daily streak tracking, Core Data persistence, and push notification reminders. Submitted to the Swift Student Challenge. Supports 500+ entries with <100ms save/load times.',
    tags: ['Swift', 'SwiftUI', 'Core Data', 'UserDefaults', 'RESTful API'],
    images: ['/projects/daynote-home.png', '/projects/daynote-history.png'],
    github: 'https://github.com/thomstah/DayNote',
  },
  {
    title: 'MavBeats',
    description: 'Web platform revealing campus music trends at UTA — real-time genre insights and Top 10 charts. Grew to 900+ students using Spotify auth, Supabase, and Recharts for interactive data visualizations.',
    tags: ['JavaScript', 'React', 'Next.js', 'Node.js', 'Spotify API', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/tancaotrannn/CSE3311',
    demo: 'https://mavbeats.vercel.app',
  },
  {
    title: 'Purr4Furr',
    description: 'Mobile dating app for the furry community built at STEM Connect Hackathon Fall 2025. Features swipe-based discovery, intelligent matching, real-time messaging, and fursona-based identity profiles.',
    tags: ['TypeScript', 'React Native', 'Expo', 'Supabase', 'SQL'],
    demo: 'https://devpost.com/software/purr4furr',
  },
  {
    title: 'Personal Site',
    description: 'Pixel-art personal hub built with Next.js, Turborepo, and a custom LPC spritesheet character.',
    tags: ['TypeScript', 'Next.js', 'React'],
    github: 'https://github.com/thomstah/personal-site',
    demo: 'https://thommyxay.com',
  },
];
