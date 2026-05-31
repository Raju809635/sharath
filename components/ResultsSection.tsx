'use client';

import { motion, useInView } from 'framer-motion';
import { BookOpenCheck, ChartNoAxesColumnIncreasing, CircleCheck, Gauge } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Container, Section, SectionTitle } from './Section';

function AnimatedCounter({ end, duration = 1.6, decimals = 0 }: { end: number; duration?: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = duration * 60;
    const interval = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setCount(end * (1 - Math.pow(1 - progress, 3)));
      if (progress === 1) window.clearInterval(interval);
    }, 1000 / 60);
    return () => window.clearInterval(interval);
  }, [duration, end, isInView]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

const stats = [
  { value: 0.31, label: 'RMSE', icon: Gauge, decimals: 2, description: 'Low prediction error for stable sequencing' },
  { value: 26, label: 'Learning Efficiency Improvement', icon: ChartNoAxesColumnIncreasing, suffix: '%', description: 'Faster concept mastery' },
  { value: 34, label: 'Failure Rate Reduction', icon: CircleCheck, suffix: '%', description: 'Fewer learners falling behind' },
  { value: 18, label: 'Courses Evaluated', icon: BookOpenCheck, suffix: '+', description: 'Across varied course structures' },
];

const modelTrend = [
  { month: 'M1', rmse: 0.62 },
  { month: 'M2', rmse: 0.51 },
  { month: 'M3', rmse: 0.43 },
  { month: 'M4', rmse: 0.36 },
  { month: 'M5', rmse: 0.31 },
];

const impactData = [
  { name: 'Before', failure: 41, efficiency: 62 },
  { name: 'After', failure: 27, efficiency: 88 },
];

export function ResultsSection() {
  return (
    <Section id="results" className="bg-gradient-to-b from-slate-900 to-slate-950 py-32 dark:from-slate-950 dark:to-slate-900">
      <Container>
        <SectionTitle subtitle="Evaluation metrics from the CDP research prototype">Results & Performance</SectionTitle>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="mb-2 text-4xl font-bold text-white">
                <AnimatedCounter end={stat.value} decimals={stat.decimals ?? 0} />
                {stat.suffix}
              </p>
              <p className="mb-2 text-sm font-medium text-slate-300">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <h3 className="mb-4 text-xl font-bold text-white">Model Error Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <AreaChart data={modelTrend} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <defs>
                    <linearGradient id="rmseGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.55} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8, color: '#fff' }} />
                  <Area type="monotone" dataKey="rmse" stroke="#38bdf8" fill="url(#rmseGradient)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8">
            <h3 className="mb-4 text-xl font-bold text-white">Educational Impact</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <BarChart data={impactData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8, color: '#fff' }} />
                  <Bar dataKey="failure" fill="#fb7185" name="Failure rate" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="efficiency" fill="#34d399" name="Efficiency" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
