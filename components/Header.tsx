'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">CDP</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">CDP</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Concept Difficulty Predictor</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { label: 'About', id: 'about' },
            { label: 'Architecture', id: 'architecture' },
            { label: 'Modules', id: 'modules' },
            { label: 'Stack', id: 'stack' },
            { label: 'Demo', id: 'demo' },
            { label: 'Results', id: 'results' },
            { label: 'Team', id: 'team' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </motion.header>
  );
}
