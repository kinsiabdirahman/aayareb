"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Users, Database, Target, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function MethodologySection() {
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

  const phases = [
    {
      icon: Users,
      phase: "Approach 1",
      title: "Participatory Engagement",
      description: "Amplifying voices of communities, institutions, and stakeholders through collaborative methods.",
      highlights: ["Stakeholder Consultations", "Community Engagement", "Inclusive Dialogue", "Partnership Building"],
    },
    {
      icon: Database,
      phase: "Approach 2",
      title: "Evidence-Based Research",
      description: "Rigorous research using qualitative and quantitative tools with proven sampling techniques.",
      highlights: ["Random & Stratified Sampling", "Cluster Analysis", "Purposive Research", "Data Quality Assurance"],
    },
    {
      icon: Target,
      phase: "Approach 3",
      title: "Contextual Adaptation",
      description: "Integrating global best practices with local realities for contextually relevant solutions.",
      highlights: ["Local Context Analysis", "Best Practice Integration", "Cultural Sensitivity", "Adaptive Solutions"],
    },
    {
      icon: TrendingUp,
      phase: "Approach 4",
      title: "Continuous Learning",
      description: "Emphasizing learning, adaptation, and sustained improvement for lasting impact.",
      highlights: ["Performance Monitoring", "Adaptive Management", "Knowledge Sharing", "Capacity Development"],
    },
  ]

  return (
    <section id="methodology" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Approach</h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
            A participatory, adaptive approach that integrates global best practices with local realities, prioritizing
            inclusivity, empirical evidence, and contextual relevance
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {phases.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="p-10 glass-card h-full border-2 border-primary/30 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all group relative overflow-hidden hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-xl shadow-primary/30 border-2 border-primary/40">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-primary/70 mb-1 tracking-wider uppercase">
                              {phase.phase}
                            </div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {phase.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-foreground/70 leading-relaxed mb-8">{phase.description}</p>
                        <div className="space-y-4">
                          {phase.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-3 group/item">
                              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent group-hover/item:scale-150 transition-transform shadow-sm shadow-primary/50" />
                              <span className="text-sm text-foreground/60 group-hover/item:text-foreground/80 transition-colors">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious className="relative left-0 translate-x-0 glass-card border-2 border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all" />
              <CarouselNext className="relative right-0 translate-x-0 glass-card border-2 border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-xl transition-all" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
