"use client";

import PerfumePlanet from "@/components/store/Perfume/PerfumePlanet";
import PerfumeGrid from "@/components/store/Perfume/PerfumeGrid";
import MovingGradient from "@/components/store/Perfume/MovingGradient";
import MakingPerfume from "@/components/store/Perfume/MakingPerfume";
import Image from "next/image";

export default function PerfumePage() {
  return (
    <div
      className="relative w-full overflow-visible"
      style={
        {
          ["--header-h" as any]: "30px",
          ["--hero-h" as any]: "110vh",
        } as React.CSSProperties
      }
    >
      {/* ====================== GLOBAL BACKGROUND ====================== */}
      <div className="absolute inset-0 -z-10">
        <MovingGradient />
      </div>

      {/* =========================== HERO ============================= */}
      <section
        className="relative z-0 w-full pointer-events-none"
        style={{ marginTop: "var(--header-h)" }}
      >
        {/* HERO IMAGE */}
        <div className="relative h-[var(--hero-h)] w-full overflow-hidden">
          <Image
            src="/Perfume/PERFUME-PLATFORM.png"
            alt="Perfume Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* ====================== TOP BORDER (FIXED) ====================== */}
        <div className="absolute left-0 right-0 bottom-[-75px] z-[20] pointer-events-none">
          <div className="relative w-full h-[230px]">
            <Image
              src="/Perfume/Paper-Border.png"
              alt="Paper Border Over Hero"
              fill
              priority
              sizes="100vw"
              className="object-fill w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ================= CLOUD + MAKING PERFUME =================== */}

      <section className="relative w-full overflow-visible mt-[-10px] pb-[100px]">

        {/* CONTENT BLOCK */}
        <div className="relative z-[10]">
          <MakingPerfume />
        </div>

        {/* ====================== BOTTOM BORDER ====================== */}
        <div className="absolute inset-x-0 bottom-[-90px] z-[5] pointer-events-none rotate-180">
          <div className="relative w-full h-[230px]">
            <Image
              src="/Perfume/Paper-Border.png"
              alt="Bottom Paper Border"
              fill
              sizes="100vw"
              className="object-fill w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ======================= REST CONTENT ======================= */}

      <main className="relative z-20 flex flex-col items-center justify-center space-y-20 py-20">
        <PerfumePlanet />
        <PerfumeGrid />
      </main>
    </div>
  );
}
