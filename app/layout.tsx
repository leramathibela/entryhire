import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EntryHire - Launch Your Career in South Africa',
  description: 'Find internships, learnerships and graduate programmes in South Africa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="cp0PtVnM8v8cRTR7ldh_Z2Vk4B8pypNOUhjw6dE1wWQ" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
