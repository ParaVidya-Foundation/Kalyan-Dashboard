"use client";

import dynamic from "next/dynamic";
import PerfumePlanet from "@/components/store/Perfume/PerfumePlanet";
import PerfumeGrid from "@/components/store/Perfume/PerfumeGrid";

// 🚀 Lazy-load Silk background (GPU-optimized)
const Silk = dynamic(() => import("@/components/ui/bits/Silk").then(mod => mod.default), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#fdf6f1] animate-pulse" />,
});

export default function PerfumePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🌸 Smooth gradient silk background */}
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={3.2}           // gentle wave motion
          scale={1.15}          // fluid texture scale
          color="#FBE5C8"       // pastel base (soft peach-cream)
          noiseIntensity={1.35} // subtle silk shimmer
          rotation={0.2}        // slow swirl
        />
        {/* Gradient overlay for depth & warmth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 240, 210, 0.8) 0%, rgba(255, 230, 215, 0.85) 50%, rgba(255, 250, 240, 0.9) 100%)",
            mixBlendMode: "soft-light",
            animation: "bgShift 14s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* 🌍 Content above the silk */}
      <div className="relative z-10">
        <PerfumePlanet />

        <section className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-serif font-bold text-[#2f2b25] mb-6">
            Discover Your Signature Scent
          </h1>
          <p className="text-lg text-[#6c6258] max-w-2xl mx-auto leading-relaxed">
            Experience perfumes that define elegance — crafted with timeless artistry and a touch of luxury.
          </p>
        </section>

        <PerfumeGrid />
      </div>

      {/* 🌈 Gradient animation */}
      <style jsx>{`
        @keyframes bgShift {
          0% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(15deg) brightness(1.05);
          }
          100% {
            filter: hue-rotate(-10deg) brightness(0.98);
          }
        }
      `}</style>
    </div>
  );
}
