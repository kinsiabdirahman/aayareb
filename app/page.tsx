import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { CoreValuesSection } from "@/components/core-values-section"
import { MethodologySection } from "@/components/methodology-section"
import { ExperienceSection } from "@/components/experience-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CoreValuesSection />
      <MethodologySection />
      <ExperienceSection />
      <WhyChooseSection />
      <ContactSection />
    </main>
  )
}
