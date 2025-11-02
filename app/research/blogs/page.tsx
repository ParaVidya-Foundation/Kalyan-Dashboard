"use client";

import { useState } from "react";
import BlogHero from "@/components/research/blogs/BlogHero";
import ResearchTopics from "@/components/research/paper/researchtopics";
import BlogGrid from "@/components/research/blogs/BlogGrid";
import type { BlogCardProps } from "@/components/research/blogs/BlogCard";

// Sample blog data - Replace with actual data from CMS/API
const sampleBlogs: BlogCardProps[] = [
  {
    id: "1",
    title: "How to use AI Astrology ?",
    image: "/images/blog/ai-astrology.jpg", // Replace with actual image path
    imageAlt: "AI Astrology guide showing how to use artificial intelligence in astrological predictions",
    date: new Date("2025-08-03"),
    slug: "how-to-use-ai-astrology",
    excerpt: "Discover the revolutionary ways artificial intelligence is transforming traditional astrological practices and predictions.",
    author: "Astro Expert",
    category: "AI Astrology",
  },
  {
    id: "2",
    title: "Best Way to use AI in Palmistry",
    image: "/images/blog/ai-palmistry.jpg", // Replace with actual image path
    imageAlt: "AI palmistry application showing modern technology applied to traditional palm reading techniques",
    date: new Date("2025-08-03"),
    slug: "best-way-to-use-ai-in-palmistry",
    excerpt: "Learn how AI technology can enhance palmistry readings and provide more accurate insights into your future.",
    author: "Palmistry Master",
    category: "Palmistry",
  },
  {
    id: "3",
    title: "Drawing Vastu Maps",
    image: "/images/blog/vastu-maps.jpg", // Replace with actual image path
    imageAlt: "Intricate Vastu Shastra map showing traditional Indian architectural principles and energy flow",
    date: new Date("2025-08-03"),
    slug: "drawing-vastu-maps",
    excerpt: "Master the art of creating accurate Vastu maps for optimal energy flow and harmony in your living spaces.",
    author: "Vastu Specialist",
    category: "Vastu",
  },
];

export default function BlogsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>();

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(selectedTopic === topic ? undefined : topic);
  };

  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ResearchTopics
          onTopicClick={handleTopicClick}
          selectedTopic={selectedTopic}
        />
      </div>
      <BlogGrid blogs={sampleBlogs} selectedTopic={selectedTopic} />
    </main>
  );
}
