"use client";

import React from "react";
import { motion } from "framer-motion";

import AIBlogLayout, {
  type AIBlogPostData,
} from "@/components/research/aiblogs/AIBlogPage/aibloglayout";

import AIBlogRelatedPosts from "@/components/research/aiblogs/AIBlogPage/airelatedpost";
import AIRecentPosts from "@/components/research/aiblogs/AIBlogPage/airecentpost";
import AICategories from "@/components/research/aiblogs/AIBlogPage/aicategories";
import type { AIBlogCardProps } from "@/components/research/aiblogs/AIBlogCard";

/* ---------------------------
   FEATURED POST
--------------------------- */
const featuredPost: AIBlogPostData = {
  id: "future-of-vedic-wisdom",
  title: "The Future of Vedic Wisdom in a Digital Age",
  image:
    "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=2400&q=90",
  imageAlt: "Cosmic visualization of ancient wisdom meeting modern technology",
  date: "2025-11-18",
  author: "Acharya Vikramaditya",
  readingTime: "8 min read",
  excerpt:
    "How sacred geometry, silence, and AI can create the next era of spiritual technology.",
  content: {
    heroImage:
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=2400&q=90",
    heroImageAlt: "Celestial digital art representing Vedic knowledge",
    sections: [
      {
        heading: "Reimagining Tradition for Modern Minds",
        paragraphs: [
          "Vedic wisdom has always been a living tradition—one that thrives on reinterpretation and contextual relevance...",
          "Rather than diluting authenticity, the intentional use of technology can heighten reverence...",
        ],
      },
      {
        heading: "Precision Meets Personalization",
        paragraphs: [
          "Machine learning models now parse astronomical datasets...",
          "Imagine a guidance experience where your birth chart seamlessly syncs...",
        ],
      },
      {
        heading: "Designing Interfaces That Feel Like Breathwork",
        paragraphs: [
          "Apple taught the world that silence can be a design element...",
          "Typography, spacing, and motion carry metaphysical weight...",
        ],
      },
    ],
  },
};

/* ---------------------------
   RECENT POSTS
--------------------------- */
const recentPosts: AIBlogCardProps[] = [
  {
    id: "1",
    title: "Best Way to Use AI in Palmistry",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    imageAlt: "AI analyzing palm lines",
    date: "2025-11-10",
    category: "Palmistry",
    href: "/research/blogs/ai-palmistry",
  },
  {
    id: "2",
    title: "Vastu Maps in Augmented Reality",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    imageAlt: "Digital Vastu overlay",
    date: "2025-11-05",
    category: "Vastu",
    href: "/research/blogs/vastu-maps",
  },
  {
    id: "3",
    title: "AI-Powered Horoscope Matching",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    imageAlt: "Compatibility algorithm",
    date: "2025-10-28",
    category: "AI Astrology",
    href: "/research/blogs/ai-horoscope-matching",
  },
];

/* ---------------------------
   MORE ARTICLES
--------------------------- */
const moreArticles: AIBlogCardProps[] = [
  {
    id: "4",
    title: "Designing Rituals for Mixed Reality",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=80",
    imageAlt: "AR ritual space",
    category: "Spatial Design",
    href: "/research/blogs/designing-rituals",
  },
  {
    id: "5",
    title: "The Quiet Power of Sonic Ayurveda",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    imageAlt: "Sound healing visualization",
    category: "Wellness",
    href: "/research/blogs/sonic-ayurveda",
  },
  {
    id: "6",
    title: "Astral Maps for the Modern Nomad",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80",
    imageAlt: "Astrocartography map",
    category: "Travel",
    href: "/research/blogs/astral-maps",
  },
];

/* ---------------------------
   PAGE
--------------------------- */
export default function AIBlogPage() {
  return (
    <main className="bg-white text-black antialiased">
      <section className="px-6 sm:px-10 lg:px-20 py-10">
        <div
          className="
            mx-auto max-w-7xl 
            grid grid-cols-1 lg:grid-cols-[2fr_1fr]
            gap-12
          "
        >
          {/* LEFT — THE BLOG */}
          <div className="order-2 lg:order-1">
            <AIBlogLayout post={featuredPost} />
          </div>

          {/* RIGHT — SIDEBAR (Visible from start) */}
          <aside className="order-1 lg:order-2 lg:sticky lg:top-24 space-y-8">

            {/* RECENT POSTS */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AIRecentPosts posts={recentPosts} />
            </motion.div>

            {/* CATEGORIES */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <AICategories />
            </motion.div>
          </aside>
        </div>
      </section>

      {/* RELATED POSTS */}
      <AIBlogRelatedPosts posts={moreArticles} />

      {/* FOOTER */}
      <footer className="py-14 text-center text-sm tracking-wide text-[#666]">
        © 2025 Soham Vashist • All rights reserved
      </footer>
    </main>
  );
}
