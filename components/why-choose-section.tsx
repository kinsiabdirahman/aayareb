"use client"

import { Card } from "@/components/ui/card"
import { Building2, Globe2, Users2, Lightbulb, Target, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      icon: Target,
      title: "Proven Expertise",
      description: "Demonstrated excellence in governance and applied research across multiple sectors and contexts",
      highlight: "4+ Years",
    },
    {
      icon: Globe2,
      title: "Local & Global Insights",
      description: "Deep local knowledge blended with international perspectives for context-sensitive solutions",
      highlight: "Best of Both",
    },
    {
      icon: Users2,
      title: "Multidisciplinary Team",
      description: "Diverse experts bringing contextual insights from governance, policy, economics, and development",
      highlight: "Expert Team",
    },
    {
      icon: Lightbulb,
      title: "Innovative Methodologies",
      description: "Adaptive, practical, and evidence-driven approaches that deliver real-world impact",
      highlight: "Cutting-Edge",
    },
    {
      icon: Building2,
      title: "Integrity & Ethics",
      description: "Strong commitment to ethical standards, transparency, and accountability in every engagement",
      highlight: "100% Trust",
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Focus on inclusivity, sustainability, and demonstrable outcomes that drive lasting change",
      highlight: "Impact-Driven",
    },
  ]

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-secondary/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Aayareeb</h2>
          <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
            Your trusted partner for governance excellence and research-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card
                key={index}
                className={`p-8 glass-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-2 border-primary/20 hover:border-primary/60 group relative overflow-hidden hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-bl-2xl border-l border-b border-primary/30">
                  <span className="text-xs font-bold text-primary">{reason.highlight}</span>
                </div>

                <div className="relative mt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-primary/20 border border-primary/30">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{reason.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
