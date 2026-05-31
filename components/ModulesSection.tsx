'use client';

import { motion } from 'framer-motion';
import { ChartNoAxesCombined, CheckCircle2, Network, TextSearch } from 'lucide-react';
import { Container, Section, SectionTitle } from './Section';

const modules = [
  {
    title: 'NLP Complexity Analysis',
    icon: TextSearch,
    color: 'from-blue-500 to-cyan-500',
    features: ['Readability Analysis', 'Vocabulary Complexity', 'Concept Density', 'Sentence Structure Analysis'],
    description: 'Measures linguistic and semantic complexity from instructional content.',
  },
  {
    title: 'Learner Performance Analysis',
    icon: ChartNoAxesCombined,
    color: 'from-violet-500 to-fuchsia-500',
    features: ['Quiz Analysis', 'Assignment Performance', 'Concept Mastery Detection', 'IRT Modeling'],
    description: 'Uses assessment patterns to estimate how difficult each concept is for learners.',
  },
  {
    title: 'Knowledge Graph Analysis',
    icon: Network,
    color: 'from-rose-500 to-orange-500',
    features: ['Dependency Mapping', 'Prerequisite Depth', 'Concept Connectivity', 'Learning Path Generation'],
    description: 'Models prerequisite chains and concept relationships to guide sequencing.',
  },
];

export function ModulesSection() {
  return (
    <Section id="modules" className="bg-white dark:bg-slate-900">
      <Container>
        <SectionTitle subtitle="Three specialized analysis modules working together to predict concept difficulty">
          Core Modules
        </SectionTitle>

        <div className="grid gap-8 md:grid-cols-3">
          {modules.map((module, idx) => (
            <motion.div key={module.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8 }} className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative h-full rounded-2xl border-2 border-slate-200 p-8 transition-all duration-300 group-hover:border-slate-300 dark:border-slate-700 dark:group-hover:border-slate-600">
                <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${module.color} shadow-lg`}>
                  <module.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">{module.title}</h3>
                <p className="mb-6 text-slate-600 dark:text-slate-400">{module.description}</p>
                <div className="space-y-3">
                  {module.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
