import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  MapPin,
  Calendar,
  Wallet,
  Mountain,
  Waves,
  Landmark,
  Compass,
  Activity,
  Loader2,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const interests = [
  { id: "nature", label: "Nature", icon: Waves },
  { id: "mountains", label: "Mountains", icon: Mountain },
  { id: "culture", label: "Culture", icon: Landmark },
  { id: "adventure", label: "Adventure", icon: Compass },
  { id: "wellness", label: "Wellness", icon: Activity },
  { id: "food", label: "Food & Cuisine", icon: Sparkles },
]

const fitnessLevels = [
  { value: "easy", label: "Easy", desc: "Light walking, no strenuous activity" },
  { value: "moderate", label: "Moderate", desc: "Regular walking, some hills" },
  { value: "challenging", label: "Challenging", desc: "Long hikes, active days" },
  { value: "extreme", label: "Extreme", desc: "High altitude, demanding treks" },
]

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

const popularDestinations = ["Manali", "Leh-Ladakh", "Spiti Valley", "Rishikesh", "Kerala", "Goa", "Rajasthan"]

interface FormData {
  destination: string
  days: number
  budget: number
  interests: string[]
  fitnessLevel: string
  travelMonth: string
  travelersCount: number
}

export default function PlanTripPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [loadingStep, setLoadingStep] = useState(0)
  const [form, setForm] = useState<FormData>({
    destination: "",
    days: 7,
    budget: 30000,
    interests: [],
    fitnessLevel: "",
    travelMonth: "",
    travelersCount: 2,
  })

  const loadingMessages = [
    "Analyzing destination data...",
    "Crafting personalized itinerary...",
    "Calculating budget breakdown...",
    "Adding safety insights...",
    "Finalizing your trip plan...",
  ]

  const toggleInterest = (id: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.destination || !form.fitnessLevel || !form.travelMonth) return

    setIsLoading(true)
    for (let i = 0; i < loadingMessages.length; i++) {
      setLoadingStep(i)
      await new Promise((r) => setTimeout(r, 800))
    }
    setIsLoading(false)
    navigate("/itinerary")
  }

  const isFormValid = form.destination && form.fitnessLevel && form.travelMonth

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Planning
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
            Plan Your <span className="gradient-text">Dream Trip</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Tell us about your dream journey and our AI will craft a perfect itinerary in seconds.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-24"
            >
              <div className="relative w-24 h-24 mb-8">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-indigo-100"
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-t-indigo-600 border-r-transparent border-b-transparent border-l-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Creating Your Itinerary</h3>
              <motion.p
                key={loadingStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-500 text-sm"
              >
                {loadingMessages[loadingStep]}
              </motion.p>
              <div className="flex gap-2 mt-6">
                {loadingMessages.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i <= loadingStep ? "bg-indigo-600 w-8" : "bg-indigo-100 w-4"
                    )}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
            >
              <Card className="border border-indigo-50 shadow-xl shadow-indigo-50/50 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600 bg-[length:200%] animate-gradient-shift" />
                <CardHeader className="pb-0 pt-8 px-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                    Trip Details
                  </CardTitle>
                  <CardDescription>Fill in your preferences to get a personalized itinerary</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  {/* Section 1: Destination & Basics */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Destination */}
                    <div className="sm:col-span-2 space-y-2">
                      <Label htmlFor="destination" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                        Destination *
                      </Label>
                      <Input
                        id="destination"
                        placeholder="e.g. Manali, Himachal Pradesh"
                        value={form.destination}
                        onChange={(e) => setForm({ ...form, destination: e.target.value })}
                        className="h-12 text-base"
                        required
                      />
                      {/* Popular Destinations */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {popularDestinations.map((dest) => (
                          <button
                            key={dest}
                            type="button"
                            onClick={() => setForm({ ...form, destination: dest })}
                            className={cn(
                              "text-xs px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer font-medium",
                              form.destination === dest
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "border-gray-200 text-gray-500 hover:border-indigo-300 hover:text-indigo-600"
                            )}
                          >
                            {dest}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Days */}
                    <div className="space-y-2">
                      <Label htmlFor="days" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        Number of Days
                      </Label>
                      <div className="relative">
                        <Input
                          id="days"
                          type="number"
                          min={1}
                          max={30}
                          value={form.days}
                          onChange={(e) => setForm({ ...form, days: parseInt(e.target.value) || 1 })}
                          className="h-12 text-base pr-16"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">
                          days
                        </span>
                      </div>
                    </div>

                    {/* Travelers */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700">Travelers</Label>
                      <Select
                        value={String(form.travelersCount)}
                        onValueChange={(v) => setForm({ ...form, travelersCount: parseInt(v) })}
                      >
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                            <SelectItem key={n} value={String(n)}>
                              {n} {n === 1 ? "person" : "people"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Budget Slider */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Wallet className="w-3.5 h-3.5 text-indigo-500" />
                        Budget per Person
                      </Label>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black gradient-text">
                          ₹{form.budget.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                    <Slider
                      min={5000}
                      max={200000}
                      step={1000}
                      value={[form.budget]}
                      onValueChange={([val]) => setForm({ ...form, budget: val })}
                      className="py-2"
                    />
                    <div className="flex justify-between text-xs text-gray-400 font-medium">
                      <span>₹5,000 (Budget)</span>
                      <span>₹1,00,000+ (Luxury)</span>
                    </div>
                    {/* Budget Labels */}
                    <div className="flex gap-2 flex-wrap">
                      {[
                        { label: "Budget", min: 5000, max: 20000 },
                        { label: "Mid-Range", min: 20001, max: 60000 },
                        { label: "Luxury", min: 60001, max: 200000 },
                      ].map((tier) => (
                        <Badge
                          key={tier.label}
                          variant={form.budget >= tier.min && form.budget <= tier.max ? "indigo" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setForm({ ...form, budget: Math.round((tier.min + tier.max) / 2) })}
                        >
                          {tier.label}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-700">
                      Interests{" "}
                      <span className="text-gray-400 font-normal">(select all that apply)</span>
                    </Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {interests.map((interest) => {
                        const isSelected = form.interests.includes(interest.id)
                        return (
                          <motion.button
                            key={interest.id}
                            type="button"
                            whileTap={{ scale: 0.96 }}
                            onClick={() => toggleInterest(interest.id)}
                            className={cn(
                              "flex items-center gap-3 p-3.5 rounded-xl border-2 text-sm font-medium transition-all duration-200 text-left",
                              isSelected
                                ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                : "border-gray-200 bg-white text-gray-600 hover:border-indigo-200 hover:bg-indigo-50/50"
                            )}
                          >
                            <div className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                              isSelected ? "bg-indigo-600" : "bg-gray-100"
                            )}>
                              <interest.icon className={cn("w-4 h-4", isSelected ? "text-white" : "text-gray-500")} />
                            </div>
                            {interest.label}
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Fitness Level & Travel Month */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Fitness Level */}
                    <div className="space-y-3">
                      <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-indigo-500" />
                        Fitness Level *
                      </Label>
                      <div className="grid grid-cols-2 gap-2">
                        {fitnessLevels.map((level) => (
                          <label
                            key={level.value}
                            className={cn(
                              "flex flex-col p-3 rounded-xl border-2 cursor-pointer transition-all duration-200",
                              form.fitnessLevel === level.value
                                ? "border-indigo-500 bg-indigo-50"
                                : "border-gray-200 hover:border-indigo-200"
                            )}
                          >
                            <input
                              type="radio"
                              name="fitnessLevel"
                              value={level.value}
                              checked={form.fitnessLevel === level.value}
                              onChange={() => setForm({ ...form, fitnessLevel: level.value })}
                              className="sr-only"
                            />
                            <span className={cn(
                              "text-sm font-semibold",
                              form.fitnessLevel === level.value ? "text-indigo-700" : "text-gray-700"
                            )}>
                              {level.label}
                            </span>
                            <span className="text-xs text-gray-400 mt-0.5 leading-tight">{level.desc}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Travel Month */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        Travel Month *
                      </Label>
                      <Select
                        value={form.travelMonth}
                        onValueChange={(v) => setForm({ ...form, travelMonth: v })}
                      >
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select month" />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {/* Info Box */}
                      <div className="flex gap-2 p-3 bg-blue-50 rounded-xl mt-3">
                        <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-700 leading-relaxed">
                          Travel month affects weather conditions, crowd levels, and available activities at your destination.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Button
                        type="submit"
                        size="xl"
                        disabled={!isFormValid}
                        className="w-full text-base font-bold gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Generating Your Itinerary...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5" />
                            Generate AI Itinerary
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                    <p className="text-center text-xs text-gray-400 mt-3">
                      Takes about 5 seconds • No account required
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
