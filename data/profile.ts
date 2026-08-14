export const profile = {
  name: 'Thommy Xay',
  title: 'SOFTWARE ENGINEERING STUDENT · AI + FULL-STACK',
  bio: "I'm a software engineering student at UT Arlington (Class of 2027), based in the Dallas–Fort Worth area.\nI recently spent a summer building agentic AI systems as an AI/ML engineering intern at CVS Health, and I spend most of my time shipping fast, thoughtful full-stack web apps.\nMostly I just like taking complicated systems and making them feel simple.",
  status: 'Building an AI project',
  funFacts: [
    'Photographer',
    'Gym "rat"',
    'Occasional racquet sport enjoyer',
    'Hobby hopper — currently into firearms',
  ],
  github: 'https://github.com/thomstah',
  linkedin: 'https://www.linkedin.com/in/thommyxay/',
  email: 'thommyxay@gmail.com',
} as const;

export const skills: string[] = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Swift',
  'Java',
  'C / C++',
  'SQL',
  'HTML / CSS',
  'React',
  'Next.js',
  'Vue',
  'Node.js',
  'Express',
  'FastAPI',
  'Flask',
  'SwiftUI',
  'Tailwind CSS',
  'Anthropic Claude',
  'LLM Integration',
  'RAG & Retrieval',
  'Multi-Agent Orchestration',
  'Google ADK',
  'Vertex AI',
  'PostgreSQL',
  'Supabase',
  'REST APIs',
  'WebSocket',
  'Docker',
  'Google Cloud Platform',
  'CI/CD',
  'Git',
  'Jira',
  'Agile',
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
    role: 'AI/ML Engineering Intern · Pipeline Reliability',
    period: 'May – Jun 2026',
    bullets: [
      'Built an internal AI system that automatically diagnoses why data pipelines fail, taking triage from something that took over an hour down to under a minute.',
      'Designed it around a human-in-the-loop safety model, so an engineer always reviews and approves any action before it runs — the system never changes production on its own.',
    ],
  },
  {
    company: 'CVS Health',
    role: 'AI/ML Engineering Intern · Conversational AI Tooling',
    period: 'Jun – Aug 2026',
    bullets: [
      'Helped replace manual, form-based internal workflows with a conversational AI agent connected to internal data tools.',
      'Established reusable patterns and testing practices for safely integrating large language models with internal systems, which the team adopted as a template for future work.',
    ],
  },
  {
    company: 'Open Ledger',
    role: 'Front-end Developer',
    period: 'Feb. 2026 – Present',
    bullets: [
      'Sped up checkout for 10+ small-business merchants by building a category-filtered product grid and a live order board in React and TypeScript — cutting the steps to place an order by 75%.',
      'Wired up TanStack Query for server-state sync, so cart quantities and badges update in real time without the usual prop-drilling or manual state juggling.',
      'Wrapped a raw backend API in a friendly interface, letting non-technical merchants manage inventory and take orders without ever touching a database.',
    ],
  },
  {
    company: 'Yichi Prediction Market Platform',
    role: 'Software Engineer',
    period: 'Feb. 2026 – April 2026',
    bullets: [
      'Built the authentication, dashboard, leaderboard, and navigation for a city-wide prediction market where UTA students and Arlington residents bet on local and campus events.',
      'Used Next.js, React, TypeScript, and Supabase to ship secure login/register with MFA, a live dashboard with SVG portfolio charts, an auto-refreshing leaderboard, and responsive navigation.',
      'Delivered the core interface that lets users track their positions, watch the rankings, and move between the Arlington-wide and UTA-specific markets.',
    ],
  },
];

export const leadership: Experience[] = [
  {
    company: 'Society of Asian Scientists and Engineers (SASE) — UTA',
    role: 'Historian',
    period: 'May 2026 – Present',
    bullets: [
      "Documenting and preserving the chapter’s history, events, and milestones for one of the nation’s top SASE chapters.",
    ],
  },
  {
    company: 'Society of Asian Scientists and Engineers (SASE) — UTA',
    role: 'Vice President External',
    period: 'May 2025 – May 2026',
    bullets: [
      "Led external relations and partnerships for one of the nation’s top SASE chapters.",
    ],
  },
  {
    company: 'Society of Asian Scientists and Engineers (SASE) — UTA',
    role: 'Event Chair',
    period: 'May 2024 – May 2025',
    bullets: [
      "Helped secure the organization’s Most Influential Chapter award, out of 110+ chapters nationwide.",
    ],
  },
];
