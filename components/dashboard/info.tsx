"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, User } from "lucide-react"

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
    <Card className="w-full max-w-sm shadow-lg rounded-xl border border-gray-200">
      <CardContent className="p-5 space-y-3">
        {/* Name */}
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-bold">{name}</h2>
        </div>

        {/* DOB + TOB */}
        <div className="flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>{dateOfBirth}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span>{timeOfBirth}</span>
          </div>
        </div>

        {/* Place */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span>{placeOfBirth}</span>
        </div>
      </CardContent>
    </Card>
  )
}
