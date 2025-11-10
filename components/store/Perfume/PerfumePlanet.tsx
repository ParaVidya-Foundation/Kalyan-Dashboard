"use client";

import React, { useEffect, useMemo, useState } from "react";
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
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(false);
    let isMounted = true;
    const img = new window.Image();
    img.src = planet.perfumeImg;
    img.onload = () => {
      if (isMounted) {
        setIsLoaded(true);
      }
    };
    img.onerror = () => {
      if (isMounted) {
        setIsLoaded(true); // Show image even on error to avoid stuck loading state
      }
    };
    return () => {
      isMounted = false;
      // Cleanup: abort image loading if possible
      img.src = '';
    };
  }, [planet]);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap");
        .mono {
          font-family: "JetBrains Mono", ui-monospace, Menlo, Monaco,
            "SF Mono", monospace;
        }
      `}</style>

      <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 px-6 py-10 items-center">
          {/* LEFT: Planet Thumbnails (4-row grid) */}
          <div className="lg:col-span-3 grid grid-cols-4 gap-6 place-items-center">
            {PLANETS.map((p) => {
              const active = p.id === selected;
              return (
                <motion.button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                  }}
                  className={clsx(
                    "relative w-[90px] sm:w-[100px] aspect-[2/3] rounded-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus:outline-none",
                    active
                      ? "ring-2 ring-amber-300 shadow-md scale-105"
                      : "hover:shadow-sm"
                  )}
                >
                  <Image
                    src={p.planetImg}
                    alt={`${p.id} planet`}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width:768px) 25vw, 90px"
                    priority={active}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: Perfume Bottle (larger focus) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={planet.id}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.94 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 1, 0.3, 1],
                }}
                className="relative w-[90%] h-[65vh] rounded-3xl overflow-hidden flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <motion.div
                  style={{ y }}
                  className="relative w-[80%] h-full flex items-center justify-center"
                >
                  <Image
                    src={planet.perfumeImg}
                    alt={`${planet.id} perfume`}
                    fill
                    sizes="(max-width:640px) 80vw, 350px"
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* Soft reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Loading shimmer */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-white/70 to-white/30 animate-pulse rounded-3xl">
                <span className="text-gray-500 mono text-sm">
                  Loading scent...
                </span>
              </div>
            )}

            {/* Poetic caption */}
            <div className="mt-8 text-center">
              <motion.p
                key={planet.desc}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="mono text-sm sm:text-base text-gray-700 italic tracking-tight"
              >
                {planet.desc}
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
