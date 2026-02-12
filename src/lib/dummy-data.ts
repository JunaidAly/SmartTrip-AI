export interface Activity {
  name: string
  duration: string
  type: "sightseeing" | "adventure" | "food" | "culture" | "nature" | "rest"
}

export interface DayPlan {
  day: number
  location: string
  theme: string
  activities: Activity[]
  estimatedCost: number
  travelTime: string
  accommodation: string
  safetyWarnings?: string[]
  weatherNote?: string
}

export interface ItineraryData {
  destination: string
  totalDays: number
  totalBudget: number
  travelMonth: string
  fitnessLevel: string
  interests: string[]
  days: DayPlan[]
}

export const dummyItinerary: ItineraryData = {
  destination: "Manali, Himachal Pradesh",
  totalDays: 7,
  totalBudget: 45000,
  travelMonth: "June",
  fitnessLevel: "Moderate",
  interests: ["Nature", "Mountains", "Adventure"],
  days: [
    {
      day: 1,
      location: "Delhi → Manali",
      theme: "Arrival & Acclimatization",
      activities: [
        { name: "Overnight bus/flight to Manali", duration: "12 hrs", type: "rest" },
        { name: "Check-in at hotel & rest", duration: "2 hrs", type: "rest" },
        { name: "Evening walk at Mall Road", duration: "2 hrs", type: "sightseeing" },
        { name: "Local dinner at Old Manali", duration: "1 hr", type: "food" },
      ],
      estimatedCost: 5000,
      travelTime: "12–14 hrs from Delhi",
      accommodation: "The Lazy Dog, Old Manali (₹1,800/night)",
      weatherNote: "Expect cool temperatures 10–18°C. Carry a light jacket.",
    },
    {
      day: 2,
      location: "Solang Valley",
      theme: "Snow & Adventure",
      activities: [
        { name: "Zorbing & Paragliding", duration: "3 hrs", type: "adventure" },
        { name: "Snow point visit", duration: "2 hrs", type: "nature" },
        { name: "Picnic lunch in meadows", duration: "1 hr", type: "food" },
        { name: "Return to Manali & relax", duration: "2 hrs", type: "rest" },
      ],
      estimatedCost: 4500,
      travelTime: "45 mins from Manali",
      accommodation: "Same as Day 1",
      safetyWarnings: ["Stay on marked trails", "Wear proper snow boots"],
    },
    {
      day: 3,
      location: "Rohtang Pass",
      theme: "High Altitude Adventure",
      activities: [
        { name: "Early morning drive to Rohtang (3978m)", duration: "2 hrs", type: "adventure" },
        { name: "Snow activities & photography", duration: "3 hrs", type: "nature" },
        { name: "Lunch at local dhaba", duration: "1 hr", type: "food" },
        { name: "Drive back via Kothi viewpoint", duration: "3 hrs", type: "sightseeing" },
      ],
      estimatedCost: 6000,
      travelTime: "2 hrs from Manali",
      accommodation: "Same as Day 1",
      safetyWarnings: ["AMS risk — no exertion", "Carry oxygen can if prone to altitude sickness", "Permit required (₹500 per vehicle)"],
      weatherNote: "Temperature drops to 0–5°C. Warm layers essential.",
    },
    {
      day: 4,
      location: "Kasol & Kheerganga",
      theme: "Hippie Vibes & Trek",
      activities: [
        { name: "Drive to Kasol", duration: "3 hrs", type: "sightseeing" },
        { name: "Explore Kasol village & cafés", duration: "2 hrs", type: "culture" },
        { name: "Short trek to Kheerganga hot springs", duration: "4 hrs", type: "adventure" },
        { name: "Overnight camping at Kheerganga", duration: "Eve", type: "rest" },
      ],
      estimatedCost: 5500,
      travelTime: "3 hrs from Manali",
      accommodation: "Camping at Kheerganga (₹400/night)",
      safetyWarnings: ["Trek only in daylight", "Register at forest check-post"],
    },
    {
      day: 5,
      location: "Kheerganga → Manali",
      theme: "Hot Springs & Return",
      activities: [
        { name: "Morning dip in natural hot springs", duration: "1 hr", type: "rest" },
        { name: "Trek back to Kasol", duration: "3 hrs", type: "adventure" },
        { name: "Lunch at Parvati Café", duration: "1 hr", type: "food" },
        { name: "Drive back to Manali", duration: "3 hrs", type: "rest" },
      ],
      estimatedCost: 4000,
      travelTime: "Trek 3 hrs + drive 3 hrs",
      accommodation: "Mountain View Hostel, Manali (₹1,200/night)",
    },
    {
      day: 6,
      location: "Naggar & Great Himalayan NP",
      theme: "Culture & Nature",
      activities: [
        { name: "Visit Naggar Castle (14th century)", duration: "2 hrs", type: "culture" },
        { name: "Nicholas Roerich Art Gallery", duration: "1 hr", type: "culture" },
        { name: "Nature walk in apple orchards", duration: "2 hrs", type: "nature" },
        { name: "Evening bonfire at camp", duration: "2 hrs", type: "rest" },
      ],
      estimatedCost: 3500,
      travelTime: "25 km from Manali",
      accommodation: "Same as Day 5",
      weatherNote: "Pleasant day temperature 15–22°C. Great for outdoor activities.",
    },
    {
      day: 7,
      location: "Manali → Delhi",
      theme: "Farewell & Departure",
      activities: [
        { name: "Last morning at Mall Road", duration: "2 hrs", type: "sightseeing" },
        { name: "Shopping for local handicrafts & pashmina", duration: "1 hr", type: "culture" },
        { name: "Lunch at Johnson's Café", duration: "1 hr", type: "food" },
        { name: "Evening bus/flight to Delhi", duration: "12 hrs", type: "rest" },
      ],
      estimatedCost: 5000,
      travelTime: "12 hrs to Delhi",
      accommodation: "In transit",
    },
  ],
}

export const mockChatResponses: Record<string, string> = {
  default: "I'd be happy to help you plan your trip! Could you tell me more about your destination, dates, and what kind of experience you're looking for?",
  budget: "Based on your budget, I recommend focusing on mid-range accommodations and local street food for an authentic experience while keeping costs down. For a 7-day trip to Manali, expect to spend around ₹25,000–₹45,000 per person including travel.",
  safety: "Great question about safety! Always register with local police in remote trekking areas, carry a first-aid kit, share your itinerary with family, and download offline maps. Avoid solo trekking in unfamiliar terrain.",
  best_time: "The best time to visit depends on your preferences. For snow activities, visit December–February. For trekking and pleasant weather, June–September is ideal. Avoid the monsoon peak (late July–August) in high-altitude areas.",
  packing: "Essential packing list for mountain travel: Layered clothing (thermal + fleece + waterproof jacket), sturdy trekking shoes, sunscreen SPF 50+, sunglasses, water purification tablets, portable charger, and prescription medicines.",
}

export interface ChatMessage {
  id: string
  role: "user" | "ai"
  content: string
  timestamp: Date
}

export const initialChatMessages: ChatMessage[] = [
  {
    id: "1",
    role: "ai",
    content: "👋 Hi! I'm your SmartTrip AI assistant. I can help you plan personalized trips, estimate budgets, suggest safe routes, and answer any travel questions. Where would you like to go? ✈️",
    timestamp: new Date(),
  },
]
