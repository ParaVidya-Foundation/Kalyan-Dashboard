// app/research/blogs/page.tsx (or wherever your blog page lives)
"use client";

import React from "react";
import BlogLayout, { type BlogArticle } from "@/components/research/blogs/blogpage/bloglayout";
import RelatedPosts from "@/components/research/blogs/blogpage/relatedpost";
import RecentPosts from "@/components/research/blogs/blogpage/recentpost";
import Categories from "@/components/research/blogs/blogpage/categories";

import type { BlogCardProps } from "@/components/research/blogs/BlogCard";

// Demo Data
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
          "Artificial intelligence can sift through decades of astrological data to uncover subtle patterns that are easy to miss when working manually.",
          "By pairing these insights with expert intuition, practitioners can deliver readings that feel grounded, personalized, and timely.",
        ],
      },
      {
        heading: "Building Smarter Forecasting Tools",
        paragraphs: [
          "Modern forecasting platforms plug into APIs, ephemeris datasets, and custom rule engines to generate context-aware recommendations.",
          "Instead of replacing astrologers, these tools act as co-pilots—handling calculations so professionals can focus on storytelling and guidance.",
        ],
      },
      {
        heading: "Ethics and Transparency",
        paragraphs: [
          "Any AI-driven reading should include clear disclosures about how insights were generated.",
          "Offer clients the ability to review or opt out of AI assistance, and document how their data is stored to build long-term trust.",
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

const relatedPosts: BlogCardProps[] = recentPosts; // In real app: fetch related

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero + Main Article */}
      <BlogLayout post={featuredPost} />

      {/* Full-Width Related Posts Section */}
      <section className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </section>

      {/* Sticky Sidebar (Desktop Only) + Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content Area (Article already rendered above, so empty here if needed) */}
          <div className="lg:col-span-3">
            {/* Optional: Add share buttons, author bio, comments, etc. here */}
          </div>

          {/* Sticky Sidebar - Desktop Only */}
          <aside className="lg:col-span-1 space-y-10 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Posts</h3>
              <RecentPosts posts={recentPosts} />
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Categories</h3>
              <Categories />
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24 py-12 text-center text-sm text-gray-500">
        <p>© 2025 Kalyan Research. All rights reserved.</p>
      </footer>
    </main>
  );
}