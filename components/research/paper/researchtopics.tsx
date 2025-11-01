"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ResearchTopicsProps {
  onTopicClick?: (topic: string) => void;
  selectedTopic?: string;
}

const topics = [
  "Pitra Dosh", "Vastu", "Kalsarp Dosh", "Sun", "Jupiter",
  "Rahu", "Mercury", "Venus", "Saturn", "Ketu",
  "Moon", "Mars", "Mangal Badh", "Stree Shrap"
];

export const ResearchTopics: React.FC<ResearchTopicsProps> = ({ onTopicClick, selectedTopic }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
      className="mt-10 flex flex-wrap justify-center gap-3 px-4"
    >
      {topics.map((topic) => {
        const isSelected = selectedTopic?.toLowerCase() === topic.toLowerCase();
        return (
          <button
            key={topic}
            onClick={() => onTopicClick?.(topic)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 active:scale-95",
              isSelected
                ? "border-blue-500 bg-blue-500 text-white shadow-md"
                : "border-gray-300 bg-white text-gray-800 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
            )}
          >
            {topic}
          </button>
        );
      })}
    </motion.div>
  );
};

export default ResearchTopics;
