'use client';

import { motion } from 'framer-motion';
import { Section, Container, SectionTitle } from './Section';
import { ArrowRight } from 'lucide-react';

export function FutureSection() {
  const roadmap = [
    {
      phase: 'Phase 1',
      title: 'Real-Time Difficulty Prediction',
      description: 'Live difficulty scoring as content is created and updated.',
      status: 'In Progress',
    },
    {
      phase: 'Phase 2',
      title: 'Advanced AI Tutoring',
      description: 'Integration with conversational AI for intelligent one-on-one tutoring.',
      status: 'Planned',
    },
    {
      phase: 'Phase 3',
      title: 'Personalized Study Plans',
      description: 'Automatic generation of customized study schedules and learning paths.',
      status: 'Planned',
    },
    {
      phase: 'Phase 4',
      title: 'LMS Integrations',
      description: 'Native plugins for Canvas, Blackboard, Moodle, and other platforms.',
      status: 'Planned',
    },
    {
      phase: 'Phase 5',
      title: 'Adaptive Curriculum Generation',
      description: 'Automatic curriculum creation based on learning outcomes and student profiles.',
      status: 'Future',
    },
  ];

  return (
    <Section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Container>
        <SectionTitle subtitle="Upcoming features and improvements to CDP">Future Scope & Roadmap</SectionTitle>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-8 md:pl-12">
            {roadmap.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: idx * 0.2, repeat: Infinity }}
                  className="hidden md:block absolute -left-16 top-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-950"
                />

                <div className={`p-6 rounded-2xl border-2 ${
                  item.status === 'In Progress'
                    ? 'border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20'
                    : item.status === 'Planned'
                      ? 'border-purple-300 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        {item.phase}
                      </p>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{item.title}</h3>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} className="flex-shrink-0">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'In Progress'
                            ? 'bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                            : item.status === 'Planned'
                              ? 'bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        {item.status}
                      </span>
                    </motion.div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300">{item.description}</p>

                  <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <span className="text-sm font-medium">Learn more</span>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
