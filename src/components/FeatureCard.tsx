import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  iconBg: string
  delay?: number
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  iconBg,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <Card className={cn("relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group", gradient)}>
        <CardContent className="p-7">
          {/* Icon */}
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300", iconBg)}>
            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>

          {/* Decorative corner */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/30 dark:bg-white/10 group-hover:scale-150 transition-transform duration-500" />
        </CardContent>
      </Card>
    </motion.div>
  )
}
