import type { Metadata } from 'next';
import { Silkscreen } from 'next/font/google';
import './globals.css';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pixelify-sans',
});

export const metadata: Metadata = {
  title: 'Thommy Xay — Portfolio',
  description: 'Software engineering portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${silkscreen.variable} font-pixel`}>
        {children}
      </body>
    </html>
  );
}
