"use client";

import React from "react";
import BlogLayout, { type BlogArticle } from "@/components/research/blogs/blogpage/bloglayout";
import RelatedPosts from "@/components/research/blogs/blogpage/relatedpost";
import RecentPosts from "@/components/research/blogs/blogpage/recentpost";
import Categories from "@/components/research/blogs/blogpage/categories";
import type { BlogCardProps } from "@/components/research/blogs/BlogCard";

/* -------------------- Demo Blog Data -------------------- */
const featuredPost: BlogArticle = {
  id: "ai-astrology",
  title: "How to Use AI in Astrology",
  image: "/images/blog/ai-astrology.jpg",
  imageAlt: "AI enhancing astrological predictions",
  date: "2025-08-03",
  author: "Astro Expert",
  category: "AI Astrology",
  excerpt: "Explore how modern machine learning amplifies traditional astrological wisdom.",
  content: {
    featuredGraphic: {
      title: "AI-Powered Insights",
      image: "/images/blog/ai-astrology-featured.jpg",
      alt: "Neural networks interpreting cosmic patterns",
    },
    sections: [
      {
        heading: "Blending Tradition With Innovation",
        paragraphs: [
          "Artificial intelligence can sift through decades of astrological data to uncover subtle patterns.",
          "Pair these insights with expert intuition to deliver deeply personalized readings."
        ],
      },
      {
        heading: "Building Smarter Forecasting Tools",
        paragraphs: [
          "Modern platforms plug into APIs + ephemeris datasets to generate richer insights.",
          "These tools assist astrologers, not replace them — like a cosmic co-pilot."
        ],
      },
    ],
  },
};

const recentPosts: BlogCardProps[] = [
  {
    id: "1",
    title: "Best Way to Use AI in Palmistry",
    image: "/images/blog/ai-palmistry.jpg",
    imageAlt: "AI palm reading",
    date: new Date("2025-08-02"),
    href: "/research/blogs/BlogPage",
  },
  {
    id: "2",
    title: "Drawing Vastu Maps with Modern Tools",
    image: "/images/blog/vastu-maps.jpg",
    imageAlt: "Digital Vastu",
    date: new Date("2025-08-01"),
    href: "/research/blogs/BlogPage",
  },
  {
    id: "3",
    title: "AI Horoscope Matching Essentials",
    image: "/images/blog/ai-horoscope.jpg",
    imageAlt: "AI matching charts",
    date: new Date("2025-07-28"),
    href: "/research/blogs/BlogPage",
  },
];

const relatedPosts: BlogCardProps[] = recentPosts;

/* ============================================================
   PAGE — FIXED: SIDEBAR + BLOG LAYOUT TOP-ALIGNED SIDE-BY-SIDE
=============================================================== */
export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* -------------------------------------- */}
      {/* TOP SECTION — BLOG + SIDEBAR TOGETHER */}
      {/* -------------------------------------- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div
          className="
            grid grid-cols-1 
            lg:grid-cols-[2fr_1fr] 
            gap-12
          "
        >

          {/* LEFT: BLOG ARTICLE */}
          <div className="w-full">
            <BlogLayout post={featuredPost} />
          </div>

          {/* RIGHT: STICKY SIDEBAR */}
          <aside className="hidden lg:block sticky top-24 space-y-10 h-fit">
   
              <RecentPosts posts={recentPosts} />

              <Categories />

          </aside>

        </div>
      </section>

      {/* -------------------------------------- */}
      {/* RELATED POSTS */}
      {/* -------------------------------------- */}
      <section className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* FOOTER */}
      {/* -------------------------------------- */}
      <footer className="border-t border-gray-200 mt-24 py-12 text-center text-sm text-gray-500">
        <p>© 2025 Kalyan Research. All rights reserved.</p>
      </footer>
    </main>
  );
}
