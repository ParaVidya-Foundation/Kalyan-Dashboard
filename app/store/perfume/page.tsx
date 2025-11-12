"use client";

import PerfumePlanet from "@/components/store/Perfume/PerfumePlanet";
import PerfumeGrid from "@/components/store/Perfume/PerfumeGrid";
import MovingGradient from "@/components/store/Perfume/MovingGradient";
import MakingPerfume from "@/components/store/Perfume/MakingPerfume";
import Image from "next/image";

export default function PerfumePage() {
  return (
    // Set header/hero heights once here
    <div
      className="relative w-full overflow-hidden"
      style={
        {
          // adjust as needed
          ["--header-h" as any]: "30px",
          ["--hero-h" as any]: "110vh",
        } as React.CSSProperties
      }
    >
      {/* Site-wide animated gradient (unchanged, bottom-most layer) */}
      <div className="absolute inset-0 -z-10">
        <MovingGradient />
      </div>

      {/* HERO — sits directly under header, full viewport height, no overlap */}
      <section
        className="relative z-0 w-full pointer-events-none"
        style={{ marginTop: "var(--header-h)" }}
      >
        <div className="relative h-[var(--hero-h)] w-full">
          <Image
            src="/Perfume/PERFUME-PLATFORM.png"
            alt="Perfume Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Cloud-bordered wrapper around MakingPerfume only */}
      <section className="relative w-full overflow-hidden">
        {/* Top Cloud Border */}
        <div className="absolute inset-x-0 top-0 z-[5] h-[180px] w-full pointer-events-none">
          <div className="relative h-full w-full">
            <Image
              src="/Perfume/cloud-border.png"
              alt="Top Cloud Border"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Main Content (above borders) */}
        <div className="relative z-[10]">
          <MakingPerfume />
        </div>

        {/* Bottom Cloud Border */}
        <div className="absolute inset-x-0 bottom-0 z-[5] h-[180px] w-full pointer-events-none rotate-180">
          <div className="relative h-full w-full">
            <Image
              src="/Perfume/cloud-border.png"
              alt="Bottom Cloud Border"
              fill
              sizes="100vw"
              className="object-cover object-bottom"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Rest of the content (already below hero, no extra padding needed) */}
      <main className="relative z-10 flex flex-col items-center justify-center space-y-20 py-20">
        <PerfumePlanet />
        <PerfumeGrid />
      </main>
    </div>
  );
}
