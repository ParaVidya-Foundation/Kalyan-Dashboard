"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface Perfume {
  id: number;
  name: string;
  price: number;
  images: string[];
}

interface PerfumeCardProps {
  perfume: Perfume;
}

export default function PerfumeCard({ perfume }: PerfumeCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Swap image on hover
  const handleMouseEnter = () => {
    if (perfume.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden
                 bg-white/30 backdrop-blur-xl border border-white/40
                 shadow-lg hover:shadow-2xl
                 transition-shadow duration-500 ease-in-out"
    >
      {/* Image Container */}
      <div className="relative w-full h-72 sm:h-80 md:h-[320px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white/20 to-white/5">
        <AnimatePresence mode="wait">
          {perfume.images.map((img, idx) => {
            if (idx !== currentImageIndex) return null;
            return (
              <motion.div
                key={`${perfume.id}-${idx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center p-6"
              >
                <Image
                  src={img}
                  alt={`${perfume.name} - View ${idx + 1}`}
                  fill
                  className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={idx === 0}
                  quality={90}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Favorite Heart Icon */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleFavorite}
          className="absolute top-4 right-4 z-10
                     w-10 h-10 rounded-full
                     bg-white/60 backdrop-blur-md
                     flex items-center justify-center
                     shadow-md hover:shadow-lg
                     transition-all duration-300 ease-in-out
                     border border-white/50"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-colors duration-300 ${
              isFavorite
                ? "fill-pink-500 text-pink-500"
                : "fill-none text-gray-600 hover:text-pink-400"
            }`}
            viewBox="0 0 24 24"
            strokeWidth={isFavorite ? 0 : 2}
            stroke="currentColor"
            initial={false}
            animate={{
              scale: isFavorite ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </motion.svg>
        </motion.button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-5 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border-t border-white/30">
        {/* Product Name */}
        <h3 className="font-playfair text-gray-900 text-xl font-semibold tracking-tight mb-3 text-center">
          {perfume.name}
        </h3>

        {/* Price and Add to Cart */}
        <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Price */}
          <div className="px-4 py-2.5 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-white/50">
            <span className="font-poppins text-gray-900 text-lg font-semibold">
              ${perfume.price.toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={{
              backgroundColor: "#1f2937",
              color: "#ffffff",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 sm:flex-none px-6 py-2.5
                       bg-white/80 backdrop-blur-sm
                       border border-gray-300/50
                       text-gray-900 rounded-lg
                       font-poppins font-medium text-sm
                       shadow-sm hover:shadow-md
                       transition-all duration-300 ease-in-out
                       whitespace-nowrap"
          >
            Add to cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
