'use client';

import { motion } from 'framer-motion';
import { GraduationCap, UserRoundCheck } from 'lucide-react';
import { Container, Section, SectionTitle } from './Section';

export function TeamSection() {
  return (
    <Section id="team" className="bg-white dark:bg-slate-900">
      <Container>
        <SectionTitle subtitle="Project presentation and academic guidance">Team</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border-2 border-slate-200 p-8 text-center dark:border-slate-700">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Kaparthi Sharath Kumar</h3>
            <p className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-lg font-semibold text-transparent dark:from-blue-400 dark:to-purple-400">Presenter</p>
            <div className="space-y-3 text-left">
              <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-600 dark:text-slate-400">Roll Number</p>
                <p className="font-semibold text-slate-900 dark:text-white">24U11A0591</p>
              </div>
              <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-600 dark:text-slate-400">Branch</p>
                <p className="font-semibold text-slate-900 dark:text-white">Computer Science and Engineering (CSE)</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl border-2 border-slate-200 p-8 text-center dark:border-slate-700">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-500 shadow-lg">
              <UserRoundCheck className="h-10 w-10 text-white" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Ms. P. Ramya Krishna</h3>
            <p className="mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-lg font-semibold text-transparent dark:from-rose-400 dark:to-orange-400">Guide</p>
            <div className="space-y-3 text-left">
              <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-600 dark:text-slate-400">Designation</p>
                <p className="font-semibold text-slate-900 dark:text-white">Assistant Professor</p>
              </div>
              <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-600 dark:text-slate-400">Department</p>
                <p className="font-semibold text-slate-900 dark:text-white">Department of CSE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
