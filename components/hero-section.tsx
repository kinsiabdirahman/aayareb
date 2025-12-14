"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background via-background to-surface">
      {/* Subtle ambient glow effects only */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px] animate-float" />
      <div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[160px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/30 text-primary text-sm font-semibold animate-scale-in backdrop-blur-md shadow-lg">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="relative">
              Strategic Governance Advisory Since 2020
              <span className="absolute inset-0 animate-shimmer" />
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-balance leading-[1.05] animate-slide-up tracking-tight">
            Transforming
            <br />
            <span className="bg-gradient-to-br from-primary via-accent to-primary/80 bg-clip-text text-transparent animate-gradient-shift inline-block">
              Governance Excellence
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed animate-slide-up font-light"
            style={{ animationDelay: "0.2s" }}
          >
            Strategic advisory and institutional transformation expertise across the Horn of Africa, building resilient
            governance frameworks for a better tomorrow.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="group h-16 px-10 text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all hover:scale-105 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary rounded-full"
              asChild
            >
              <a href="#services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 text-lg font-semibold border-2 hover:bg-primary/5 bg-transparent backdrop-blur-sm hover:border-primary transition-all hover:scale-105 rounded-full"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div
            className="pt-20 flex flex-wrap items-center justify-center gap-16 text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="mt-1 text-base font-medium">Projects Delivered</div>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="mt-1 text-base font-medium">Partner Organizations</div>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                5+
              </div>
              <div className="mt-1 text-base font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.98 0.005 158)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="oklch(0.98 0.005 158)" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0,0 C300,90 600,90 900,0 L900,120 L0,120 Z" fill="url(#waveGradient)" opacity="0.4" />
          <path d="M0,20 C300,110 600,110 900,20 L900,120 L0,120 Z" fill="oklch(0.98 0.005 158)" />
        </svg>
      </div>
    </section>
  )
}
