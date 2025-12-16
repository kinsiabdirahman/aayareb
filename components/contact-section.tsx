"use client"

import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ContactSection() {
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aayareebconsulting@gmail.com",
      link: "mailto:aayareebconsulting@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+252 612 593 026",
      link: "tel:+252612593026",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+252 618 677 739",
      link: "tel:+252618677739",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Howlwadaag, Mogadishu, Somalia",
      link: "#",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
            Ready to transform your organization? Contact us to discuss your needs and explore how we can help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-10 glass-card border-2 border-primary/20 relative overflow-hidden hover:border-primary/40 transition-all shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-5 group hover:translate-x-2 transition-transform"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-xl shadow-primary/30 border-2 border-primary/40">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground/60 mb-2 tracking-wider uppercase">
                          {info.title}
                        </div>
                        <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>

      <footer className="mt-24 border-t border-primary/20 pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl transform rotate-6 shadow-lg shadow-primary/30"></div>
                <div className="absolute inset-0 glass-card rounded-xl border-2 border-primary/30 flex items-center justify-center backdrop-blur-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.6" />
                    <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Aayareeb
              </span>
            </div>
            <div className="text-center md:text-left text-foreground/60 font-medium">
              © 2025 Aayareeb. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
