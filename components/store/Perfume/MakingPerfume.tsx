"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * MakingPerfume – parallax flowers + person/text rows
 * - Extreme-edge flowers with scroll parallax + idle float
 * - Two alternating rows (person + copy)
 * - No cloud borders (removed)
 * - Optimized Next/Image usage
 */
export default function MakingPerfume() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax is bound to this section for predictable motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle, luxury parallax amounts
  const yLeft = useTransform(scrollYProgress, [0, 1], ["-8vh", "8vh"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["8vh", "-8vh"]);
  const scaleLeft = useTransform(scrollYProgress, [0, 1], [1.02, 1.0]);
  const scaleRight = useTransform(scrollYProgress, [0, 1], [1.0, 1.02]);


  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-x-visible overflow-y-hidden font-sans"
      aria-label="Making Perfume"
    >
      {/* ==== CONTENT (kept above flowers) ==== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:py-28 lg:py-36">
        {/* Row 1 — Person left, text right */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <Image
              src="/Perfume/person.png"
              alt="Perfumer at work"
              width={960}
              height={1200}
              sizes="(max-width: 768px) 90vw, 40vw"
              className="h-auto w-full object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Making Perfume
            </h2>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-black/80">
              The craft of balancing top, heart, and base notes—creating a signature that feels uniquely yours.
            </p>
          </motion.div>
        </div>

        {/* Row 2 — Text left, person right (reverse) */}
        <div className="mt-24 grid grid-cols-1 items-center gap-10 md:mt-28 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-2 text-center md:order-1 md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              Select Your Perfume
            </h3>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-black/80">
              Explore refined blends—from bright citrus openings to warm, long-lasting ambers—curated for every mood and moment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="order-1 relative mx-auto w-full max-w-[560px] md:order-2"
          >
            <Image
              src="/Perfume/person.png"
              alt="Choose your perfume"
              width={960}
              height={1200}
              sizes="(max-width: 768px) 90vw, 40vw"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* ==== PARALLAX FLOWERS (extreme edges) ==== */}
      {/* Left flower (large) */}
      <motion.div
        style={{ y: yLeft, scale: scaleLeft }}
        className="pointer-events-none absolute left-[-12vw] top-[10vh] z-[2] select-none will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/Perfume/flower-1.png"
          alt=""
          width={1200}
          height={1500}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 44vw"
          className="w-[56vw] max-w-[880px] h-auto"
          priority
        />
      </motion.div>

      {/* Right flowers (stacked, different offsets so they don't overlap) */}
      <motion.div
        style={{ y: yRight, scale: scaleRight }}
        className="pointer-events-none absolute right-[-12vw] top-[18vh] z-[2] select-none will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/Perfume/flower-2.png"
          alt=""
          width={1200}
          height={1500}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 44vw"
          className="w-[52vw] max-w-[820px] h-auto"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        style={{ y: yRight, scale: scaleRight }}
        className="pointer-events-none absolute right-[-10vw] top-[48vh] z-[2] hidden md:block select-none will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/Perfume/flower-3.png"
          alt=""
          width={1050}
          height={1350}
          sizes="(max-width: 1024px) 58vw, 40vw"
          className="w-[40vw] max-w-[680px] h-auto"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        style={{ y: yRight, scale: scaleRight }}
        className="pointer-events-none absolute right-[-8vw] top-[72vh] z-[2] hidden lg:block select-none will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/Perfume/flower-4.png"
          alt=""
          width={900}
          height={1200}
          sizes="(max-width: 1280px) 42vw, 32vw"
          className="w-[32vw] max-w-[520px] h-auto"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
