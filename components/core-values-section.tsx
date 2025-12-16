"use client"

import { Card } from "@/components/ui/card"
import { Shield, Award, Lightbulb, Users, Target, Compass } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CoreValuesSection() {
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

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding the highest ethical standards in all our engagements",
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Delivering excellence through expertise and dedication",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing creative solutions and progressive thinking",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships for collective impact",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Driving measurable results that create lasting change",
    },
    {
      icon: Compass,
      title: "Contextual Relevance",
      description: "Tailoring solutions to local realities and cultural contexts",
    },
  ]

  return (
    <section id="values" ref={sectionRef} className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
            The principles that guide our work and define our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className={`p-8 glass-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 border-primary/20 hover:border-primary/50 group relative overflow-hidden hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg shadow-primary/20 border border-primary/30">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed text-center">{value.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
