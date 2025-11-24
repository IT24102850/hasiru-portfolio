import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import SocialDock from '../components/social-dock';

export const metadata: Metadata = {
  title: 'Hasiru Chamika · Product Designer & Engineer',
  description:
    'Digital product designer and developer crafting polished end-to-end experiences across web, mobile, and embedded systems.',
};

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} text-zinc-200`}>
        {children}
        <SocialDock />
      </body>
    </html>
  );
}
