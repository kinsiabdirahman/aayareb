"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, FileText, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const caseStudies = [
  {
    icon: FileText,
    title: "National Governance Reform",
    client: "Federal Government Agency",
    challenge: "Outdated governance structures hindering transparency and accountability in public service delivery.",
    solution:
      "Comprehensive institutional assessment, policy framework development, and capacity building program for 200+ officials.",
    results: [
      "40% improvement in transparency metrics",
      "New accountability framework adopted",
      "Enhanced citizen satisfaction scores",
    ],
    image: "/government-building-somalia-governance.jpg",
  },
  {
    icon: TrendingUp,
    title: "Regional Development Strategy",
    client: "International Development Organization",
    challenge: "Lack of evidence-based strategic planning for multi-year development initiatives across 3 regions.",
    solution:
      "Applied research, stakeholder consultations, and strategic planning workshops resulting in comprehensive 5-year roadmap.",
    results: [
      "$12M funding secured based on strategy",
      "Cross-regional coordination improved",
      "Impact measurement framework established",
    ],
    image: "/development-planning-africa-strategy-session.jpg",
  },
  {
    icon: Users,
    title: "Civil Society Capacity Building",
    client: "NGO Consortium",
    challenge:
      "Limited MEL capacity among 15 member organizations affecting donor reporting and program effectiveness.",
    solution:
      "Customized training program, MEL framework development, and ongoing mentorship for organizational teams.",
    results: [
      "85% of staff certified in MEL",
      "Unified reporting standards adopted",
      "Donor confidence significantly increased",
    ],
    image: "/training-workshop-africa-capacity-building.jpg",
  },
]

export function CaseStudiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const study = caseStudies[currentSlide]

  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.35_0.15_158/0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,oklch(0.55_0.12_158/0.04)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30 text-primary text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4" />
            <span>Case Studies</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 leading-tight">
            Proven Track Record
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              of Impact
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Real-world examples of how we've helped institutions achieve their governance and development objectives.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Card className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent lg:bg-gradient-to-r" />
              </div>

              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <study.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold">{study.client}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Challenge</h4>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3">Key Results</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all bg-transparent"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all bg-transparent"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
