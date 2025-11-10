"use client";

import React from "react";
import PerfumeCard, { Perfume } from "./PerfumeCard";
import { motion } from "framer-motion";

const perfumes: Perfume[] = [
  {
    id: 1,
    name: "Valentino",
    price: 15.0,
    images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"],
  },
  {
    id: 2,
    name: "Chanel N5",
    price: 22.0,
    images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"],
  },
  {
    id: 3,
    name: "Miss Dior",
    price: 20.0,
    images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"],
  },
  {
    id: 4,
    name: "Coco Chanel Paris",
    price: 16.0,
    images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"],
  },
  {
    id: 5,
    name: "Gucci Bloom",
    price: 19.0,
    images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"],
  },
  {
    id: 6,
    name: "Dior Homme",
    price: 25.0,
    images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"],
  },
  {
    id: 7,
    name: "Prada Infusion",
    price: 18.0,
    images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"],
  },
  {
    id: 8,
    name: "YSL Libre",
    price: 21.0,
    images: ["/Perfume/Bottles/check.webp", "/Perfume/Bottles/saturn.png"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const, // easeInOut cubic-bezier
    },
  },
};

export default function PerfumeGrid() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Our Finest Collection
          </h2>
          <p className="font-poppins text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover luxury fragrances crafted with timeless artistry
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {perfumes.map((perfume, index) => (
            <motion.div key={perfume.id} variants={itemVariants}>
              <PerfumeCard perfume={perfume} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
