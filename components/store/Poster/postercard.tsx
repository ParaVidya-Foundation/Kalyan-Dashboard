"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Poster {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  images: string[];
}

interface PosterGridProps {
  posters: Poster[];
}

export default function PosterGrid({ posters }: PosterGridProps) {
  return (
    <section className="w-full py-20 bg-[#f9f9f9]">
      <div
        className="
          max-w-7xl mx-auto 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 xl:grid-cols-5 
          gap-10 px-6
        "
      >
        {posters.map((poster) => (
          <PosterCard key={poster.id} poster={poster} />
        ))}
      </div>
    </section>
  );
}

function PosterCard({ poster }: { poster: Poster }) {
  const [hover, setHover] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  /* Smooth image cycling on hover */
  useEffect(() => {
    if (!hover) return;
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % poster.images.length);
    }, 950);
    return () => clearInterval(interval);
  }, [hover, poster.images.length]);

  return (
    <div
      className="
        group relative bg-white rounded-xl cursor-pointer
        overflow-hidden
        shadow-[0_4px_18px_rgba(0,0,0,0.06)]
        hover:shadow-[0_10px_32px_rgba(0,0,0,0.12)]
        transition-all duration-500 ease-out will-change-transform
      "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setImgIndex(0);
      }}
    >
      {/* Image Block */}
      <div className="relative w-full h-[360px] overflow-hidden">
        <Image
          src={poster.images[imgIndex]}
          alt={poster.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="
            object-cover 
            transition-transform duration-[900ms] 
            group-hover:scale-[1.07]
          "
        />

        {/* Sale Badge (Minimal + Classy) */}
        {poster.oldPrice && (
          <span
            className="
              absolute top-3 left-3 
              px-3 py-1 rounded-full 
              bg-black/85 text-white text-[11px] font-medium
              tracking-wide 
              backdrop-blur-sm
              opacity-90 group-hover:opacity-100 
              transition-all duration-300
            "
          >
            SALE
          </span>
        )}
      </div>

      {/* Text Block */}
      <div className="p-4 text-center">
        <h3
          className="
            text-gray-900 text-sm font-semibold 
            tracking-wide mb-1 leading-tight
          "
        >
          {poster.title}
        </h3>

        <p className="text-gray-500 text-[11px] uppercase mb-3 tracking-widest">
          {poster.category}
        </p>

        {/* Price Section */}
        <div className="flex items-center justify-center gap-2">
          {poster.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ₹{poster.oldPrice}
            </span>
          )}

          <span className="text-gray-900 font-semibold text-base">
            From ₹{poster.price}
          </span>
        </div>
      </div>

      {/* Hover float effect */}
      <div
        className="
          absolute inset-0 
          rounded-xl pointer-events-none
          transition-all duration-500
          group-hover:-translate-y-[4px] 
        "
      />
    </div>
  );
}
