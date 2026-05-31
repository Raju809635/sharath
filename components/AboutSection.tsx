'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { Container, Section, SectionTitle } from './Section';

export function AboutSection() {
  const problems = [
    'Static difficulty labels ignore learner diversity and concept complexity.',
    'Manual curriculum sequencing is slow, subjective, and hard to update.',
    'Weak difficulty estimates cause avoidable gaps, overload, and drop-offs.',
    'One fixed path cannot support students with different prerequisite mastery.',
  ];

  const benefits = [
    'Adaptive sequencing based on content, learner performance, and prerequisites.',
    'Earlier detection of concepts that need remediation or scaffolding.',
    'Improved learning efficiency with difficulty-aware content ordering.',
    'Data-driven curriculum decisions for institutions and digital platforms.',
  ];

  return (
    <Section id="about" className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <Container>
        <SectionTitle>Why Concept Difficulty Prediction?</SectionTitle>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">The Problem</h3>
            <div className="space-y-4">
              {problems.map((problem, i) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800/30 dark:bg-red-950/20"
                >
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400" />
                  <p className="text-slate-700 dark:text-slate-300">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">The CDP Solution</h3>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800/30 dark:bg-emerald-950/20"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <p className="text-slate-700 dark:text-slate-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-rose-500/10 p-8 dark:border-blue-800"
        >
          <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">How It Works</h3>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            CDP combines NLP content complexity, Item Response Theory performance signals, and knowledge graph prerequisite depth through an ensemble model. The result is a normalized 0-10 difficulty score that helps automatically sequence concepts into adaptive learning paths.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
