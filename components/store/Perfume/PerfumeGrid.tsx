"use client";

import React from "react";
import PerfumeCard from "./PerfumeCard";

interface Perfume {
  id: number;
  name: string;
  scentNotes: string;
  price: number;
  images: string[];
  bgGradient: string;
  cardBgColor: string;
}

const perfumes: Perfume[] = [
  {
    id: 1,
    name: "Noir Mystique",
    scentNotes: "Oud, Bergamot, Amber",
    price: 120.0,
    images: [
      "/perfume/perfume-1-1.webp",
      "/perfume/perfume-1-2.webp",
      "/perfume/perfume-1-3.webp",
    ],
    bgGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)",
    cardBgColor: "#1e3a8a",
  },
  {
    id: 2,
    name: "Rose Élégance",
    scentNotes: "Rose, Jasmine, Vanilla",
    price: 95.0,
    images: [
      "/perfume/perfume-2-1.webp",
      "/perfume/perfume-2-2.webp",
    ],
    bgGradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbcfe8 100%)",
    cardBgColor: "#ec4899",
  },
  {
    id: 3,
    name: "Amber Luxe",
    scentNotes: "Amber, Sandalwood, Musk",
    price: 135.0,
    images: [
      "/perfume/perfume-3-1.webp",
      "/perfume/perfume-3-2.webp",
      "/perfume/perfume-3-3.webp",
    ],
    bgGradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)",
    cardBgColor: "#d97706",
  },
  {
    id: 4,
    name: "Crystal Essence",
    scentNotes: "Lily, Peony, White Musk",
    price: 110.0,
    images: [
      "/perfume/perfume-4-1.webp",
      "/perfume/perfume-4-2.webp",
    ],
    bgGradient: "linear-gradient(135deg, #64748b 0%, #94a3b8 50%, #cbd5e1 100%)",
    cardBgColor: "#64748b",
  },
  {
    id: 5,
    name: "Ocean Breeze",
    scentNotes: "Aquatic, Citrus, Mint",
    price: 88.0,
    images: [
      "/perfume/perfume-5-1.webp",
      "/perfume/perfume-5-2.webp",
      "/perfume/perfume-5-3.webp",
    ],
    bgGradient: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)",
    cardBgColor: "#0ea5e9",
  },
  {
    id: 6,
    name: "Velvet Noir",
    scentNotes: "Patchouli, Vanilla, Tonka",
    price: 145.0,
    images: [
      "/perfume/perfume-6-1.webp",
      "/perfume/perfume-6-2.webp",
    ],
    bgGradient: "linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)",
    cardBgColor: "#1f2937",
  },
  {
    id: 7,
    name: "Azure Dream",
    scentNotes: "Blue Lotus, Waterlily, Musk",
    price: 105.0,
    images: [
      "/perfume/perfume-7-1.webp",
      "/perfume/perfume-7-2.webp",
      "/perfume/perfume-7-3.webp",
    ],
    bgGradient: "linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)",
    cardBgColor: "#0891b2",
  },
  {
    id: 8,
    name: "Raspberry Royale",
    scentNotes: "Raspberry, Rose, Sugar",
    price: 98.0,
    images: [
      "/perfume/perfume-8-1.webp",
      "/perfume/perfume-8-2.webp",
    ],
    bgGradient: "linear-gradient(135deg, #f43f5e 0%, #fb7185 50%, #fda4af 100%)",
    cardBgColor: "#f43f5e",
  },
  {
    id: 9,
    name: "Golden Hour",
    scentNotes: "Honey, Tobacco, Leather",
    price: 128.0,
    images: [
      "/perfume/perfume-9-1.webp",
      "/perfume/perfume-9-2.webp",
      "/perfume/perfume-9-3.webp",
    ],
    bgGradient: "linear-gradient(135deg, #78350f 0%, #92400e 50%, #a16207 100%)",
    cardBgColor: "#78350f",
  },
  {
    id: 10,
    name: "Lavender Fields",
    scentNotes: "Lavender, Bergamot, Cedar",
    price: 92.0,
    images: [
      "/perfume/perfume-10-1.webp",
      "/perfume/perfume-10-2.webp",
    ],
    bgGradient: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #c4b5fd 100%)",
    cardBgColor: "#7c3aed",
  },
  {
    id: 11,
    name: "Midnight Bloom",
    scentNotes: "Jasmine, Gardenia, Suede",
    price: 115.0,
    images: [
      "/perfume/perfume-11-1.webp",
      "/perfume/perfume-11-2.webp",
      "/perfume/perfume-11-3.webp",
    ],
    bgGradient: "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #a78bfa 100%)",
    cardBgColor: "#581c87",
  },
  {
    id: 12,
    name: "Sunset Glow",
    scentNotes: "Mandarin, Neroli, Amber",
    price: 102.0,
    images: [
      "/perfume/perfume-12-1.webp",
      "/perfume/perfume-12-2.webp",
    ],
    bgGradient: "linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)",
    cardBgColor: "#ea580c",
  },
];

export default function PerfumeGrid() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {perfumes.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </section>
  );
}


