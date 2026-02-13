import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  MapPin,
  Calendar,
  Wallet,
  Download,
  Edit3,
  TrendingDown,
  Share2,
  ChevronDown,
  Star,
  Users,
  ArrowLeft,
  Mountain,
  Navigation,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import DayCard from "@/components/DayCard"
import { dummyItinerary } from "@/lib/dummy-data"

export default function ItineraryPage() {
  const [showMap, setShowMap] = useState(false)
  const itinerary = dummyItinerary

  const totalCost = itinerary.days.reduce((sum, d) => sum + d.estimatedCost, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-950 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/plan"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Planning
          </Link>
        </motion.div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 rounded-3xl p-8 md:p-10 mb-8 overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-indigo-900"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

          {/* Mountain SVG in corner */}
          <div className="absolute top-4 right-4 opacity-20">
            <Mountain className="w-32 h-32 text-white" />
          </div>

          <div className="relative">
            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-300 fill-amber-300" />
              ))}
              <span className="text-white/70 text-sm ml-2">AI-Curated Itinerary</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
              {itinerary.destination}
            </h1>
            <p className="text-indigo-200 mb-6 text-lg">
              Your personalized {itinerary.totalDays}-day adventure
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Calendar, label: "Duration", value: `${itinerary.totalDays} Days` },
                { icon: Wallet, label: "Total Budget", value: `PKR ${totalCost.toLocaleString("en-PK")}` },
                { icon: MapPin, label: "Travel Month", value: itinerary.travelMonth },
                { icon: Users, label: "Fitness", value: itinerary.fitnessLevel },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/15 backdrop-blur-sm rounded-2xl p-3">
                  <stat.icon className="w-4 h-4 text-indigo-200 mb-1.5" />
                  <p className="text-xs text-indigo-300">{stat.label}</p>
                  <p className="text-white font-bold text-sm">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Interest Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {itinerary.interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant="glass"
                size="sm"
                className="bg-white text-indigo-700 hover:bg-white/90 font-bold gap-2"
              >
                <Edit3 className="w-4 h-4" />
                Edit Trip
              </Button>
              <Button variant="glass" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Button variant="glass" size="sm" className="gap-2">
                <TrendingDown className="w-4 h-4" />
                Make Cheaper
              </Button>
              <Button variant="glass" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Timeline — Main Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">Day-by-Day Plan</h2>
              <Badge variant="indigo" className="text-xs">
                {itinerary.days.length} Days
              </Badge>
            </motion.div>

            {itinerary.days.map((day, i) => (
              <DayCard key={day.day} day={day} index={i} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Budget Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border border-gray-100 dark:border-gray-800 shadow-sm sticky top-24">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-indigo-600" />
                    Budget Breakdown
                  </h3>
                  <div className="space-y-3 mb-4">
                    {itinerary.days.map((day) => (
                      <div key={day.day} className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-indigo-400" />
                          Day {day.day}
                        </span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          PKR {day.estimatedCost.toLocaleString("en-PK")}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900 dark:text-white">Total</span>
                      <span className="font-black text-lg gradient-text">
                        PKR {totalCost.toLocaleString("en-PK")}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Per person estimate</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
                <div
                  className="cursor-pointer"
                  onClick={() => setShowMap(!showMap)}
                >
                  <div className="p-4 flex items-center justify-between bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-indigo-600" />
                      Route Map
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform ${showMap ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
                {showMap && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    className="overflow-hidden"
                  >
                    {/* Map Placeholder */}
                    <div className="w-full h-56 bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 relative">
                      <svg viewBox="0 0 300 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                        <defs>
                          <linearGradient id="mapSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#e0e7ff" />
                            <stop offset="100%" stopColor="#bfdbfe" />
                          </linearGradient>
                        </defs>
                        <rect width="300" height="200" fill="url(#mapSkyGrad)" />
                        {/* Grid lines */}
                        {[0, 50, 100, 150, 200, 250].map((x) => (
                          <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#c7d2fe" strokeWidth="0.5" opacity="0.5" />
                        ))}
                        {[0, 40, 80, 120, 160].map((y) => (
                          <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#c7d2fe" strokeWidth="0.5" opacity="0.5" />
                        ))}
                        {/* Route */}
                        <polyline points="30,170 80,120 140,80 200,100 260,60" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6,3" />
                        {/* Location pins */}
                        {[
                          { x: 30, y: 170, label: "Islamabad", color: "#10b981" },
                          { x: 80, y: 120, label: "Gilgit", color: "#6366f1" },
                          { x: 140, y: 80, label: "Hunza", color: "#6366f1" },
                          { x: 200, y: 100, label: "Passu", color: "#6366f1" },
                          { x: 260, y: 60, label: "Khunjerab", color: "#ef4444" },
                        ].map((pin) => (
                          <g key={pin.label}>
                            <circle cx={pin.x} cy={pin.y} r="6" fill={pin.color} stroke="white" strokeWidth="2" />
                            <text x={pin.x} y={pin.y - 10} textAnchor="middle" fontSize="7" fill="#374151" fontWeight="600">
                              {pin.label}
                            </text>
                          </g>
                        ))}
                      </svg>
                      <div className="absolute bottom-3 left-3 right-3 text-center">
                        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block">
                          📍 Interactive map coming soon
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border border-gray-100 dark:border-gray-800 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">Trip Summary</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Safety Warnings", value: `${itinerary.days.filter(d => d.safetyWarnings?.length).length} days`, color: "text-amber-600" },
                      { label: "Activity Types", value: "6 varied", color: "text-indigo-600" },
                      { label: "Accommodations", value: `${new Set(itinerary.days.map(d => d.accommodation)).size} places`, color: "text-blue-600" },
                      { label: "Total Activities", value: `${itinerary.days.reduce((sum, d) => sum + d.activities.length, 0)} activities`, color: "text-emerald-600" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center text-sm">
                        <span className="text-gray-500 dark:text-gray-400">{stat.label}</span>
                        <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
