import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"
import LandingPage from "@/pages/LandingPage"
import PlanTripPage from "@/pages/PlanTripPage"
import ItineraryPage from "@/pages/ItineraryPage"
import ChatPage from "@/pages/ChatPage"
import Navbar from "@/components/Navbar"
import ScrollToTop from "@/components/ScrollToTop"

function ChatPageWrapper() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ChatPage />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plan" element={<PlanTripPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
        </Route>
        {/* Chat page has its own layout (no footer overlap with sticky input) */}
        <Route path="/chat" element={<ChatPageWrapper />} />
      </Routes>
    </Router>
  )
}
