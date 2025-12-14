import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function SectorsSection() {
  const sectors = [
    "Public Administration",
    "Healthcare",
    "Education",
    "Security & Justice",
    "Financial Services",
    "Infrastructure Development",
    "Agriculture & Food Security",
    "Climate & Environment",
    "Civil Society Organizations",
    "International Development",
  ]

  return (
    <section className="py-32 bg-[oklch(0.98_0.005_158)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Briefcase className="h-4 w-4" />
            <span>Sectors We Serve</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Cross-Sector
            <br />
            <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our deep expertise enables us to deliver tailored solutions across diverse industries and organizational
            contexts throughout the region.
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-lg border-2 border-primary/20 shadow-2xl">
          <CardContent className="p-12 md:p-16">
            <div className="flex flex-wrap gap-4 justify-center">
              {sectors.map((sector, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-6 py-3 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-pointer rounded-full"
                >
                  {sector}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
