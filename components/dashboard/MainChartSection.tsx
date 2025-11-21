"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { KundliChart } from "@/components/charts/kundli-chart";
import { useKundliStore } from "@/lib/store";
import { GlowCard } from "@/components/ui/glow-card";
import { safeHref } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Compass, Home, Share2, Sparkles, Sun } from "lucide-react";

type ChartKey = "birthChart" | "navamsa" | "dashamsa";

interface ChartTool {
  name: string;
  href: string; // Required - never undefined
  Icon: LucideIcon;
}

interface ChartItem {
  key: ChartKey;
  title: string;
}

/**
 * ChartSection - Main dashboard section displaying Kundli charts and chart tools.
 * Features animated grid layouts with safe href handling and zero console warnings.
 */
export function ChartSection() {
  const { currentKundli } = useKundliStore();

  // Chart definitions
  const charts: ChartItem[] = [
    { key: "birthChart", title: "Birth Chart" },
    { key: "navamsa", title: "Navamsa Chart" },
    { key: "dashamsa", title: "Dashamsa Chart" },
  ];

  // Chart tools - href is REQUIRED (never undefined)
  const chartTools: ChartTool[] = [
    { name: "D1 - Lagna Chart", href: "/charts/d1", Icon: Compass },
    { name: "Planetary Positions", href: "/charts/planets", Icon: Sun },
    { name: "House Report", href: "/charts/houses", Icon: Home },
    { name: "Aspects & Conjunctions", href: "/charts/aspects", Icon: Share2 },
    { name: "Yogas & Doshas", href: "/charts/yogas", Icon: Sparkles },
  ];

  // Early return if no Kundli data
  if (!currentKundli) {
    return (
      <p className="text-center text-gray-500">No Kundli data available</p>
    );
  }

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* User Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {charts.map((chart, index) => (
          <motion.div
            key={chart.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <GlowCard glowIntensity="subtle" className="overflow-hidden">
              <div className="p-4 sm:p-6">
                <KundliChart
                  chartData={currentKundli.charts[chart.key]}
                  title={chart.title}
                  size="medium"
                />
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>

      {/* Chart Tools Grid */}
      <section className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {chartTools.map((tool, i) => {
            // Normalize href - guaranteed to be a string
            const normalizedHref = React.useMemo(
              () => safeHref(tool.href),
              [tool.href]
            );

            const { Icon, name } = tool;

            return (
              <Link 
                key={name} 
                href={normalizedHref} 
                className="block"
                aria-label={`${name} tool`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.36, delay: i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="
                    group cursor-pointer aspect-square rounded-xl 
                    bg-white/80 backdrop-blur-sm border border-yellow-200/40
                    shadow-[0_4px_24px_rgba(255,244,194,0.15)]
                    hover:shadow-[0_8px_32px_rgba(255,244,194,0.25)]
                    flex flex-col items-center justify-center gap-4 p-6
                    transition-all duration-300
                  "
                >
                  <Icon className="w-8 h-8 text-yellow-600 group-hover:text-yellow-700 transition-colors" />

                  <span className="text-sm text-gray-900 tracking-wide font-[family:'Geist_Mono',monospace] text-center">
                    {name}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}

// Export with original name for backward compatibility
export const Chartsection = ChartSection;
