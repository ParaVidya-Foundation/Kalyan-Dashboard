"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChartStyleToggle } from "./ChartStyleToggle";
import { NorthIndianChart } from "./north/NorthIndianChart";
import { SouthIndianChart } from "./south/SouthIndianChart";

interface Planet {
  name: string;
  house: number;
  abbreviation: string;
}

interface ChartSwitcherProps {
  chart?: {
    planets?: Planet[];
    chartType?: string;
  };
}

export function ChartSwitcher({ chart }: ChartSwitcherProps) {
  const [chartStyle, setChartStyle] = useState<"north" | "south">("north");

  const planets = chart?.planets || [];
  const chartType = chart?.chartType || "D1";

  return (
    <div className="mb-16">
      {/* Header with Toggle */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 font-['Inter',system-ui,sans-serif]">
            Vedic Chart
          </h3>
          <p className="text-sm text-gray-500 font-['Inter',system-ui,sans-serif]">
            {chartStyle === "north" ? "North Indian Style" : "South Indian Style"}
          </p>
        </div>
        <ChartStyleToggle currentStyle={chartStyle} onToggle={setChartStyle} />
      </div>

      {/* Animated Chart Container */}
      <div className="relative bg-gradient-to-br from-yellow-50/30 via-white to-yellow-50/20 rounded-3xl border border-yellow-100/80 p-6 sm:p-12 shadow-[0_8px_32px_rgba(255,244,194,0.12)] min-h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={chartStyle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {chartStyle === "north" ? (
              <NorthIndianChart planets={planets} chartType={chartType} />
            ) : (
              <SouthIndianChart planets={planets} chartType={chartType} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer note */}
      <p className="text-xs text-gray-500 text-center mt-6 font-medium tracking-wide font-['Inter',system-ui,sans-serif]">
        {chartStyle === "north" 
          ? "North Indian Style • Lahiri Ayanamsha" 
          : "South Indian Style • Lahiri Ayanamsha"}
      </p>
    </div>
  );
}

