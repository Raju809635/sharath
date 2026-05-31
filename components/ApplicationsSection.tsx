'use client';

import { motion } from 'framer-motion';
import { Bot, Building2, GraduationCap, Laptop, LibraryBig, Sparkles } from 'lucide-react';
import { Container, Section, SectionTitle } from './Section';

const applications = [
  { title: 'Learning Management Systems', icon: LibraryBig, description: 'Automatically sequence modules inside LMS workflows.', benefits: ['Adaptive sequencing', 'Personalization', 'Real-time analytics'] },
  { title: 'Universities', icon: GraduationCap, description: 'Improve curriculum design with data-driven difficulty assessment.', benefits: ['Curriculum optimization', 'Student success', 'Retention improvement'] },
  { title: 'Online Learning Platforms', icon: Laptop, description: 'Recommend the right next concept for each learner.', benefits: ['User engagement', 'Completion rates', 'Course effectiveness'] },
  { title: 'AI Tutors', icon: Bot, description: 'Give tutoring agents a difficulty-aware teaching strategy.', benefits: ['Smart tutoring', 'Personalized paths', 'Better outcomes'] },
  { title: 'Corporate Training', icon: Building2, description: 'Optimize employee upskilling with sequenced learning paths.', benefits: ['Faster skills', 'Lower costs', 'Better ROI'] },
  { title: 'Personalized Learning Systems', icon: Sparkles, description: 'Adapt study experiences to individual readiness.', benefits: ['Adaptation', 'Effectiveness', 'Engagement'] },
];

export function ApplicationsSection() {
  return (
    <Section className="bg-white dark:bg-slate-900">
      <Container>
        <SectionTitle subtitle="CDP applications across educational and training ecosystems">
          Applications
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, idx) => (
            <motion.div key={app.title} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -8 }} className="rounded-2xl border-2 border-slate-200 p-6 transition-all hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <app.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{app.title}</h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">{app.description}</p>
              <div className="space-y-2">
                {app.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
