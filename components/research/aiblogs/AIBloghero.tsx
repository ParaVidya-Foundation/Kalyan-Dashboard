"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Star } from "lucide-react";

export default function AIBlogHero() {
  const [tab, setTab] = useState<"books" | "research">("books");
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 300], [0, 40]);

  // Page load animation
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      aria-label="AI Astrology Hero Section"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[#e8f1ea] px-6 py-10 sm:px-10 md:py-16"
    >
      {/* Background Image with parallax */}
      <motion.div
        style={{ y: yParallax }}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/ai-astrology-bg.jpg"
          alt="AI astrology digital background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f1ea]/70 via-[#e8f1ea]/50 to-[#e8f1ea]/90" />
      </motion.div>

      {/* Grid Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            150+ Trusted Readers
          </span>

          <h1
            className="mt-4 font-extrabold tracking-tight text-gray-900"
            style={{
              fontFamily: `'Orbitron', sans-serif`,
              fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
              lineHeight: "1.1",
            }}
          >
            Discover the Future of AI Astrology
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Explore how artificial intelligence is redefining astrology research, predictions,
            and spiritual sciences — powered by data and cosmic logic.
          </p>

          {/* Search Bar */}
          <div className="mt-6 w-full max-w-2xl rounded-[20px] bg-white p-2 shadow-[0_8px_20px_rgba(16,70,38,0.08)] ring-1 ring-emerald-100">
            <div className="flex items-center gap-2">
              <div className="flex rounded-[16px] bg-emerald-50 p-1 text-sm font-medium text-emerald-800 ring-1 ring-emerald-100">
                <button
                  type="button"
                  onClick={() => setTab("books")}
                  className={`rounded-[12px] px-3 py-2 transition ${
                    tab === "books" ? "bg-white shadow-sm" : "hover:bg-white/70"
                  }`}
                >
                  Books
                </button>
                <button
                  type="button"
                  onClick={() => setTab("research")}
                  className={`rounded-[12px] px-3 py-2 transition ${
                    tab === "research" ? "bg-white shadow-sm" : "hover:bg-white/70"
                  }`}
                >
                  Research
                </button>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder={
                    tab === "books"
                      ? "Search astrology books..."
                      : "Search AI research topics..."
                  }
                  className="w-full rounded-[14px] border-0 bg-transparent px-3 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-emerald-950 shadow hover:brightness-95"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <Link
              href="/research/aiblogs"
              className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-2.5 font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800"
            >
              Read AI Blogs
            </Link>
            <Link
              href="/research/blogs"
              className="inline-flex items-center rounded-full border border-emerald-700/30 bg-emerald-50 px-5 py-2.5 font-semibold text-emerald-900 transition hover:bg-white"
            >
              Explore Articles
            </Link>
          </div>
        </motion.div>

        {/* Right Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 60 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative overflow-hidden rounded-[26px] bg-[#162b1d] p-2 ring-1 ring-emerald-800/40"
        >
          <div className="relative h-[320px] w-full overflow-hidden rounded-[22px] sm:h-[420px]">
            <Image
              src="/images/ai-blog-feature.jpg"
              alt="Featured AI Astrology"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-6">
              <div className="text-white/90 text-base font-medium">Recommended</div>
              <h3 className="mt-1 text-2xl font-semibold text-white">
                AI Predictions for 2025
              </h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                <Star className="h-4 w-4 text-amber-400" />
                <span>2.8k+ reads</span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-white/70">
                How neural learning enhances astrological interpretations and decision models.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
