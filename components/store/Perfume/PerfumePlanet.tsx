"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, useScroll } from "framer-motion";
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
  { id: "ketu", planetImg: DUMMY_PLANET, perfumeImg: DUMMY_PERFUME, desc: "Ketu — Silent musk of the mystic path." },
];

export default function PerfumePlanet() {
  const [selected, setSelected] = useState<string>(PLANETS[0].id);
  const planet = useMemo(() => PLANETS.find((p) => p.id === selected)!, [selected]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // smooth image preloading
  useEffect(() => {
    setIsLoaded(false);
    const img = new window.Image();
    img.src = planet.perfumeImg;
    img.onload = () => setIsLoaded(true);
  }, [planet]);

  // motion parallax effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-10 px-6 py-10 items-center">
        {/* LEFT SIDE: PLANET CARDS */}
        <div className="lg:col-span-3">
          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-3 gap-4">
            {PLANETS.map((p) => {
              const active = p.id === selected;
              return (
                <motion.button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                  className={clsx(
                    "relative rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus:outline-none",
                    active ? "ring-4 ring-amber-200/60 shadow-lg" : "hover:shadow-md"
                  )}
                >
                  <div className="relative aspect-[2/3] w-full">
                    <Image
                      src={p.planetImg}
                      alt={`${p.id} planet`}
                      fill
                      className="object-cover"
                      sizes="33vw"
                      priority={active}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Scroll */}
          <div className="sm:hidden -mx-4 px-4 overflow-x-auto no-scrollbar">
            <div className="flex gap-4">
              {PLANETS.map((p) => {
                const active = p.id === selected;
                return (
                  <motion.button
                    key={p.id}
                    onClick={() => setSelected(p.id)}
                    whileHover={{ scale: 1.03 }}
                    className={clsx(
                      "min-w-[180px] rounded-2xl overflow-hidden transition-all duration-500 flex-shrink-0",
                      active ? "ring-4 ring-amber-200/60 shadow-lg" : "hover:shadow-md"
                    )}
                  >
                    <div className="relative w-[180px] aspect-[2/3]">
                      <Image src={p.planetImg} alt={p.id} fill className="object-cover" />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: PERFUME HERO */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={planet.id}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.97 }}
              transition={{
                duration: 1.1,
                ease: [0.45, 0.05, 0.15, 1], // cinematic curve
              }}
              className="relative w-full h-[70vh] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-amber-100/60 to-white/80 flex items-center justify-center"
            >
              {/* Parallax perfume bottle */}
              <motion.div style={{ y }} className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={planet.perfumeImg}
                  alt={`${planet.id} perfume`}
                  fill
                  sizes="(max-width:640px) 90vw, 320px"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Fade gradient overlay for luxury feel */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Loading shimmer */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-white/70 to-white/30 animate-pulse">
              <span className="text-gray-500">Loading scent...</span>
            </div>
          )}

          {/* Short poetic description */}
          <div className="mt-6 text-center">
            <motion.p
              key={planet.desc}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-gray-700 italic"
            >
              {planet.desc}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
