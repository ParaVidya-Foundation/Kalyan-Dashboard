"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Orb from "@/components/ui/bits/orb";
import TestSection from "@/components/education/testsection";

export default function TestPage() {
  const orbRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  const handleHover = useCallback((state: boolean) => {
    setHovered(state);
    orbRef.current?.setHoverState?.(state);
  }, []);

  useEffect(() => {
    if (!orbRef.current) return;
    const intensity = hovered ? 1.2 : 0.5;
    orbRef.current.setIntensity?.(intensity);
  }, [hovered]);

  return (
    <>
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden 
                 bg-gradient-to-br from-[#fafafa] via-[#f6f6ff] to-[#fff] text-black font-[Inter]"
    >
      {/* Orb Background (Unchanged) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Orb
   
          hoverIntensity={0.8}
          rotateOnHover={true}
          hue={220}
          forceHoverState={hovered}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 select-none">
        {/* Tag */}
        <motion.div
          className="mb-6 rounded-full bg-white/70 backdrop-blur-md px-5 py-2 text-sm font-medium 
                     border border-gray-200 shadow-sm text-gray-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          🌞 AI-Powered Astrology Test
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl font-bold leading-tight max-w-2xl 
                     bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Unlock Your Cosmic Intelligence
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-600 max-w-md"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Your personalized AI astrology test reveals celestial patterns that shape your destiny.  
          Hover over the text and feel the orb respond ✨
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-400 
                       text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Get Started
          </button>
          <button
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold 
                       hover:bg-gray-100 transition-all shadow-sm"
          >
            Learn More
          </button>
        </motion.div>
      </div>

     
      
    </section>
    <div className="flex justify-center relative w-full">
          <TestSection onSubmitEmail={() => console.log("Email submitted")} />
        </div>
        </>
  );
}
