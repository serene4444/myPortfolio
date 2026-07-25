import { Footer } from '@/components/footer'
import { LazyHeroBackground } from '@/components/lazy-hero-background'
import { Navbar } from '@/components/navbar'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection
} from '@/components/portfolio-sections'

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-100">
      <LazyHeroBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}