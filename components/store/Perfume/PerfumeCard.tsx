"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Perfume {
  id: number;
  name: string;
  scentNotes: string;
  price: number;
  images: string[];
}

interface PerfumeCardProps {
  perfume: Perfume;
}

export default function PerfumeCard({ perfume }: PerfumeCardProps) {
  const [hover, setHover] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!hover || perfume.images.length <= 1) return;
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % perfume.images.length);
    }, 1300);
    return () => clearInterval(interval);
  }, [hover, perfume.images.length]);

  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/20 bg-white/10 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out"
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setImgIndex(0);
      }}
    >
      {/* IMAGE */}
      <div className="relative w-full h-80 overflow-hidden">
        {perfume.images.map((img, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            animate={{ opacity: imgIndex === idx ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={img}
              alt={`${perfume.name} ${idx + 1}`}
              fill
              className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              quality={90}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        ))}

        {/* CART BUTTON */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-3 right-3 w-10 h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center shadow-md hover:bg-white/70 transition-colors"
          aria-label="Add to cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </motion.button>
      </div>

      {/* CONTENT */}
      <div className="p-6 bg-white/20 backdrop-blur-xl rounded-b-3xl">
        <h3 className="text-gray-900 text-lg font-semibold mb-1">{perfume.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-700 text-sm">{perfume.scentNotes}</p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
              isFavorite ? "bg-pink-500" : "bg-white/30"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 ${
                isFavorite ? "text-white" : "text-pink-400"
              }`}
              fill={isFavorite ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </motion.button>
        </div>

        {/* BUY BUTTON + PRICE */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#000" }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 bg-gray-900 text-white text-sm font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md"
          >
            Buy Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <div className="bg-white/40 backdrop-blur-sm text-gray-900 font-semibold px-4 py-2.5 rounded-xl">
            ${perfume.price.toFixed(2)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
