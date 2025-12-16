"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(0, 79, 59, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 79, 59, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(0, 79, 59, 0.2) 0%, transparent 50%)
          `,
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(0, 79, 59) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0, 79, 59) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs with glass effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full glass-card border border-primary/20"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              background: `radial-gradient(circle, rgba(0, 79, 59, 0.1) 0%, transparent 70%)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8 border-2 border-primary/30 animate-fade-in shadow-2xl shadow-primary/20">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary tracking-wide">Strategic Excellence in Action</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 leading-tight text-balance">
            Turning{" "}
            <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Insight
            </span>{" "}
            Into Action
          </h1>

          <p className="text-xl sm:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
            Transform your organization with innovative solutions and strategic consulting that drives measurable
            results and lasting impact
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground text-lg px-12 py-8 font-bold rounded-2xl group shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all border-2 border-primary/20 hover:border-primary/40 w-full sm:w-auto"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-12 py-8 font-bold rounded-2xl glass-card bg-background/30 border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all shadow-xl w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pb-16">
            {[
              { value: 4, label: "Years Since 2020" },
              { value: 200, label: "Projects Delivered" },
              { value: 50, label: "Government Clients" },
              { value: 98, label: "Client Satisfaction", suffix: "%" },
            ].map((stat, index) => (
              <AnimatedStatCard key={index} value={stat.value} label={stat.label} suffix={stat.suffix} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-25px, 25px) rotate(240deg);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

function AnimatedStatCard({
  value,
  label,
  suffix = "+",
  index,
}: {
  value: number
  label: string
  suffix?: string
  index: number
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true)
      setTimeout(() => {
        const duration = 2000
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
      }, index * 100)
    }
  }, [value, hasAnimated, index])

  return (
    <div
      className="glass-card p-8 rounded-2xl transform hover:scale-110 hover:-translate-y-3 transition-all duration-300 border-2 border-primary/20 hover:border-primary/50 shadow-xl hover:shadow-2xl hover:shadow-primary/30 group relative overflow-hidden"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform">
          {count}
          {suffix}
        </div>
        <div className="text-sm text-foreground/60 font-semibold">{label}</div>
      </div>
    </div>
  )
}
