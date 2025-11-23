"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MatchMaking, { PartnerFormData } from "@/components/forms/match-making-form";
import MovingGradient from "@/components/store/Perfume/MovingGradient";

export default function MatchMakingPage() {
  /** Handle partner submission */
  const handlePartnerSubmit = (data: PartnerFormData, partner: string) => {
    console.log(`${partner} Data:`, data);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">

      {/* === BACKGROUND MOVING GRADIENT (BEST PRACTICE) === */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <MovingGradient />
      </div>

      {/* === PAGE TITLE === */}
      <h1 className="text-3xl font-bold mb-8 z-10">Match Making</h1>

      {/* === MATCH MAKING GRID === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full max-w-5xl z-10">
        
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

      {/* === CTA BUTTON === */}
      <Button className="mt-8 px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-xl shadow-md text-white text-lg z-10">
        Generate Match Report
      </Button>
    </div>
  );
}
