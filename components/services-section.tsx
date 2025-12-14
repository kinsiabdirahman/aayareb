import { Building2, FileText, LineChart, Shield, Map, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Governance & Institutional Strengthening",
    description:
      "Building accountable, transparent, and effective institutions through comprehensive governance frameworks and capacity development.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Policy Research & Analysis",
    description:
      "Evidence-based research to inform policy development, strategic planning, and decision-making processes.",
    color: "accent",
  },
  {
    icon: LineChart,
    title: "Monitoring, Evaluation & Learning",
    description: "Integrated MEL systems emphasizing continuous learning, adaptive management, and impact measurement.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Risk & Compliance Management",
    description:
      "Navigate complex environments and build organizational resilience through robust risk frameworks and compliance systems.",
    color: "accent",
  },
  {
    icon: Map,
    title: "Strategic Planning & Development",
    description:
      "Comprehensive strategic plans grounded in governance principles and tailored to your unique context and objectives.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Capacity Building & Training",
    description:
      "Developing human capital for good governance through targeted training programs and knowledge transfer initiatives.",
    color: "accent",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-advanced opacity-60" />
      <div className="absolute top-1/4 left-0 w-px h-[600px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-px h-[600px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.35_0.15_158/0.05)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30 text-primary text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm">
            <Building2 className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 leading-tight">
            Comprehensive
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Advisory Solutions
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Strategic services designed to strengthen governance, build institutional capacity, and drive sustainable
            transformation across emerging contexts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/80 backdrop-blur-sm hover:bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden relative hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-500" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
              </div>

              <CardHeader className="relative pb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/30">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="leading-relaxed text-base lg:text-lg mb-6">
                  {service.description}
                </CardDescription>
                <div className="flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
