"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";

export interface AIBlogCardProps {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
  category?: string;
  date?: string | Date;
}

export default function AIBlogCard({
  id,
  title,
  image,
  imageAlt,
  href,
  category = "AI Insights",
  date = new Date(),
}: AIBlogCardProps) {
  const formattedDate =
    typeof date === "string" ? date : format(new Date(date), "d MMM yyyy");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="relative group flex flex-col overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 max-w-xl mx-auto"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] overflow-hidden rounded-t-3xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />

        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={false}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Category Chip */}
        {category && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 left-4 bg-white/90 text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
          >
            {category}
          </motion.span>
        )}
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col flex-grow p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-200">
          <Link href={href} itemProp="headline" className="block hover:underline">
            {title}
          </Link>
        </h3>

        {/* Date */}
        <time
          dateTime={
            typeof date === "string" ? date : format(new Date(date), "yyyy-MM-dd")
          }
          itemProp="datePublished"
          className="text-sm text-gray-500"
        >
          {formattedDate}
        </time>

        {/* Read More Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mt-4"
        >
          <Link
            href={href}
            className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 text-white font-medium rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            aria-label={`Read more: ${title}`}
          >
            Read More →
          </Link>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400/0 via-transparent to-indigo-500/0 opacity-0 group-hover:opacity-60 blur-2xl transition duration-700 -z-10"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            image: image,
            author: { "@type": "Person", name: "AI Insights Team" },
            datePublished:
              typeof date === "string"
                ? date
                : format(new Date(date), "yyyy-MM-dd"),
            url: href,
            description: `${title} - A deep dive into AI perspectives and research.`,
          }),
        }}
      />
    </motion.article>
  );
}
