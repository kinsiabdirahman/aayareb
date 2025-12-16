"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Lightbulb, LineChart, Shield, Workflow, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const services = [
    {
      icon: Building2,
      title: "Governance & Institutional Strengthening",
      description:
        "Building accountable, transparent, and effective institutions that inspire confidence and drive performance",
      features: ["Public Sector Governance", "Corporate Governance", "Non-Profit Governance"],
      image: "/modern-government-building-transparent-governance.jpg",
    },
    {
      icon: LineChart,
      title: "Policy Research & Analysis",
      description: "Evidence-based research to inform and shape effective public policy and organizational strategy",
      features: ["Policy Briefs & White Papers", "Impact Assessments", "Feasibility Studies"],
      image: "/data-analysis-research-charts-policy-documents.jpg",
    },
    {
      icon: Workflow,
      title: "Monitoring, Evaluation, Research & Learning",
      description: "Integrated MERL systems emphasizing learning and adaptation beyond standard M&E",
      features: ["MERL Frameworks", "Baseline & End-line Evaluations", "Performance Audits"],
      image: "/monitoring-evaluation-dashboard-metrics-performanc.jpg",
    },
    {
      icon: Shield,
      title: "Risk & Compliance Management",
      description: "Navigate complex regulatory environments and build resilient systems to mitigate risks",
      features: ["Risk Assessments", "Compliance Framework Design", "Ethics Programs"],
      image: "/security-compliance-risk-management-protection.jpg",
    },
    {
      icon: Lightbulb,
      title: "Strategic Planning & Organizational Development",
      description: "Ambitious yet achievable strategic plans grounded in robust governance and research",
      features: ["Strategic Visioning", "Organizational Restructuring", "Change Management"],
      image: "/strategic-planning-organizational-development-busi.jpg",
    },
    {
      icon: Sparkles,
      title: "Capacity Building & Training",
      description: "Developing human capital required to sustain good governance and utilize research effectively",
      features: ["Board & Management Training", "MERL Workshops", "Ethics & Compliance Training"],
      image: "/training-workshop-professional-development-learnin.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Core Services</h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
            Comprehensive consulting solutions to address complex development challenges across governance, research,
            and institutional transformation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                      <Card className="glass-card border-2 border-primary/30 hover:border-primary/60 group">
                        {/* Service Image */}
                        <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-xl">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                          <div className="absolute top-6 left-6 w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-primary/30">
                            <Icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                        </div>

                        {/* Service Content */}
                        <div className="p-4 sm:p-6 lg:p-8 pt-6 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6">
                              {service.description}
                            </p>
                            <div className="space-y-3">
                              {service.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-foreground/60">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent shadow-sm shadow-primary/50" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 px-4">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              className="glass-card border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/20 transition-all duration-300 group px-4 sm:px-6 bg-transparent w-full sm:w-auto"
            >
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Previous</span>
            </Button>

            {/* Carousel Indicators */}
            <div className="flex items-center gap-2 sm:gap-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-12 bg-primary shadow-lg shadow-primary/50"
                      : "w-2.5 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextSlide}
              className="glass-card border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/20 transition-all duration-300 group px-4 sm:px-6 bg-transparent w-full sm:w-auto"
            >
              <span className="font-medium">Next</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Service Counter */}
          <div className="text-center mt-6">
            <p className="text-sm text-foreground/50 font-medium">
              {currentIndex + 1} / {services.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
