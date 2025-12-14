import { BookOpen, Download, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const publications = [
  {
    title: "Governance Challenges in Fragile States: A Horn of Africa Perspective",
    type: "Research Paper",
    year: "2024",
    description:
      "Comprehensive analysis of institutional vulnerabilities and adaptive governance frameworks in post-conflict environments.",
    topics: ["Governance", "Institution Building", "Policy Analysis"],
  },
  {
    title: "Strategic MEL Frameworks for Development Organizations",
    type: "Best Practice Guide",
    year: "2023",
    description:
      "Practical guide for designing and implementing monitoring, evaluation, and learning systems in complex contexts.",
    topics: ["MEL", "Impact Measurement", "Organizational Development"],
  },
  {
    title: "Blue Economy Investment Opportunities in Somalia",
    type: "Policy Brief",
    year: "2023",
    description:
      "Evidence-based analysis of marine resource potential and strategic recommendations for sustainable economic development.",
    topics: ["Blue Economy", "Economic Development", "Policy Research"],
  },
  {
    title: "Building Capacity in Civil Society: Lessons from the Field",
    type: "Case Study Collection",
    year: "2022",
    description:
      "Documented insights from capacity strengthening programs across 15+ organizations, highlighting effective approaches.",
    topics: ["Capacity Building", "Civil Society", "Training & Development"],
  },
]

export function PublicationsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30 text-primary text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm">
            <BookOpen className="h-4 w-4" />
            <span>Knowledge & Insights</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 leading-tight">
            Research &
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Contributing to the knowledge base on governance, policy, and institutional development in emerging
            contexts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-500" />

              <CardContent className="p-8 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{pub.type}</span>
                    <span className="px-3 py-1 rounded-full bg-muted">{pub.year}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {pub.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{pub.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.topics.map((topic, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
