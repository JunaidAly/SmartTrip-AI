import { Link } from "react-router-dom"
import { Plane, Github, Twitter, Mail, Heart } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Plan Trip", href: "/plan" },
    { label: "Itinerary", href: "/itinerary" },
    { label: "AI Chat", href: "/chat" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Safety Tips", href: "#" },
    { label: "Contact", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl text-white">
                SmartTrip <span className="text-indigo-400">AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered travel planning that helps you explore the world smarter, safer, and on your budget.
            </p>
            <div className="flex items-center gap-3">
              {[Github, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} SmartTrip AI. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for travelers worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
