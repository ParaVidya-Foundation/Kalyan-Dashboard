"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, User } from "lucide-react"
import { GlowCard } from "@/components/ui/glow-card"

export interface KundliProfileProps {
  name: string
  dateOfBirth: string
  timeOfBirth: string 
  placeOfBirth: string 
}

export function KundliProfile({
  name,
  dateOfBirth,
  timeOfBirth,
  placeOfBirth,
}: KundliProfileProps) {
  return (
    <GlowCard glowIntensity="medium" className="w-full max-w-md">
      <div className="p-6 space-y-4">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
            <User className="w-5 h-5 text-yellow-700" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 font-[family:'Inter',sans-serif]">{name}</h2>
        </motion.div>

        {/* DOB + TOB */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2.5 text-sm text-gray-700 bg-gray-50/50 rounded-lg px-3 py-2.5"
          >
            <Calendar className="w-4 h-4 text-yellow-600" />
            <span className="font-medium">{dateOfBirth}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex items-center gap-2.5 text-sm text-gray-700 bg-gray-50/50 rounded-lg px-3 py-2.5"
          >
            <Clock className="w-4 h-4 text-yellow-600" />
            <span className="font-medium">{timeOfBirth}</span>
          </motion.div>
        </div>

        {/* Place */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2.5 text-sm text-gray-700 bg-gray-50/50 rounded-lg px-3 py-2.5"
        >
          <MapPin className="w-4 h-4 text-yellow-600" />
          <span className="font-medium">{placeOfBirth}</span>
        </motion.div>
      </div>
    </GlowCard>
  )
}
