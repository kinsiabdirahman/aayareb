import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ApproachSection } from "@/components/approach-section"
import { MethodologySection } from "@/components/methodology-section"
import { ValuesSection } from "@/components/values-section"
import { TeamSection } from "@/components/team-section"
import { ImpactStats } from "@/components/impact-stats"
import { SectorsSection } from "@/components/sectors-section"
import { ExperienceSection } from "@/components/experience-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PublicationsSection } from "@/components/publications-section"
import { PartnersSection } from "@/components/partners-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ImpactStats />
      <ServicesSection />
      <ApproachSection />
      <MethodologySection />
      <SectorsSection />
      <ValuesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PublicationsSection />
      <PartnersSection />
      <TeamSection />
      <ExperienceSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
