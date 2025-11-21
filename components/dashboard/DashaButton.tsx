"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DashaButton({
  name,
  href,
  Icon,
}: {
  name: string;
  href?: string;
  Icon: any;
}) {
  // Production-ready: Safe href ALWAYS returns a valid string
  // Handle all edge cases: undefined, null, empty string, whitespace-only
  const safeHref: string = (() => {
    if (href == null) return "#";
    if (typeof href !== "string") return "#";
    const trimmed = href.trim();
    return trimmed.length > 0 ? trimmed : "#";
  })();

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
      className="
        group cursor-pointer
        aspect-square rounded-xl
        bg-white/80 backdrop-blur-sm
        border border-yellow-200/40
        shadow-[0_4px_24px_rgba(255,244,194,0.15)]
        hover:shadow-[0_8px_32px_rgba(255,244,194,0.25)]
        transition-all duration-300
        flex flex-col items-center justify-center gap-4
        p-6
      "
    >
      <Link
        href={safeHref}
        className="flex flex-col items-center gap-4 text-center"
      >
        {/* ICON */}
        <Icon
          className="
            w-8 h-8 
            text-yellow-500
            group-hover:text-yellow-600
            transition-colors duration-300
          "
        />

        {/* LABEL */}
        <span
          className="
            text-sm text-gray-900 
            tracking-wide
            font-[family:'Geist_Mono',monospace]
          "
        >
          {name}
        </span>
      </Link>
    </motion.div>
  );
}
