"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { safeHref, cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface KundliButtonProps {
  name: string;
  href?: string;
  Icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  ariaLabel?: string;
  animated?: boolean;
  className?: string;
}

/**
 * KundliButton - A square card button with icon and text.
 * Features yellow theme, hover lift animation, and safe href handling.
 * 
 * @example
 * <KundliButton 
 *   name="D1 Chart" 
 *   href="/charts/d1" 
 *   Icon={Compass} 
 * />
 */
export default function KundliButton({
  name,
  href,
  Icon,
  ariaLabel,
  animated = true,
  className = "",
}: KundliButtonProps) {
  // Guaranteed safe href - always a string, never undefined
  const normalizedHref = React.useMemo(() => safeHref(href), [href]);

  // Fallback icon component (neutral placeholder)
  const FallbackIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
      viewBox="0 0 24 24" 
      width="32" 
      height="32" 
      fill="none" 
      aria-hidden="true"
      className={className}
    >
      <rect 
        x="3" 
        y="3" 
        width="18" 
        height="18" 
        rx="3" 
        stroke="currentColor" 
        strokeWidth="1.2" 
      />
      <path 
        d="M7 12h10" 
        stroke="currentColor" 
        strokeWidth="1.4" 
        strokeLinecap="round" 
      />
    </svg>
  );

  // Card content (static, no animation)
  const cardContent = (
    <div
      className={cn(
        "group cursor-pointer aspect-square rounded-xl",
        "bg-white/80 backdrop-blur-sm border border-yellow-200/40",
        "shadow-[0_4px_24px_rgba(255,244,194,0.15)]",
        "hover:shadow-[0_8px_32px_rgba(255,244,194,0.25)]",
        "flex flex-col items-center justify-center gap-4 p-6",
        "transition-all duration-300",
        className
      )}
      role="button"
      aria-label={ariaLabel ?? name}
    >
      {/* Icon container */}
      <div className="w-8 h-8 text-yellow-500 group-hover:text-yellow-600 transition-colors flex items-center justify-center">
        {Icon ? (
          <Icon className="w-8 h-8" />
        ) : (
          <FallbackIcon className="w-8 h-8" />
        )}
      </div>

      {/* Text label */}
      <span
        className="text-sm text-gray-900 tracking-wide font-[family:'Geist_Mono',monospace] text-center"
      >
        {name}
      </span>
    </div>
  );

  // Animated wrapper (motion.div inside Link, never animate Link itself)
  const animatedContent = animated ? (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
    >
      {cardContent}
    </motion.div>
  ) : (
    cardContent
  );

  // Link wrapper - href is guaranteed to be a string
  return (
    <Link 
      href={normalizedHref} 
      className="block"
      aria-label={ariaLabel ?? `${name} link`}
    >
      {animatedContent}
    </Link>
  );
}
