"use client";

import React, { useState } from "react";
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
    <section className="w-full py-16 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4">
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

  // Cycle images smoothly
  React.useEffect(() => {
    if (!hover) return;
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % poster.images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [hover, poster.images.length]);

  return (
    <div
      className="group relative bg-white shadow-sm rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setImgIndex(0);
      }}
    >
      <div className="relative w-full h-80">
        <Image
          src={poster.images[imgIndex]}
          alt={poster.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full font-medium">
          Sale
        </span>
      </div>

      <div className="p-4 text-center">
        <h3 className="text-gray-900 text-sm font-semibold tracking-wide mb-1">
          {poster.title}
        </h3>
        <p className="text-gray-500 text-xs uppercase mb-2">
          {poster.category}
        </p>
        <div className="flex items-center justify-center gap-2">
          {poster.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              Rs. {poster.oldPrice}
            </span>
          )}
          <span className="text-gray-900 font-semibold text-base">
            From Rs. {poster.price}
          </span>
        </div>
      </div>
    </div>
  );
}
