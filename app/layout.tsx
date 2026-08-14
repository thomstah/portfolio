import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Body / labels — Redaction grade 50 (lighter ink).
const redaction = localFont({
  src: [
    { path: './fonts/Redaction_50-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Redaction_50-Italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/Redaction_50-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-redaction',
  display: 'swap',
});

// Display headings — Redaction grade 70 (heavier ink, more contrast).
const redactionDisplay = localFont({
  src: [
    { path: './fonts/Redaction_70-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Redaction_70-Italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/Redaction_70-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-redaction-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thommy Xay — Portfolio',
  description: 'Software engineering portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${redaction.variable} ${redactionDisplay.variable} font-redaction`}>
        {children}
      </body>
    </html>
  );
}
