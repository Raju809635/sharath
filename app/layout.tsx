import type { Metadata } from 'next';
import { Providers } from '@/app/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Concept Difficulty Predictor - AI-Powered Curriculum Sequencing',
  description:
    'AI-powered system that predicts learning concept difficulty using NLP analysis, IRT modeling, and knowledge graphs for adaptive curriculum sequencing.',
  keywords:
    'AI, educational technology, curriculum sequencing, difficulty prediction, adaptive learning',
  authors: [{ name: 'Kaparthi Sharath Kumar' }],
  openGraph: {
    title: 'Concept Difficulty Predictor (CDP)',
    description: 'AI-Powered Curriculum Sequencing Using Multi-Signal Difficulty Estimation',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
