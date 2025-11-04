"use client";

import AIBlogGrid from "@/components/research/aiblogs/AIBlogGrid";
import AIBlogSidebar from "@/components/research/aiblogs/AIBlogSidebar";
import type { AIBlogCardProps } from "@/components/research/aiblogs/AIBlogCard";
import React from "react";
import { motion } from "framer-motion";
import AIBlogHero from "@/components/research/aiblogs/AIBloghero";
import Image from "next/image";
const demoPosts: AIBlogCardProps[] = [
  {
    id: "ai-1",
    title: "From Idea to Launch",
    image: "/placeholder.jpg",
    imageAlt: "AI-powered creativity",
    href: "/research/blogs/how-to-use-ai-astrology",
    category: "Educational",
  },
  {
    id: "ai-2",
    title: "AI-Powered Marketing",
    image: "/placeholder.jpg",
    imageAlt: "AI-generated marketing visuals",
    href: "/research/blogs/best-way-to-use-ai-in-palmistry",
    category: "Insights",
  },
  {
    id: "ai-3",
    title: "Studio Experiments",
    image: "/placeholder.jpg",
    imageAlt: "Modern AI studio setup",
    href: "/research/blogs/drawing-vastu-maps",
    category: "Studio",
  },
  {
    id: "ai-4",
    title: "Projects in the Wild",
    image: "/placeholder.jpg",
    imageAlt: "Outdoor creative workspace",
    href: "/research/blogs/ketu-in-12th-house",
    category: "Projects",
  },
];

export default function AiBlogs() {
  const [active, setActive] = React.useState<string | undefined>();
  const categories = ["Insights", "Educational", "Studio", "Projects"];
  const filtered = React.useMemo(
    () =>
      active
        ? demoPosts.filter(
            (p) =>
              (p.category || "").toLowerCase() === active.toLowerCase()
          )
        : demoPosts,
    [active]
  );

  // Animation configs
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/Blog">
      <AIBlogHero />

      <Image
        src="/placeholder.jpg"
        alt="AI Blogs Hero"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center w-full h-[100vh]"
      />
    
      {/* Page Wrapper (no heavy animated backgrounds) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Sidebar */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <AIBlogSidebar
            categories={categories}
            activeCategory={active}
            onCategoryChange={setActive}
          />
        </div>

        {/* Blog Grid */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <AIBlogGrid posts={filtered} />
        </div>
      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AI Research Blogs",
            description:
              "Explore insights, experiments, and ideas blending AI with Vedic Astrology.",
            url: "https://yourwebsite.com/research/blogs",
          }),
        }}
      />
    </main>
  );
}
