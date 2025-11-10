"use client";

import PerfumePlanet from "@/components/store/Perfume/PerfumePlanet";
import PerfumeGrid from "@/components/store/Perfume/PerfumeGrid";
import MovingGradient from "@/components/store/Perfume/MovingGradient";

export default function PerfumePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <MovingGradient />

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

      
    </div>
  );
}
