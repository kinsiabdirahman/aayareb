import { CheckCircle2, Target } from "lucide-react"

export function ApproachSection() {
  const principles = [
    {
      title: "Context-Specific Solutions",
      description:
        "No one-size-fits-all. We design interventions tailored to your unique organizational context and challenges.",
    },
    {
      title: "Collaborative Partnerships",
      description: "We work alongside your team, building internal capacity while delivering immediate value.",
    },
    {
      title: "Evidence-Based Insights",
      description: "Every recommendation is grounded in rigorous research, data analysis, and proven methodologies.",
    },
    {
      title: "Long-Term Impact Focus",
      description:
        "We prioritize sustainable solutions that create lasting institutional change beyond project timelines.",
    },
    {
      title: "Adaptive Implementation",
      description:
        "Our flexible approach evolves with emerging insights and changing circumstances throughout engagement.",
    },
    {
      title: "Measurable Results",
      description: "Clear metrics, transparent reporting, and accountability drive every aspect of our work.",
    },
  ]

  return (
    <section className="py-32 bg-[oklch(0.98_0.005_158)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Target className="h-4 w-4" />
              <span>Our Approach</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              Strategic Solutions for
              <br />
              <span className="text-primary">Real-World Impact</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              We combine rigorous methodology with practical experience to deliver governance solutions that work in
              real-world conditions and create lasting transformation.
            </p>

            <div className="flex items-center gap-4">
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="text-sm text-muted-foreground font-medium">Proven Excellence Since 2020</span>
            </div>
          </div>

          <div className="grid gap-4">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group flex gap-4 bg-card p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-x-1"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
