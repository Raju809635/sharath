'use client';

import { motion } from 'framer-motion';
import { Container } from './Section';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300 dark:bg-slate-950">
      <Container className="py-14">
        <div className="mb-10 grid gap-8 md:grid-cols-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 font-bold text-white">CDP</div>
              <span className="font-bold text-white">Concept Difficulty Predictor</span>
            </div>
            <p className="text-sm text-slate-400">Transforming Education Through AI-Driven Curriculum Intelligence</p>
          </motion.div>

          {[
            ['Project', ['About', 'Architecture', 'Modules', 'Demo']],
            ['Research', ['Results', 'Applications', 'Future Scope', 'Team']],
            ['Connect', ['Contact', 'Documentation', 'Source Code', 'Research Notes']],
          ].map(([title, links]) => (
            <motion.div key={title as string} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="mb-4 font-bold text-white">{title}</h4>
              <ul className="space-y-2">
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mb-8 h-px bg-slate-800" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>Copyright {year} Concept Difficulty Predictor (CDP). Built for AI-powered education research.</p>
          <p>Kaparthi Sharath Kumar | 24U11A0591</p>
        </div>
      </Container>
    </footer>
  );
}
