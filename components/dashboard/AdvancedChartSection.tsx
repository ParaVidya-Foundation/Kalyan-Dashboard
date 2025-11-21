"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Dna,
  Wrench,
  Users,
} from "lucide-react";

export function AdvancedChartSection() {
  const tools = [
    { name: "Life Prediction Chart", href: "/advanced/life-prediction", icon: Sparkles },
    { name: "Cosmic DNA Chart", href: "/advanced/cosmic-dna", icon: Dna },
    { name: "Rectification Tools", href: "/advanced/rectification", icon: Wrench },
    { name: "Famous Comparison", href: "/advanced/celebrity-compare", icon: Users },
  ];

  return (
    <section className="w-full py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-4 sm:gap-6 max-w-7xl mx-auto
        "
      >
        {tools.map((tool, index) => (
          <motion.a
            key={index}
            href={tool.href || "#"}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="
              group cursor-pointer aspect-square 
              rounded-xl bg-white/80 backdrop-blur-sm
              border border-yellow-200/40
              shadow-[0_4px_24px_rgba(255,244,194,0.15)]
              hover:shadow-[0_8px_32px_rgba(255,244,194,0.25)]
              flex flex-col items-center justify-center 
              gap-4 p-6 transition-all duration-300
            "
          >
            <tool.icon className="w-8 h-8 text-yellow-600 group-hover:text-yellow-700 transition-colors" />

            <span
              className="
                text-sm text-gray-900 
                tracking-wide font-[family:'Geist_Mono',monospace]
                text-center
              "
            >
              {tool.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
