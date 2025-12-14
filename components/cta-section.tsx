import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.35_0.15_158/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,oklch(0.55_0.12_158/0.06)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30 text-primary text-sm font-semibold mb-4 shadow-lg backdrop-blur-sm">
            <ArrowRight className="h-4 w-4" />
            <span>Partner With Excellence</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Your Institution?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed font-light">
            Partner with Aayareeb to build resilient governance frameworks, strengthen institutional capacity, and
            achieve sustainable development outcomes across the Horn of Africa.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-12 max-w-5xl mx-auto">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="text-5xl font-bold text-primary mb-4">50+</div>
              <div className="text-lg font-semibold mb-2">Projects Delivered</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Successful engagements across governance and institutional strengthening
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 hover:border-accent/40 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="text-5xl font-bold text-accent mb-4">15+</div>
              <div className="text-lg font-semibold mb-2">Partner Organizations</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trusted by government bodies, NGOs, and international organizations
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="text-5xl font-bold text-primary mb-4">5+</div>
              <div className="text-lg font-semibold mb-2">Countries Served</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Regional expertise spanning the Horn of Africa and beyond
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
