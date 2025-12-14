import { Target, Eye, Lightbulb, Award, Globe, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[oklch(0.98_0.005_158)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>About Aayareeb</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Pioneering Governance
            <br />
            <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded in 2020, we are dedicated to advancing governance excellence and institutional transformation across
            the Horn of Africa through evidence-based solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Mission card */}
          <Card className="md:col-span-2 p-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:border-primary/40 transition-all">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-2xl">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the premier partner for institutions seeking to build resilient, transparent, and effective
                  governance frameworks powered by evidence-based research and local expertise.
                </p>
              </div>
            </div>
          </Card>

          {/* Stats card */}
          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="text-6xl font-bold mb-3">2020</div>
            <div className="text-lg opacity-90">Established in Mogadishu</div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <Globe className="h-8 w-8 mb-2 opacity-80" />
              <div className="text-sm opacity-90">Horn of Africa Focus</div>
            </div>
          </Card>

          {/* Vision card */}
          <Card className="p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 hover:border-accent/40 transition-all">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-bold text-2xl">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Resilient governance through institutional empowerment, strengthening organizations across emerging
                contexts.
              </p>
            </div>
          </Card>

          {/* Approach card */}
          <Card className="md:col-span-2 p-8 bg-gradient-to-br from-background to-secondary/30">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-2xl">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We combine local knowledge with international best practices, delivering tailored advisory solutions
                that empower institutions to achieve sustainable transformation and lasting impact.
              </p>
              <div className="flex gap-3 pt-4">
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Evidence-Based
                </div>
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Context-Aware
                </div>
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Impact-Driven
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Expert Team</h3>
            <p className="text-muted-foreground leading-relaxed">
              Multidisciplinary professionals with deep regional expertise and international experience
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Regional Focus</h3>
            <p className="text-muted-foreground leading-relaxed">
              Specialized knowledge of Horn of Africa contexts, challenges, and opportunities
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Proven Results</h3>
            <p className="text-muted-foreground leading-relaxed">
              Track record of successful projects delivering measurable governance improvements
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
