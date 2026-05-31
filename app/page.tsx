import {
  Header,
  HeroSection,
  AboutSection,
  ArchitectureSection,
  ModulesSection,
  TechStackSection,
  DemoSection,
  ResultsSection,
  ApplicationsSection,
  FutureSection,
  TeamSection,
  ContactSection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ArchitectureSection />
      <ModulesSection />
      <TechStackSection />
      <DemoSection />
      <ResultsSection />
      <ApplicationsSection />
      <FutureSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
