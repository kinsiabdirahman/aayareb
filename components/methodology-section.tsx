import { Users2, RefreshCw, Database, ArrowRight } from "lucide-react"

const methodologies = [
  {
    number: "01",
    icon: Users2,
    title: "Participatory",
    description: "Amplifying voices of communities, institutions, and stakeholders through inclusive engagement.",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Adaptive",
    description: "Flexible methodologies that evolve with context and learning, ensuring relevance and impact.",
  },
  {
    number: "03",
    icon: Database,
    title: "Evidence-Driven",
    description: "Rigorous data collection, analysis, and validation processes grounding all recommendations.",
  },
]

export function MethodologySection() {
  return (
    <section id="methodology" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-advanced opacity-70 animate-gradient-shift" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30 text-primary text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm">
            <RefreshCw className="h-4 w-4" />
            <span>Our Methodology</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 leading-tight">
            How We
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Create Impact
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Our methodology combines participatory approaches, adaptive frameworks, and rigorous evidence to deliver
            meaningful, sustainable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12 relative">
          <div className="hidden md:block absolute top-[120px] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {methodologies.map((method, index) => (
            <div key={index} className="relative" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="group bg-card/90 backdrop-blur-sm border-2 border-border rounded-3xl p-10 lg:p-12 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-transparent transition-all duration-500" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                </div>

                <div className="relative">
                  <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 bg-clip-text text-transparent mb-8 group-hover:scale-105 transition-transform">
                    {method.number}
                  </div>

                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-primary/40">
                    <method.icon className="h-10 w-10 text-primary" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6">
                    {method.description}
                  </p>

                  <div className="flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
