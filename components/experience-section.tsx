"use client"

import { Card } from "@/components/ui/card"
import { Building, FileText, Ship, Users2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ExperienceSection() {
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

  const projects = [
    {
      icon: Building,
      year: "2024",
      title: "Governance Assessments",
      description: "Comprehensive governance assessments of Local Administrations in Jubaland",
    },
    {
      icon: FileText,
      year: "2023",
      title: "Strategic Planning & Reform",
      description: "Institutional Reform Policy for Ministry of Fisheries and Blue Economy, Jubbaland",
    },
    {
      icon: Ship,
      year: "2022",
      title: "Blue Economy Research",
      description: "Policy Research on Blue Economy Investment Opportunities in Somalia coast",
    },
    {
      icon: Users2,
      year: "2021",
      title: "Capacity Strengthening",
      description: "Building capacity of Civil Society Organizations in Border Districts of Jubaland",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Past Experience</h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
            A proven track record of delivering impactful governance and research solutions since 2020
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={index}
                className={`p-8 glass-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 border-primary/20 hover:border-primary/50 group relative overflow-hidden hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg shadow-primary/20 border border-primary/30">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-primary/70 mb-1 tracking-wider uppercase">
                        {project.year}
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
