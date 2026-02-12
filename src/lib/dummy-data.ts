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
  destination: "Hunza Valley, Gilgit-Baltistan",
  totalDays: 7,
  totalBudget: 45000,
  travelMonth: "June",
  fitnessLevel: "Moderate",
  interests: ["Nature", "Mountains", "Adventure"],
  days: [
    {
      day: 1,
      location: "Islamabad → Gilgit",
      theme: "Arrival & Acclimatization",
      activities: [
        { name: "Flight/drive from Islamabad to Gilgit", duration: "1 hr flight / 14 hrs drive", type: "rest" },
        { name: "Check-in at hotel & rest", duration: "2 hrs", type: "rest" },
        { name: "Evening walk at Gilgit Bazaar", duration: "2 hrs", type: "sightseeing" },
        { name: "Local dinner at Gilgit Serena", duration: "1 hr", type: "food" },
      ],
      estimatedCost: 5000,
      travelTime: "1 hr by flight from Islamabad",
      accommodation: "Gilgit Serena Hotel (PKR 8,000/night)",
      weatherNote: "Expect cool temperatures 12–20°C. Carry a light jacket.",
    },
    {
      day: 2,
      location: "Attabad Lake",
      theme: "Turquoise Waters & Boat Ride",
      activities: [
        { name: "Boat ride on Attabad Lake", duration: "2 hrs", type: "adventure" },
        { name: "Swimming & photography at lakeshore", duration: "2 hrs", type: "nature" },
        { name: "Picnic lunch by the lake", duration: "1 hr", type: "food" },
        { name: "Return to Hunza & relax", duration: "2 hrs", type: "rest" },
      ],
      estimatedCost: 4500,
      travelTime: "1 hr from Hunza",
      accommodation: "Same as Day 1",
      safetyWarnings: ["Stay away from unstable lakeshore edges", "Wear life jackets on boat rides"],
    },
    {
      day: 3,
      location: "Khunjerab Pass",
      theme: "Rooftop of the World",
      activities: [
        { name: "Early morning drive to Khunjerab Pass (4693m)", duration: "3 hrs", type: "adventure" },
        { name: "Photography at Pakistan–China border", duration: "2 hrs", type: "nature" },
        { name: "Lunch at Sost bazaar", duration: "1 hr", type: "food" },
        { name: "Drive back via Passu Cones viewpoint", duration: "3 hrs", type: "sightseeing" },
      ],
      estimatedCost: 6000,
      travelTime: "3 hrs from Hunza",
      accommodation: "Same as Day 1",
      safetyWarnings: ["AMS risk — no exertion", "Carry oxygen can if prone to altitude sickness", "Permit required (PKR 500 per vehicle)"],
      weatherNote: "Temperature drops to 0–5°C. Warm layers essential.",
    },
    {
      day: 4,
      location: "Passu & Shimshal",
      theme: "Glacier Hike & Village Life",
      activities: [
        { name: "Drive to Passu village", duration: "1 hr", type: "sightseeing" },
        { name: "Hike to Passu Glacier", duration: "4 hrs", type: "adventure" },
        { name: "Visit Passu Cones & suspension bridge", duration: "2 hrs", type: "nature" },
        { name: "Overnight stay in Passu guesthouse", duration: "Eve", type: "rest" },
      ],
      estimatedCost: 5500,
      travelTime: "1 hr from Hunza",
      accommodation: "Passu Tourist Inn (PKR 2,500/night)",
      safetyWarnings: ["Trek only in daylight", "Inform locals before glacier hike"],
    },
    {
      day: 5,
      location: "Passu → Hunza",
      theme: "Scenic Drive & Cherry Blossoms",
      activities: [
        { name: "Morning walk through apricot orchards", duration: "1 hr", type: "nature" },
        { name: "Drive along Karakoram Highway", duration: "2 hrs", type: "sightseeing" },
        { name: "Lunch at a local Hunza café", duration: "1 hr", type: "food" },
        { name: "Explore Karimabad bazaar", duration: "2 hrs", type: "culture" },
      ],
      estimatedCost: 4000,
      travelTime: "2 hrs drive",
      accommodation: "Eagles Nest Hotel, Duikar (PKR 4,000/night)",
    },
    {
      day: 6,
      location: "Altit & Baltit Fort",
      theme: "History & Culture",
      activities: [
        { name: "Visit Baltit Fort (700+ years old)", duration: "2 hrs", type: "culture" },
        { name: "Explore Altit Fort & old village", duration: "2 hrs", type: "culture" },
        { name: "Hunza traditional food experience", duration: "1 hr", type: "food" },
        { name: "Sunset view from Eagles Nest", duration: "2 hrs", type: "nature" },
      ],
      estimatedCost: 3500,
      travelTime: "15 min from Karimabad",
      accommodation: "Same as Day 5",
      weatherNote: "Pleasant day temperature 18–25°C. Great for outdoor activities.",
    },
    {
      day: 7,
      location: "Hunza → Islamabad",
      theme: "Farewell & Departure",
      activities: [
        { name: "Last morning at Karimabad viewpoint", duration: "1 hr", type: "sightseeing" },
        { name: "Shopping for dried fruits, gemstones & handicrafts", duration: "1 hr", type: "culture" },
        { name: "Lunch at Café de Hunza", duration: "1 hr", type: "food" },
        { name: "Flight/drive back to Islamabad", duration: "1–14 hrs", type: "rest" },
      ],
      estimatedCost: 5000,
      travelTime: "1 hr by flight to Islamabad",
      accommodation: "In transit",
    },
  ],
}

export const mockChatResponses: Record<string, string> = {
  default: "I'd be happy to help you plan your trip! Could you tell me more about your destination, dates, and what kind of experience you're looking for?",
  budget: "Based on your budget, I recommend focusing on mid-range accommodations and local food for an authentic experience while keeping costs down. For a 7-day trip to Hunza, Gilgit-Baltistan, expect to spend around PKR 25,000–PKR 45,000 per person including travel.",
  safety: "Great question about safety! Always register with local police in remote trekking areas, carry a first-aid kit, share your itinerary with family, and download offline maps. Avoid solo trekking in unfamiliar terrain.",
  best_time: "The best time to visit Hunza depends on your preferences. For cherry blossoms, visit March–April. For trekking and pleasant weather, June–September is ideal. Avoid winter (November–February) when roads may be blocked by snow.",
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
