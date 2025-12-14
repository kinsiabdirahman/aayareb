import { GraduationCap, Users, Globe, Award, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TeamSection() {
  const teamHighlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "Team holds advanced degrees from prestigious institutions including Harvard, Oxford, and regional universities",
    },
    {
      icon: Users,
      title: "Multidisciplinary Expertise",
      description: "Specialists in governance, economics, public policy, law, social sciences, and project management",
    },
    {
      icon: Globe,
      title: "International Experience",
      description:
        "Worked with UN agencies, World Bank, bilateral donors, and international NGOs across multiple countries",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Decades of combined experience delivering high-impact projects in challenging environments",
    },
  ]

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            <span>Our Team</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Expert Team
            <br />
            <span className="text-primary">Driving Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A multidisciplinary team of governance experts, researchers, and development professionals committed to
            institutional excellence across the Horn of Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {teamHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />

              <CardHeader className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed text-base">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-background border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

          <CardContent className="p-12 md:p-16 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Leadership</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">20+ Years Combined Expertise</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our leadership team brings over 20 years of combined experience in governance reform, institutional
              development, and research methodology. We blend deep contextual understanding of the Horn of Africa with
              international best practices to deliver transformative results for our clients.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
