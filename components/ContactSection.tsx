'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { Container, Section, SectionTitle } from './Section';

type FormData = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormData, string>>;

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const next: Errors = {};
    if (!formData.name.trim()) next.name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Enter a valid email.';
    if (formData.message.trim().length < 10) next.message = 'Message must be at least 10 characters.';
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      window.setTimeout(() => setIsSubmitted(false), 3000);
    }, 800);
  };

  const fieldClass = 'w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white';

  return (
    <Section id="contact" className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <Container>
        <SectionTitle subtitle="Questions, collaborations, and academic review">Contact</SectionTitle>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">Connect About CDP</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Use this form for project feedback, implementation questions, or research collaboration discussions.
              </p>
            </div>
            <div className="space-y-4">
              <a href="mailto:sharath.research@university.edu" className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Email</p>
                  <p className="font-semibold text-slate-900 dark:text-white">sharath.research@university.edu</p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-lg p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Location</p>
                  <p className="font-semibold text-slate-900 dark:text-white">Department of CSE</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border-2 border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {(['name', 'email', 'message'] as const).map((field) => (
                <label key={field} className="block">
                  <span className="mb-2 block text-sm font-medium capitalize text-slate-700 dark:text-slate-300">{field}</span>
                  {field === 'message' ? (
                    <textarea name={field} value={formData[field]} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} rows={5} placeholder="Your message..." className={`${fieldClass} resize-none`} />
                  ) : (
                    <input name={field} type={field === 'email' ? 'email' : 'text'} value={formData[field]} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} placeholder={field === 'email' ? 'your@email.com' : 'Your name'} className={fieldClass} />
                  )}
                  {errors[field] && <span className="mt-1 flex items-center gap-1 text-xs text-rose-500"><AlertCircle className="h-3 w-3" />{errors[field]}</span>}
                </label>
              ))}
              <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white transition hover:shadow-lg disabled:opacity-60">
                <Send className="h-5 w-5" /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {isSubmitted && <p className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Message sent successfully. Thank you for reaching out.</p>}
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
