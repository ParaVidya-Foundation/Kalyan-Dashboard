"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import EduSearchBox from "../../education/edusearchbox";
import { ResearchTopics } from "./researchtopics";

interface PaperHeroSectionProps {
  onSearchChange?: (query: string) => void;
  onTopicSelect?: (topic: string) => void;
  selectedTopic?: string;
}

export const PaperHeroSection: React.FC<PaperHeroSectionProps> = ({
  onSearchChange,
  onTopicSelect,
  selectedTopic,
}) => {
  const [searchKey, setSearchKey] = useState(0);

  const handleSearch = (val: string) => {
    if (onSearchChange) {
      onSearchChange(val);
    }
  };

  const handleTopicClick = (topic: string) => {
    // Force re-render of search box by changing key
    setSearchKey(prev => prev + 1);
    if (onTopicSelect) {
      onTopicSelect(topic);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-28 pb-20 text-center sm:pt-36 overflow-hidden">
      
      {/* Announcement Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4"
      >
        <Badge
          variant="outline"
          className="border-blue-200 bg-blue-50 px-4 py-1 text-[13px] font-medium text-blue-600 hover:bg-blue-100"
        >
          Announcing{" "}
          <Link href="#" className="ml-1 font-semibold text-blue-600 hover:underline">
            ParaVidya AI →
          </Link>
        </Badge>
      </motion.div>

      {/* Hero Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl"
      >
        World's Largest <br />
        <span className="relative inline-block">
          <span className="relative z-10 rounded-sm bg-yellow-300 px-2 py-0.5">
            Astrology Research Paper
          </span>
        </span>
        <br />
        Collection
      </motion.h1>

      {/* Search Bar */}
      <motion.div
        key={`search-${searchKey}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-10 w-full max-w-2xl"
      >
        <EduSearchBox
          placeholder="Search Your Topic"
          onSearch={handleSearch}
          enableRealtimeSearch={true}
          redirectTo={undefined}
        />
      </motion.div>

      {/* Topics */}
      <ResearchTopics onTopicClick={handleTopicClick} selectedTopic={selectedTopic} />

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08)_0%,transparent_70%)]"></div>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/memphis-mini.png')] opacity-10"></div>
    </section>
  );
};
