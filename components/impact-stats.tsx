"use client"

import { TrendingUp } from "lucide-react"

export function ImpactStats() {
  const stats = [
    {
      value: "50+",
      label: "Projects Delivered",
      description: "Across governance and research initiatives",
    },
    {
      value: "15+",
      label: "Partner Organizations",
      description: "Government agencies, NGOs, and international bodies",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      description: "Committed to excellence in every engagement",
    },
    {
      value: "5+",
      label: "Countries Served",
      description: "Somalia, Ethiopia, Kenya, and beyond",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            <span>Our Impact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Measurable Results
            <br />
            Across the Region
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Building capacity, strengthening institutions, and delivering measurable results across the Horn of Africa
            and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-8 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
            >
              <div className="text-6xl md:text-7xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xl font-bold mb-2">{stat.label}</div>
              <div className="text-sm text-primary-foreground/70 leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
