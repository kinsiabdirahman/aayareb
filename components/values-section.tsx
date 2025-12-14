import { Shield, Award, Zap, Handshake, TrendingUp, Target } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Unwavering commitment to honesty and ethical practice in all engagements.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "Excellence in every engagement and deliverable we produce.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Progressive thinking and adaptive methodologies for complex challenges.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Strategic partnerships and inclusive approaches to problem-solving.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Measurable results that drive meaningful, sustainable change.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Unwavering dedication to delivering the highest quality outcomes.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-primary-foreground/10 rounded-full blur-[100px] animate-float" />
      <div
        className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect-premium text-primary-foreground text-sm font-semibold mb-8 shadow-2xl">
            <Award className="h-4 w-4" />
            <span>Our Core Values</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-8 leading-tight">
            Principles That
            <br />
            Guide Our Work
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed font-light">
            The foundation of our commitment to excellence in governance and institutional transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/15 backdrop-blur-md rounded-3xl p-8 lg:p-10 hover:bg-primary-foreground/25 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-primary-foreground/30 hover:border-primary-foreground/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
              </div>

              <div className="relative w-20 h-20 rounded-2xl bg-primary-foreground/30 backdrop-blur-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <value.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="relative text-2xl lg:text-3xl font-bold mb-4 text-primary-foreground">{value.title}</h3>
              <p className="relative text-base lg:text-lg text-primary-foreground/95 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
