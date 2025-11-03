"use client";

import React from "react";
import AIBlogCard, { type AIBlogCardProps } from "./AIBlogCard";
import { AnimatePresence, motion } from "framer-motion";

export default function AIBlogGrid({ posts }: { posts: AIBlogCardProps[] }) {
  const safePosts = Array.isArray(posts) ? posts.filter(Boolean) : [];
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(safePosts.length === 0) && (
          <div className="text-center text-gray-600 py-10">No AI blogs found.</div>
        )}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {safePosts.map((post, idx) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                <AIBlogCard {...post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}


