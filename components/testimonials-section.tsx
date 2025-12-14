"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Aayareeb's governance framework transformed our institution's accountability mechanisms. Their evidence-based approach and local expertise were invaluable.",
    author: "Dr. Mohamed Ibrahim",
    role: "Director of Policy",
    organization: "National Development Agency",
  },
  {
    quote:
      "The strategic planning support we received was exceptional. They understood our context deeply and delivered actionable recommendations that drove real change.",
    author: "Fatima Mohamed",
    role: "Program Manager",
    organization: "Regional NGO Consortium",
  },
  {
    quote:
      "Their monitoring and evaluation framework helped us demonstrate impact effectively. The team's professionalism and commitment exceeded expectations.",
    author: "Ibrahim Ali",
    role: "Executive Director",
    organization: "Community Development Foundation",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-surface to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.35_0.15_158/0.05)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30 text-primary text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm">
            <Quote className="h-4 w-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 leading-tight">
            Trusted by
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Leading Organizations
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Hear from partners who have experienced transformative results with Aayareeb's governance advisory services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-500" />

              <CardContent className="p-8 relative">
                <Quote className="h-12 w-12 text-primary/20 mb-6" />
                <p className="text-muted-foreground leading-relaxed text-lg mb-8 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-6">
                  <div className="font-bold text-lg">{testimonial.author}</div>
                  <div className="text-sm text-primary font-medium mt-1">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground mt-1">{testimonial.organization}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
