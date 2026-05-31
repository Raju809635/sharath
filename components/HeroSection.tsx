'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Container } from './Section';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* AI Nodes Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 15, top: 20 },
          { left: 85, top: 30 },
          { left: 70, top: 70 },
          { left: 25, top: 80 },
          { left: 60, top: 40 },
          { left: 40, top: 60 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 100, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">AI-Powered Education</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Concept Difficulty
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">Predictor</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
              AI-Powered Curriculum Sequencing Using Multi-Signal Difficulty Estimation. Transform educational content with intelligent difficulty prediction and adaptive learning paths.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('demo')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('architecture')}
                className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                View Architecture
              </motion.button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 mt-12 pt-12 border-t border-slate-200 dark:border-slate-800">
              {[
                { value: '3', label: 'Analysis Signals' },
                { value: '18+', label: 'Courses Evaluated' },
                { value: '34%', label: 'Failure Reduction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Floating cards */}
              {[
                { label: 'NLP Analysis', delay: 0, x: -40, y: -40 },
                { label: 'IRT Modeling', delay: 0.2, x: 40, y: -40 },
                { label: 'Knowledge Graph', delay: 0.4, x: 0, y: 40 },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: card.delay,
                    repeat: Infinity,
                  }}
                  className="absolute p-4 px-6 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl"
                  style={{
                    left: `calc(50% + ${card.x}px)`,
                    top: `calc(50% + ${card.y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{card.label}</p>
                </motion.div>
              ))}

              {/* Central circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-48 h-48 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
                />
                <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-2xl">CDP</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
