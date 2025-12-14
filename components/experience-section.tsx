import { Calendar, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    year: "2024",
    title: "Governance Assessments of Local Administrations in Jubaland",
    description: "Comprehensive governance assessments across multiple local administrations.",
  },
  {
    year: "2023",
    title: "Strategic Planning & Institutional Reform Policy - Ministry of Fisheries",
    description: "Developed strategic frameworks for institutional transformation and policy reform.",
  },
  {
    year: "2022",
    title: "Policy Research on Blue Economy Investment Opportunities",
    description: "Evidence-based research identifying strategic investment opportunities in the blue economy.",
  },
  {
    year: "2021",
    title: "Capacity Strengthening of Civil Society Organizations",
    description: "Multi-year program building organizational capacity across the civil society sector.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <CheckCircle2 className="h-4 w-4" />
            <span>Past Assignments</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Proven Track Record of
            <br />
            <span className="text-primary">Successful Engagements</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A history of impactful projects across governance, policy, and institutional development in the Horn of
            Africa.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-0 md:pl-24">
                <div className="absolute left-4 top-8 w-9 h-9 rounded-full bg-primary border-4 border-background shadow-lg hidden md:flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary-foreground animate-pulse" />
                </div>

                <div className="group bg-card border-2 border-border rounded-2xl p-8 md:p-10 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-x-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-lg">
                        <Calendar className="h-5 w-5" />
                        <span>{experience.year}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance group-hover:text-primary transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
