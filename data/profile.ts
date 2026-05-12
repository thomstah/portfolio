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
  'Python',
  'Java',
  'C / C++',
  'SQL',
  'PostgreSQL',
  'Supabase',
  'REST APIs',
  'Google Cloud Platform',
  'Swift',
  'Git',
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
    period: '2024',
    bullets: [
      'Selected for CVS Health\'s Break Through Tech sprinternship, a competitive program for underrepresented students in tech',
      'Collaborated with a team to design and build a software solution addressing a real business challenge',
      'Gained hands-on industry experience working alongside CVS Health engineers and mentors',
    ],
  },
];
