import { Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function PartnersSection() {
  const partnerTypes = [
    {
      category: "International Organizations",
      description:
        "We collaborate with multilateral development agencies and international financial institutions to deliver high-impact governance programs. Our partnerships bring together global expertise and local knowledge to achieve sustainable development outcomes.",
    },
    {
      category: "Government Agencies",
      description:
        "We work closely with federal ministries, regional administrations, and local government bodies to strengthen institutional capacity, improve service delivery, and advance governance reforms that benefit communities across the Horn of Africa.",
    },
    {
      category: "NGOs & Civil Society",
      description:
        "Our collaborative approach includes partnerships with international NGO consortiums, regional development networks, community-based organizations, and academic institutions to ensure inclusive, grassroots-informed governance solutions.",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-primary/5 via-surface to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,oklch(0.35_0.15_158/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,oklch(0.55_0.12_158/0.06)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30 text-primary text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm">
            <Handshake className="h-4 w-4" />
            <span>Our Partners</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 leading-tight">
            Collaborative
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Partnerships
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Working alongside leading organizations to drive governance excellence and institutional transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partnerTypes.map((type, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />

              <CardContent className="p-8 relative">
                <h3 className="text-2xl font-bold mb-6 text-primary">{type.category}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
