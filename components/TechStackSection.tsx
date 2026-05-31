'use client';

import { motion } from 'framer-motion';
import { Brain, ChartSpline, Code2, Database, FileText, ServerCog } from 'lucide-react';
import { Container, Section, SectionTitle } from './Section';

const categories = [
  { name: 'Frontend', icon: Code2, techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'AI & ML', icon: Brain, techs: ['Python', 'Scikit-Learn', 'XGBoost', 'TensorFlow'] },
  { name: 'NLP', icon: FileText, techs: ['spaCy', 'NLTK', 'Transformers', 'Hugging Face'] },
  { name: 'Graph Analytics', icon: Database, techs: ['NetworkX', 'Neo4j', 'PostgreSQL'] },
  { name: 'Platform', icon: ServerCog, techs: ['FastAPI', 'Docker', 'Kubernetes', 'Monitoring'] },
  { name: 'Analytics UI', icon: ChartSpline, techs: ['Recharts', 'Framer Motion', 'Dashboards'] },
];

export function TechStackSection() {
  return (
    <Section id="stack" className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Container>
        <SectionTitle subtitle="Production-ready tools for a scalable AI-powered education platform">
          Technology Stack
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, idx) => (
            <motion.div key={category.name} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all duration-300 group-hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:group-hover:border-slate-600">
                <div className="mb-4 flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <motion.span key={tech} whileHover={{ scale: 1.05 }} className="rounded-full border border-blue-200 bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-800 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300">
                      {tech}
                    </motion.span>
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
