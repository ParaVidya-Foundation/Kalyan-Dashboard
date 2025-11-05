"use client";

import MovingGradient from "@/components/store/Perfume/MovingGradient";
import PerfumePlanet from "@/components/store/Perfume/PerfumePlanet";

export default function PerfumePage() {
  return (
    <div className="relative min-h-screen">
      <MovingGradient />
      
      <div className="relative z-10">
        <PerfumePlanet />
        
        {/* Add more sections */}
        <section className="container mx-auto px-4 py-20">
          {/* Your content */}
        </section>
        
        <section className="container mx-auto px-4 py-20">
          {/* More content */}
        </section>
      </div>
    </div>
  );
}  