import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        redaction: ['var(--font-redaction)', 'Georgia', 'serif'],
        'redaction-display': ['var(--font-redaction-display)', 'var(--font-redaction)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
