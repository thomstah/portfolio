export const profile = {
  name: 'Thommy Xay',
  title: 'SOFTWARE ENGINEERING STUDENT · UTA · DFW',
  bio: "Rising senior undergraduate studying software engineering at UT Arlington.\nFull-stack developer with a strong suit in front-end.",
  funFacts: [
    'Photography enthusiast',
    'Lifts regularly',
    'Tennis player',
    'Hobby hopper — currently exploring content creation',
    'Building an iOS journaling app inspired by BeReal',
  ],
  github: 'https://github.com/thomstah',
  linkedin: 'https://www.linkedin.com/in/thommyxay/',
  email: 'thommyxay@gmail.com',
} as const;

export const skills: string[] = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Vue',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'Flask',
  'SwiftUI',
  'Python',
  'Java',
  'C / C++',
  'HTML / CSS',
  'SQL',
  'PostgreSQL',
  'Supabase',
  'REST APIs',
  'WebSocket',
  'Google Cloud Platform',
  'Swift',
  'Git',
  'Agile',
  'CI/CD',
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: 'CVS Health',
    role: 'Break Through Tech Sprinternship',
    period: '2025 – May 2026',
    bullets: [
      'Selected for CVS Health\'s Break Through Tech sprinternship, a competitive program for underrepresented students in tech.',
      'Collaborated with a team to design and build a software solution addressing a real business challenge.',
      'Gained hands-on industry experience working alongside CVS Health engineers and mentors.',
    ],
  },
  {
    company: 'Open Ledger',
    role: 'Front-end Developer',
    period: 'Feb. 2026 – Present',
    bullets: [
      'Built a point-of-sale web application for small businesses to register inventory, browse categorized menus, and process orders through an interactive order board.',
      'Designed and implemented the front-end in React and TypeScript using TanStack Query — including a category-filtered product grid, real-time quantity badge updates, and a customer order panel.',
      'Delivered the client-side interface that transforms a backend API into a usable product, enabling merchants to manage items and submit orders without touching a database.',
    ],
  },
  {
    company: 'Yichi Prediction Market Platform',
    role: 'Software Engineer',
    period: 'Feb. 2026 – April 2026',
    bullets: [
      'Developed authentication, dashboard, leaderboard, and navigation system for a city-wide prediction market platform enabling UTA students and Arlington residents to bet on local and campus events.',
      'Built features using Next.js 16, React 19, TypeScript, and Supabase; implemented secure login/register with MFA, real-time dashboard with SVG portfolio charts, auto-refreshing leaderboard, and responsive navigation.',
      'Delivered core interface enabling users to track betting positions, monitor rankings, and navigate between Arlington-wide and UTA-specific prediction markets.',
    ],
  },
  {
    company: 'Society of Asian Scientists and Engineers (SASE) — UTA',
    role: 'Vice President External',
    period: 'May 2025 – Present',
    bullets: [
      'Leading external relations and partnerships for one of the nation\'s top SASE chapters.',
    ],
  },
  {
    company: 'Society of Asian Scientists and Engineers (SASE) — UTA',
    role: 'Event Chair',
    period: 'May 2024 – May 2025',
    bullets: [
      'Helped secure the organization\'s Most Influential Chapter award out of 110+ chapters nationwide.',
    ],
  },
];
