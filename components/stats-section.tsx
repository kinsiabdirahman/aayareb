"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function StatsSection() {
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

  const stats = [
    { value: 15, suffix: "+", label: "Years of Excellence", duration: 2000 },
    { value: 200, suffix: "+", label: "Projects Completed", duration: 2500 },
    { value: 50, suffix: "+", label: "Government Clients", duration: 2000 },
    { value: 98, suffix: "%", label: "Client Satisfaction", duration: 2000 },
    { value: 500, suffix: "+", label: "Professionals Trained", duration: 2500 },
    { value: 25, suffix: "+", label: "Industry Awards", duration: 2000 },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Impact by the Numbers</h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
            Our track record speaks for itself. See the measurable impact we create for our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              duration={stat.duration}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedStat({
  value,
  suffix,
  label,
  duration,
  isVisible,
  delay,
}: {
  value: number
  suffix: string
  label: string
  duration: number
  isVisible: boolean
  delay: number
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
      setTimeout(() => {
        const steps = 60
        const increment = value / steps
        const stepDuration = duration / steps

        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, stepDuration)

        return () => clearInterval(timer)
      }, delay)
    }
  }, [isVisible, value, duration, hasAnimated, delay])

  return (
    <Card
      className={`p-8 glass-card hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 text-center group relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
          {count}
          {suffix}
        </div>
        <div className="text-sm md:text-base text-foreground/70 font-medium leading-snug">{label}</div>
      </div>
    </Card>
  )
}
