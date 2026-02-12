import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const floatingBadges = [
  { icon: MapPin, text: "Gilgit, Pakistan", color: "bg-indigo-500", delay: 0 },
  { icon: Star, text: "4.9 Rating", color: "bg-amber-500", delay: 0.3 },
  { icon: Sparkles, text: "AI Powered", color: "bg-blue-500", delay: 0.6 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/25 rounded-full blur-3xl animate-float [animation-delay:3s]" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-float [animation-delay:1.5s]" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full px-4 py-1.5 text-sm font-medium text-indigo-600 shadow-sm mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Powered by Advanced AI
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-gray-900 mb-6"
            >
              Plan Smarter.{" "}
              <span className="gradient-text">Travel</span>{" "}
              <br />
              <span className="gradient-text">Safer.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-lg"
            >
              AI-powered travel planner for personalized and safe trips. Get custom itineraries, budget estimates, and real-time safety alerts — all in one place.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/plan">
                <Button size="xl" className="w-full sm:w-auto gap-2 group">
                  Plan Your Trip
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/chat">
                <Button variant="outline" size="xl" className="w-full sm:w-auto gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  Try AI Chat
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              {[
                { value: "50K+", label: "Trips Planned" },
                { value: "120+", label: "Destinations" },
                { value: "4.9★", label: "Avg Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl shadow-indigo-100/50 p-6 ml-8">
              {/* Map Placeholder */}
              <div className="w-full h-56 bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 rounded-2xl mb-4 overflow-hidden relative">
                {/* Mountain SVG */}
                <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e0e7ff" />
                      <stop offset="100%" stopColor="#bfdbfe" />
                    </linearGradient>
                    <linearGradient id="mtnGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="mtnGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="200" fill="url(#skyGrad)" />
                  {/* Background mountains */}
                  <polygon points="300,200 160,60 20,200" fill="url(#mtnGrad2)" opacity="0.6" />
                  <polygon points="400,200 280,80 160,200" fill="url(#mtnGrad2)" opacity="0.5" />
                  {/* Main mountain */}
                  <polygon points="350,200 200,20 50,200" fill="url(#mtnGrad1)" />
                  {/* Snow cap */}
                  <polygon points="200,20 175,75 225,75" fill="white" opacity="0.9" />
                  {/* Trees */}
                  {[50, 80, 110, 290, 320, 350].map((x, i) => (
                    <polygon key={i} points={`${x},200 ${x - 8},175 ${x + 8},175`} fill="#4ade80" opacity="0.7" />
                  ))}
                  {/* Sun/Moon */}
                  <circle cx="340" cy="40" r="20" fill="#fbbf24" opacity="0.8" />
                  {/* Stars */}
                  {[60, 100, 150, 250, 310].map((x, i) => (
                    <circle key={i} cx={x} cy={[20, 35, 15, 25, 40][i]} r="2" fill="white" opacity="0.7" />
                  ))}
                </svg>

                {/* Route Dots */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${i < 3 ? "bg-indigo-500 flex-1" : "bg-indigo-200 flex-1"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Trip Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">Hunza Adventure Trip</p>
                    <p className="text-sm text-gray-500">7 days • June 2025</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                </div>
                <div className="flex gap-2">
                  {["Nature", "Mountains", "Adventure"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="text-sm text-gray-500">Estimated Budget</div>
                  <div className="font-bold text-indigo-600">PKR 45,000</div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + badge.delay, duration: 0.4 }}
                className={`absolute flex items-center gap-2 bg-white rounded-2xl px-3 py-2 shadow-lg border border-gray-100 text-sm font-medium text-gray-700 ${
                  i === 0 ? "-left-6 top-8" : i === 1 ? "-right-4 top-24" : "-left-4 bottom-16"
                }`}
              >
                <div className={`w-6 h-6 ${badge.color} rounded-lg flex items-center justify-center`}>
                  <badge.icon className="w-3.5 h-3.5 text-white" />
                </div>
                {badge.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
