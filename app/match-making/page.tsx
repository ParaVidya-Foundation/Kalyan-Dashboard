"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import MatchMaking, { PartnerFormData } from "@/components/forms/match-making-form"

export default function MatchMakingPage() {  // ✅ default export
  const handlePartnerSubmit = (data: PartnerFormData, partner: string) => {
    console.log(`${partner} Data:`, data)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-8">Match Making</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full max-w-5xl">
        {/* Partner 1 */}
        <MatchMaking
          title="Partner 1"
          defaultGender="male"
          onSubmit={(data) => handlePartnerSubmit(data, "Partner 1")}
        />

        {/* Animated Heart */}
        <motion.div
          className="flex justify-center text-5xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ❤️
        </motion.div>

        {/* Partner 2 */}
        <MatchMaking
          title="Partner 2"
          defaultGender="female"
          onSubmit={(data) => handlePartnerSubmit(data, "Partner 2")}
        />
      </div>

      <Button className="mt-8 px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-xl shadow-md text-white text-lg">
        Generate Match Report
      </Button>
    </div>
  )
}
