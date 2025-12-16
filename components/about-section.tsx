"use client"

import { Card } from "@/components/ui/card"
import { Target, Users, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
      icon: Target,
      title: "Vision",
      description:
        "To be the premier partner for institutions seeking to build resilient, transparent and effective governance frameworks powered by evidence-based research and innovative thinking.",
    },
    {
      icon: Users,
      title: "Mission",
      description:
        "Dedicated to strengthening organizations through expertise in governance and rigorous research. We empower institutions by providing tailored advisory solutions that drive inclusivity and measurable impact.",
    },
    {
      icon: Zap,
      title: "Our Identity",
      description:
        "Operating at the nexus of institutional strengthening, governance reform, and policy advisory. We embody professionalism, innovation, and integrity - delivering actionable strategies to address complex development challenges.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Who We Are</h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
            Aayareeb is a modern, visionary professional services entity dedicated to advancing governance,
            institutional transformation, and applied research in fragile and emerging contexts. Founded in May 2020 and
            headquartered in Mogadishu, Somalia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className={`p-10 glass-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 border-primary/20 hover:border-primary/50 group relative overflow-hidden hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl shadow-primary/30 border-2 border-primary/40">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-5 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
