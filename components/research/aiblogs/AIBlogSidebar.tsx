"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface AIBlogSidebarProps {
  categories: string[];
  activeCategory?: string;
  onCategoryChange?: (cat?: string) => void;
}

export default function AIBlogSidebar({
  categories,
  activeCategory,
  onCategoryChange,
}: AIBlogSidebarProps) {
  const now = useMemo(() => new Date(), []);

  const handleCatClick = (cat?: string) => {
    onCategoryChange?.(cat);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.aside
      initial="hidden"
      animate="show"
      variants={container}
      className="space-y-8 w-full md:w-80 lg:w-96"
      itemScope
      itemType="https://schema.org/WPSideBar"
    >
      {/* Filter Section */}
      <motion.section
        variants={fadeUp as any}
        className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/90"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400/10 via-indigo-500/10 to-pink-400/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-700 pointer-events-none" />

        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Filter
        </h2>
        <div className="mt-3 h-px bg-gradient-to-r from-gray-200 via-transparent to-gray-200" />
        <p className="mt-3 text-sm text-gray-500">By topic</p>

        <motion.ul
          className="mt-3 space-y-2"
          role="listbox"
          aria-label="Topics"
          itemProp="about"
        >
          <li>
            <motion.button
              onClick={() => handleCatClick(undefined)}
              className={`text-lg transition-all ${
                !activeCategory
                  ? "font-semibold text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              aria-current={!activeCategory ? "page" : undefined}
            >
              • All stuff
            </motion.button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <motion.button
                onClick={() => handleCatClick(cat)}
                className={`text-lg transition-colors duration-200 ${
                  activeCategory === cat
                    ? "font-semibold text-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`}
                aria-current={activeCategory === cat ? "page" : undefined}
              >
                {cat}
              </motion.button>
            </li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={fadeUp as any}
        className="relative rounded-3xl bg-gradient-to-br from-indigo-500/10 via-blue-400/5 to-sky-400/10 border border-gray-200 backdrop-blur-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-700 pointer-events-none" />
        <h3 className="text-3xl font-bold tracking-tight text-gray-900">
          Got an idea?
        </h3>
        <p className="mt-2 text-gray-600">
          Think it. Build it. Launch it. Fast.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-between w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition-all duration-300"
          aria-label="Reach out"
        >
          <span>Reach out</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        variants={fadeUp as any}
        className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 via-sky-500/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-700 pointer-events-none" />
        <h3 className="text-3xl font-bold tracking-tight text-gray-900">
          About Me
        </h3>
        <p className="mt-2 text-gray-600 leading-relaxed">
          I'm <strong>Kalyan</strong>, exploring how AI meets Vedic Astrology —
          blending timeless tradition with futuristic intelligence.
        </p>
        <Link
          href="/research/blogs"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-indigo-600 hover:underline transition-all duration-300"
        >
          Read more →
        </Link>
      </motion.section>
    </motion.aside>
  );
}
