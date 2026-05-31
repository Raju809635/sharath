'use client';

import { motion } from 'framer-motion';
import { ArrowDown, BarChart3, Bot, BookOpen, BrainCircuit, GitBranch, GraduationCap, Network, Route, Sigma, Target } from 'lucide-react';
import { Container, Section, SectionTitle } from './Section';

const stages = [
  {
    title: 'Data Sources',
    color: 'from-blue-600 to-cyan-500',
    border: 'border-blue-500/30',
    items: [
      { name: 'Course Content', icon: BookOpen },
      { name: 'Student Data', icon: GraduationCap },
      { name: 'Knowledge Graph', icon: Network },
    ],
  },
  {
    title: 'Analysis Pipeline',
    color: 'from-violet-600 to-fuchsia-500',
    border: 'border-violet-500/30',
    items: [
      { name: 'NLP Complexity Analyzer', icon: Sigma },
      { name: 'IRT Analyzer', icon: BarChart3 },
      { name: 'Prerequisite Analyzer', icon: GitBranch },
    ],
  },
  {
    title: 'Integration',
    color: 'from-rose-600 to-pink-500',
    border: 'border-rose-500/30',
    items: [{ name: 'Ensemble AI Model', icon: BrainCircuit }],
  },
  {
    title: 'Output',
    color: 'from-emerald-600 to-teal-500',
    border: 'border-emerald-500/30',
    items: [
      { name: 'Difficulty Score (0-10)', icon: Target },
      { name: 'Curriculum Sequencing', icon: Route },
    ],
  },
];

export function ArchitectureSection() {
  return (
    <Section id="architecture" className="bg-slate-900 py-32 dark:bg-slate-950">
      <Container>
        <SectionTitle subtitle="A multi-signal pipeline that turns raw learning evidence into actionable curriculum intelligence">
          System Architecture
        </SectionTitle>

        <div className="grid gap-5 lg:grid-cols-4">
          {stages.map((stage, idx) => (
            <motion.div key={stage.title} className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              {idx < stages.length - 1 && (
                <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -right-4 top-24 z-10 hidden lg:block">
                  <ArrowDown className="h-6 w-6 -rotate-90 text-slate-400" />
                </motion.div>
              )}
              <div className={`h-full rounded-2xl border ${stage.border} bg-slate-800/70 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur`}>
                <div className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${stage.color}`} />
                <h3 className="mb-4 text-xl font-bold text-white">{stage.title}</h3>
                <div className="space-y-3">
                  {stage.items.map((item) => (
                    <motion.div key={item.name} whileHover={{ scale: 1.03 }} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/10 p-3">
                      <item.icon className="h-5 w-5 text-blue-200" />
                      <span className="font-medium text-slate-100">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900 p-8">
          <h3 className="mb-6 text-2xl font-bold text-white">Complete Pipeline</h3>
          <div className="grid gap-4 md:grid-cols-4">
            {['Content Ingestion', 'Feature Extraction', 'Model Inference', 'Curriculum Generation'].map((title, i) => (
              <div key={title} className="rounded-lg bg-slate-700/50 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 font-bold text-white">{i + 1}</div>
                <h4 className="mb-1 font-bold text-white">{title}</h4>
                <p className="text-sm text-slate-400">
                  {i === 0 && 'Course, assessment, and graph data are collected.'}
                  {i === 1 && 'NLP, IRT, and graph features are calculated.'}
                  {i === 2 && 'The ensemble model predicts normalized difficulty.'}
                  {i === 3 && 'Concepts are ordered into adaptive learning paths.'}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
