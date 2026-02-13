import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Map,
  Wallet,
  Shield,
  Navigation,
  FileText,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
} from "lucide-react"
import HeroSection from "@/components/HeroSection"
import FeatureCard from "@/components/FeatureCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Map,
    title: "AI Trip Planner",
    description:
      "Generate complete day-by-day itineraries tailored to your interests, fitness level, and travel style using advanced AI.",
    gradient: "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-blue-950/50",
    iconBg: "bg-gradient-to-br from-indigo-600 to-blue-500",
  },
  {
    icon: Wallet,
    title: "Smart Budget Estimator",
    description:
      "Get accurate cost breakdowns including accommodation, food, transport, and activities for any destination.",
    gradient: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Safety Alerts",
    description:
      "Real-time safety advisories, altitude sickness warnings, and local emergency contacts for worry-free travel.",
    gradient: "bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/50 dark:to-pink-950/50",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
  },
  {
    icon: Navigation,
    title: "Interactive Travel Map",
    description:
      "Visualize your route, discover nearby attractions, and navigate with confidence using integrated maps.",
    gradient: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
]

const howItWorks = [
  {
    step: "01",
    icon: FileText,
    title: "Enter Trip Details",
    description:
      "Tell us your destination, dates, budget, and what kind of experiences you love.",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-900/30",
    border: "border-indigo-100 dark:border-indigo-800",
  },
  {
    step: "02",
    icon: Zap,
    title: "AI Generates Plan",
    description:
      "Our AI analyzes thousands of data points to craft a personalized, optimized itinerary in seconds.",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/30",
    border: "border-blue-100 dark:border-blue-800",
  },
  {
    step: "03",
    icon: Globe,
    title: "Explore Safely",
    description:
      "Get your full itinerary with safety tips, cost breakdown, maps, and the ability to chat with AI anytime.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    border: "border-emerald-100 dark:border-emerald-800",
  },
]

const testimonials = [
  {
    name: "Fatima Malik",
    handle: "@fatima_travels",
    text: "SmartTrip AI planned my entire Hunza trip in under 2 minutes! The budget breakdown was spot-on and the safety alerts kept me informed throughout.",
    avatar: "FM",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Usman Khan",
    handle: "@usmaan_explores",
    text: "I was skeptical at first, but the AI itinerary for Skardu and Deosai Plains was incredible. Every recommendation was perfectly aligned with my interests.",
    avatar: "UK",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "Ayesha Siddiqui",
    handle: "@ayesha_wanders",
    text: "As a solo female traveler in Gilgit-Baltistan, the safety features are a game-changer. Real-time alerts and emergency contacts gave me real peace of mind.",
    avatar: "AS",
    gradient: "from-emerald-500 to-teal-500",
  },
]

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="section-padding bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Everything You Need
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Smart features for{" "}
              <span className="gradient-text">smarter travel</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From AI-powered planning to real-time safety alerts, we've built everything you need for an unforgettable journey.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-indigo-50/50 dark:from-gray-950 dark:to-indigo-950/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              How it <span className="gradient-text">works</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Plan your perfect trip in three simple steps — no travel agent required.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-indigo-200 via-blue-200 to-emerald-200 dark:from-indigo-700 dark:via-blue-700 dark:to-emerald-700 z-0" />

            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative z-10"
              >
                <Card className={`border ${step.border} shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900`}>
                  <CardContent className="p-8 text-center">
                    <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm`}>
                      <step.icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    <div className={`text-xs font-bold ${step.color} mb-1 tracking-widest`}>
                      STEP {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Loved by <span className="gradient-text">travelers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t.handle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-indigo-900"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                Start for free today
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                Start planning your next
                <br />
                adventure today.
              </h2>
              <p className="text-indigo-200 text-lg mb-8 max-w-md mx-auto">
                Join thousands of smart travelers who plan smarter with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/plan">
                  <Button
                    variant="glass"
                    size="xl"
                    className="bg-white text-indigo-600 hover:bg-white/90 shadow-lg gap-2 font-bold"
                  >
                    Plan Your Trip
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button variant="glass" size="xl" className="gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Chat with AI
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
