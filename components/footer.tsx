import { Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-[oklch(0.25_0.02_158)] text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wMiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Aayareeb</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6 max-w-md">
              Strategic advisory in governance excellence, policy research, and institutional transformation across the
              Horn of Africa. Building resilient institutions for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:aayareebconsulting@gmail.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#methodology" className="opacity-80 hover:opacity-100 transition-opacity hover:underline">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#experience" className="opacity-80 hover:opacity-100 transition-opacity hover:underline">
                  Past Work
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="leading-relaxed">
                Howlwadaag
                <br />
                Mogadishu, Somalia
              </li>
              <li className="pt-3">
                <a href="tel:+252612593026" className="hover:opacity-100 transition-opacity">
                  +252 612 593 026
                </a>
              </li>
              <li>
                <a href="tel:+252618677739" className="hover:opacity-100 transition-opacity">
                  +252 618 677 739
                </a>
              </li>
              <li className="pt-3">
                <a href="mailto:aayareebconsulting@gmail.com" className="hover:opacity-100 transition-opacity">
                  aayareebconsulting@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© {new Date().getFullYear()} Aayareeb. All rights reserved.</p>
          <p className="text-xs">Governance & Research | Strategic Advisory Excellence</p>
        </div>
      </div>
    </footer>
  )
}
