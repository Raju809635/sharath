'use client';

import { motion } from 'framer-motion';
import { AlertCircle, RotateCcw, Sparkles, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Container, Section, SectionTitle } from './Section';

type Results = { nlp: number; irt: number; graph: number; final: number };

function clamp(score: number) {
  return Math.max(0, Math.min(10, Number(score.toFixed(1))));
}

function estimateDifficulty(name: string, description: string): Results {
  const text = `${name} ${description}`.trim();
  const words = text.split(/\s+/).filter(Boolean);
  const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / Math.max(words.length, 1);
  const technicalTerms = ['algorithm', 'quantum', 'model', 'theory', 'derivative', 'matrix', 'network', 'probability', 'optimization', 'inference'];
  const termHits = technicalTerms.filter((term) => text.toLowerCase().includes(term)).length;
  const nlp = clamp(2.2 + avgWordLength * 0.55 + termHits * 0.75 + Math.min(description.length / 180, 2));
  const graph = clamp(2 + termHits * 1.1 + Math.min(words.length / 12, 3) + (text.includes(',') ? 0.8 : 0));
  const irt = clamp(3 + Math.min(description.length / 120, 2.5) + (name.length > 14 ? 1 : 0) + termHits * 0.45);
  return { nlp, irt, graph, final: clamp(nlp * 0.38 + irt * 0.32 + graph * 0.3) };
}

function DifficultyBar({ label, score }: { label: string; score: number }) {
  const tone = score < 3.5 ? 'bg-emerald-500' : score < 6.5 ? 'bg-amber-500' : 'bg-rose-500';
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
        <span className="text-sm font-bold text-slate-900 dark:text-white">{score.toFixed(1)}/10</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div initial={{ width: 0 }} animate={{ width: `${score * 10}%` }} transition={{ duration: 0.8 }} className={`h-full rounded-full ${tone}`} />
      </div>
    </div>
  );
}

export function DemoSection() {
  const [conceptName, setConceptName] = useState('Machine Learning');
  const [description, setDescription] = useState('Algorithms that learn patterns from data without explicit programming');
  const [results, setResults] = useState<Results | null>(estimateDifficulty(conceptName, description));
  const [errors, setErrors] = useState<{ conceptName?: string; description?: string }>({});

  const chartData = useMemo(
    () =>
      results
        ? [
            { signal: 'NLP', score: results.nlp },
            { signal: 'IRT', score: results.irt },
            { signal: 'Graph', score: results.graph },
          ]
        : [],
    [results],
  );

  const handleAnalyze = () => {
    const nextErrors = {
      conceptName: conceptName.trim() ? undefined : 'Enter a concept name.',
      description: description.trim().length >= 20 ? undefined : 'Add at least 20 characters.',
    };
    setErrors(nextErrors);
    if (nextErrors.conceptName || nextErrors.description) return;
    setResults(estimateDifficulty(conceptName, description));
  };

  return (
    <Section id="demo" className="bg-white dark:bg-slate-900">
      <Container>
        <SectionTitle subtitle="Try a lightweight, deterministic sample analyzer">Interactive Demo</SectionTitle>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800/70">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Concept Analyzer</h3>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Concept Name</span>
                <input value={conceptName} onChange={(e) => setConceptName(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white" placeholder="e.g., Quantum Computing" />
                {errors.conceptName && <span className="mt-1 flex items-center gap-1 text-xs text-rose-500"><AlertCircle className="h-3 w-3" />{errors.conceptName}</span>}
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Description</span>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5} className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white" placeholder="Describe the learning concept..." />
                {errors.description && <span className="mt-1 flex items-center gap-1 text-xs text-rose-500"><AlertCircle className="h-3 w-3" />{errors.description}</span>}
              </label>
              <button onClick={handleAnalyze} className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl">
                <Zap className="h-5 w-5" /> Analyze Concept
              </button>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ['Calculus', 'Advanced mathematical analysis of continuous change, limits, derivatives, and integrals.'],
                  ['Quantum Computing', 'Computing model using superposition, entanglement, probability amplitudes, and quantum gates.'],
                ].map(([name, desc]) => (
                  <button key={name} onClick={() => { setConceptName(name); setDescription(desc); setErrors({}); setResults(estimateDifficulty(name, desc)); }} className="rounded-lg border border-slate-300 bg-white p-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600">
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800/70">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Analysis Results</h3>
            {results && (
              <div className="space-y-6">
                <div className="h-56 rounded-xl bg-white p-3 dark:bg-slate-900/60">
                  <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                    <RadarChart data={chartData}>
                      <PolarGrid stroke="#64748b" />
                      <PolarAngleAxis dataKey="signal" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                      <Radar dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.35} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <DifficultyBar label="NLP Difficulty Score" score={results.nlp} />
                <DifficultyBar label="IRT Difficulty Score" score={results.irt} />
                <DifficultyBar label="Knowledge Graph Difficulty Score" score={results.graph} />
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-5 text-white">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium opacity-90"><Sparkles className="h-4 w-4" /> Final Predicted Difficulty</div>
                  <p className="text-5xl font-bold">{results.final.toFixed(1)}</p>
                  <p className="mt-2 text-sm opacity-90">{results.final < 3.5 ? 'Easy: suitable for early sequencing.' : results.final < 6.5 ? 'Medium: add prerequisite checks.' : 'Hard: reserve for advanced learners.'}</p>
                </div>
                <button onClick={() => setResults(null)} className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-200 px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
                  <RotateCcw className="h-4 w-4" /> Clear Results
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
