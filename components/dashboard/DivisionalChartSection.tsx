"use client";

import { motion } from "framer-motion";
import {
  PanelTop,
  PanelRight,
  PanelLeft,
  Square,
  Grid3X3,
  LayoutGrid,
  AppWindow,
  Grid,
  Layers,
  Boxes,
  SquareStack,
  Shield,
  Component,
  Frame,
} from "lucide-react";

export function DivisionalChartSection() {
  const divisionalCharts = [
    { name: "D2 - Hora", href: "/charts/d2", icon: PanelTop },
    { name: "D3 - Drekkana", href: "/charts/d3", icon: PanelRight },
    { name: "D4 - Chaturthamsa", href: "/charts/d4", icon: PanelLeft },
    { name: "D7 - Saptamsa", href: "/charts/d7", icon: Square },
    { name: "D9 - Navamsa", href: "/charts/d9", icon: Grid3X3 },
    { name: "D10 - Dasamsa", href: "/charts/d10", icon: LayoutGrid },
    { name: "D12 - Dwadashamsa", href: "/charts/d12", icon: AppWindow },
    { name: "D16 - Kalamsa", href: "/charts/d16", icon: Grid },
    { name: "D20 - Vimsamsa", href: "/charts/d20", icon: Layers },
    { name: "D24 - Chaturvimshamsa", href: "/charts/d24", icon: Boxes },
    { name: "D30 - Trimshamsa", href: "/charts/d30", icon: SquareStack },
    { name: "D45 - Akshavedamsa", href: "/charts/d45", icon: Shield },
    { name: "D60 - Shashtiamsa", href: "/charts/d60", icon: Component },
  ];

  return (
    <section className="w-full py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto"
      >
        {divisionalCharts.map((chart, index) => (
          <motion.a
            key={chart.name}
            href={chart.href || "#"}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="
              group cursor-pointer aspect-square
              rounded-xl bg-white/80 backdrop-blur-sm
              border border-yellow-200/40
              shadow-[0_4px_24px_rgba(255,244,194,0.15)]
              hover:shadow-[0_8px_32px_rgba(255,244,194,0.25)]
              flex flex-col items-center justify-center gap-4 p-6
              transition-all duration-300
            "
          >
            <chart.icon className="w-8 h-8 text-yellow-600 group-hover:text-yellow-700 transition-colors" />

            <span className="
              text-sm text-gray-900 
              tracking-wide font-[family:'Geist_Mono',monospace]
              text-center
            ">
              {chart.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
