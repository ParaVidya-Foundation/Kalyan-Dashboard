"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import clsx from "clsx";

type Planet = {
  id: string;
  planetImg: string;
  perfumeImg: string;
  desc: string;
};

const DUMMY_PLANET = "/Perfume/Card/saturn.png";
const DUMMY_PERFUME = "/Perfume/Bottles/saturn.png";

const PLANETS: Planet[] = [
  { id: "sun", planetImg: DUMMY_PLANET, perfumeImg: DUMMY_PERFUME, desc: "Sun — Golden warmth in every note." },
  { id: "moon", planetImg: DUMMY_PLANET, perfumeImg: DUMMY_PERFUME, desc: "Moon — Calm whispers in silver light." },
  { id: "mars", planetImg: DUMMY_PLANET, perfumeImg: DUMMY_PERFUME, desc: "Mars — Flame of courage, scent of victory." },
  { id: "mercury", planetImg: DUMMY_PLANET, perfumeImg: DUMMY_PERFUME, desc: "Mercury — Quick thoughts, cool citrus." },
  { id: "jupiter", planetImg: DUMMY_PLANET, perfumeImg: DUMMY_PERFUME, desc: "Jupiter — Grandeur laced in calm sandalwood." },
  { id: "venus", planetImg: DUMMY_PLANET, perfumeImg: DUMMY_PERFUME, desc: "Venus — Love reborn in rose and velvet." },
  { id: "saturn", planetImg: DUMMY_PLANET, perfumeImg: DUMMY_PERFUME, desc: "Saturn — The scent of timeless strength." },
  { id: "rahu", planetImg: DUMMY_PLANET, perfumeImg: DUMMY_PERFUME, desc: "Rahu — Shadow’s fire, smoky mystery." },
];

export default function PerfumePlanet() {
  const [selected, setSelected] = useState<string>(PLANETS[0].id);
  const planet = useMemo(
    () => PLANETS.find((p) => p.id === selected)!,
    [selected]
  );
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload currently selected bottle image for snappier swap
  useEffect(() => {
    setIsLoaded(false);
    const img = new window.Image();
    img.src = planet.perfumeImg;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true);
  }, [planet]);

  // Subtle parallax for bottle - use section ref for stable scroll tracking
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 px-6 md:px-10 py-16 items-center">
        {/* LEFT: Planet Thumbnails (bigger, aligned) */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-7 md:gap-8 place-items-center">
            {PLANETS.map((p) => {
              const active = p.id === selected;
              return (
                <motion.button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className={clsx(
                    // bigger tiles; keep your aspect and rounded style
                    "relative aspect-[2/3] w-[120px] sm:w-[140px] md:w-[160px] rounded-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus:outline-none",
                    active
                      ? "ring-2 ring-amber-300 shadow-lg scale-[1.04]"
                      : "hover:shadow-md hover:ring-1 hover:ring-amber-200/40"
                  )}
                >
                  <Image
                    src={p.planetImg}
                    alt={`${p.id} planet`}
                    fill
                    sizes="(max-width:640px) 33vw, (max-width:1024px) 22vw, 160px"
                    className="object-cover rounded-xl"
                    priority={active}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Perfume Bottle Display (tidy alignment, proper shimmer layering) */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={planet.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.96 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.3, 1] }}
              className="relative w-[95%] md:w-[90%] h-[56vh] sm:h-[60vh] rounded-3xl overflow-hidden flex items-center justify-center bg-white/40 backdrop-blur-2xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            >
              {/* Bottle with subtle parallax */}
              <motion.div
                style={{ y }}
                className="relative w-[78%] h-full flex items-center justify-center"
              >
                <Image
                  src={planet.perfumeImg}
                  alt={`${planet.id} perfume`}
                  fill
                  sizes="(max-width:640px) 80vw, 420px"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Subtle reflection/shine */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />

              {/* Loading shimmer (scoped to the card only, proper z-index) */}
              {!isLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-r from-white/70 to-white/40 animate-pulse">
                  <span className="text-sm text-gray-600">Loading scent...</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Description */}
          <div className="mt-8 text-center">
            <motion.p
              key={planet.desc}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="font-playfair text-sm sm:text-base text-gray-700 italic tracking-tight"
            >
              {planet.desc}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
