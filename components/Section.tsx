'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function Container({ children, className = '' }: Omit<SectionProps, 'id'>) {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}

export function SectionTitle({ children, subtitle }: { children: ReactNode; subtitle?: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
        {children}
      </h2>
      {subtitle && <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
