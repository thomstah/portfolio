export interface Project {
  title: string;
  description: string;
  tags: string[];
  images?: string[];
  github?: string;
  demo?: string;
  accentColor?: string;
}

export const projects: Project[] = [
  {
    title: 'Resume Studio',
    description:
      "A local workbench that replaces the chat-plus-Overleaf round trip for tailoring my resume. Paste a posting and it reports the fit before writing anything, flagging hard blockers like a two-year experience minimum instead of quietly tailoring around them. Then it rewrites from the master, compiles with Tectonic, reads what actually spilled onto page two, and trims until it fits. Every version is a real folder holding its .tex, the posting and the PDF; SQLite is only an index, so deleting it rebuilds from disk. After each pass it checks its own output against the master for invented claims and reports which measured outcomes fell off the page.",
    tags: ['Next.js', 'TypeScript', 'Anthropic Claude', 'SQLite', 'LaTeX', 'Tectonic', 'CodeMirror'],
    images: ['/projects/resume-studio-fit-report.png', '/projects/resume-studio-library.png'],
    github: 'https://github.com/thomstah/resume-studio',
    accentColor: '#c0392b',
  },
  {
    title: 'DayNote',
    description: 'BeReal-inspired iOS journaling app with daily streak tracking, Core Data persistence, and push notification reminders. Submitted to the Swift Student Challenge. Supports 500+ entries with <100ms save/load times.',
    tags: ['Swift', 'SwiftUI', 'Core Data', 'UserDefaults', 'RESTful API'],
    images: ['/projects/daynote-home.png', '/projects/daynote-history.png'],
    github: 'https://github.com/thomstah/DayNote',
  },
  {
    title: 'Lyriq',
    description: "A solo full-stack AI platform that unpacks the meaning behind songs. Built with Claude Code and Claude's tool-use mode to enforce structured JSON across 18 backend modules — all covered by 142 fast, offline pytest tests. FastAPI background tasks cut cached loads from 1–3s to ~100ms, with a per-IP rate limiter guarding a $20/mo API budget.",
    tags: ['Next.js', 'FastAPI', 'Python', 'Anthropic Claude', 'Supabase'],
    accentColor: '#f59e0b',
  },
  {
    title: 'MavBeats',
    description: 'Web platform revealing campus music trends at UTA — real-time genre insights and Top 10 charts. Grew to 900+ students using Spotify auth, Supabase, and Recharts for interactive data visualizations.',
    tags: ['JavaScript', 'React', 'Next.js', 'Node.js', 'Spotify API', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/tancaotrannn/CSE3311',
    demo: 'https://mavbeats.vercel.app',
  },
  {
    title: 'FromMySilence',
    description: 'A digital wall for unspoken thoughts — inspired by The Unsent Project. Users anonymously post messages to named recipients that were never sent. Built with real-time Supabase sync and a clean, distraction-free interface.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Supabase', 'Vite'],
    github: 'https://github.com/thomstah/frommysilence',
    demo: 'https://thomstah.github.io/FromMySilence',
    accentColor: '#a78bfa',
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
