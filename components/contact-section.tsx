import { MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[oklch(0.98_0.005_158)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            <span>Contact Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Let's Start a
            <br />
            <span className="text-primary">Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to advance your governance objectives? Let's discuss how we can support your institutional
            transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-6">
            <Card className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />
              <CardContent className="flex items-start gap-6 p-8 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Address</h3>
                  <p className="text-muted-foreground text-lg">Howlwadaag, Mogadishu, Somalia</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />
              <CardContent className="flex items-start gap-6 p-8 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Phone</h3>
                  <p className="text-muted-foreground text-lg">+252 612 593 026</p>
                  <p className="text-muted-foreground text-lg">+252 618 677 739</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />
              <CardContent className="flex items-start gap-6 p-8 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-muted-foreground text-lg">aayareebconsulting@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-background border-2 border-primary/20 shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

            <CardContent className="p-10 md:p-12 relative flex-1 flex flex-col">
              <h3 className="text-3xl font-bold mb-8">Why Choose Aayareeb?</h3>
              <ul className="space-y-5 flex-1">
                {[
                  "Proven expertise in governance and applied research",
                  "Deep local knowledge blended with international perspectives",
                  "Multidisciplinary experts with contextual insights",
                  "Innovative, adaptive, and practical methodologies",
                  "Strong commitment to integrity and measurable results",
                  "Strategic partnerships across sectors",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
