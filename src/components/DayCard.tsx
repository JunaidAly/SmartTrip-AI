import { motion } from "framer-motion"
import {
  MapPin,
  Clock,
  DollarSign,
  AlertTriangle,
  Cloud,
  Utensils,
  Compass,
  Mountain,
  Heart,
  Building2,
  Bed,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { DayPlan, Activity } from "@/lib/dummy-data"
import { cn } from "@/lib/utils"

const activityIcons: Record<Activity["type"], typeof MapPin> = {
  sightseeing: MapPin,
  adventure: Compass,
  food: Utensils,
  culture: Building2,
  nature: Mountain,
  rest: Heart,
}

const activityColors: Record<Activity["type"], string> = {
  sightseeing: "bg-blue-100 text-blue-600",
  adventure: "bg-orange-100 text-orange-600",
  food: "bg-green-100 text-green-600",
  culture: "bg-purple-100 text-purple-600",
  nature: "bg-emerald-100 text-emerald-600",
  rest: "bg-pink-100 text-pink-600",
}

interface DayCardProps {
  day: DayPlan
  index: number
}

export default function DayCard({ day, index }: DayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex gap-4">
        {/* Timeline Indicator */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-200 flex-shrink-0">
            <span className="text-white font-black text-sm">{day.day}</span>
          </div>
          <div className="w-0.5 flex-1 bg-gradient-to-b from-indigo-200 to-transparent mt-2" />
        </div>

        {/* Card */}
        <Card className="flex-1 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 mb-6 overflow-hidden group">
          {/* Header Strip */}
          <div className="h-1 bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500 bg-[length:200%] animate-gradient-shift" />
          <CardContent className="p-6">
            {/* Day Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <h3 className="text-xl font-black text-gray-900">{day.location}</h3>
                </div>
                <p className="text-sm text-indigo-600 font-semibold">{day.theme}</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-xl">
                <DollarSign className="w-4 h-4" />
                <span className="font-bold text-sm">PKR {day.estimatedCost.toLocaleString("en-PK")}</span>
              </div>
            </div>

            {/* Activities */}
            <div className="space-y-2 mb-4">
              {day.activities.map((activity, i) => {
                const Icon = activityIcons[activity.type]
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0", activityColors[activity.type])}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-gray-700 flex-1">{activity.name}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activity.duration}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <span>{day.travelTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-7 h-7 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Bed className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <span className="line-clamp-1">{day.accommodation}</span>
              </div>
            </div>

            {/* Weather Note */}
            {day.weatherNote && (
              <div className="flex gap-2 mt-3 p-3 bg-blue-50 rounded-xl">
                <Cloud className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700">{day.weatherNote}</p>
              </div>
            )}

            {/* Safety Warnings */}
            {day.safetyWarnings && day.safetyWarnings.length > 0 && (
              <div className="mt-3 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">Safety Notes</span>
                </div>
                <ul className="space-y-1">
                  {day.safetyWarnings.map((warning, i) => (
                    <li key={i} className="text-xs text-amber-700 flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
