"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";
import RecentPosts from "./recentpost";
import Categories from "./categories";
import type { BlogCardProps } from "../BlogCard";

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  date: Date | string;
  author?: string;
  category?: string;
  excerpt?: string;
  content: {
    featuredGraphic: {
      title: string;
      image: string;
      alt: string;
    };
    sections: Array<{
      heading: string;
      paragraphs: string[];
    }>;
  };
}

interface BlogLayoutProps {
  post: BlogPostData;
  recentPosts: BlogCardProps[];
}

export default function BlogLayout({ post, recentPosts }: BlogLayoutProps) {
  const formattedDate =
    typeof post.date === "string"
      ? post.date
      : format(new Date(post.date), "d MMM yyyy");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="/" className="hover:text-sky-600 transition-colors">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/research/blogs" className="hover:text-sky-600 transition-colors">
              Blogs
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{post.category || "Post"}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Main Content Area - Left Column */}
        <article
          className="lg:col-span-2"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-serif"
            itemProp="headline"
          >
            {post.title}
          </motion.h1>

          {/* Featured Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-square sm:aspect-[4/3] mb-8 rounded-lg border-2 border-gray-800 bg-stone-50 overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={post.content.featuredGraphic.image}
                alt={post.content.featuredGraphic.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
            </div>
            {/* Title Overlay */}
            <div className="absolute top-4 left-0 right-0 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 bg-white/90 backdrop-blur-sm px-4 py-2 inline-block rounded-md">
                {post.content.featuredGraphic.title}
              </h2>
            </div>
            {/* Number Overlay (if needed for design) */}
            <div className="absolute bottom-4 right-4">
              <span className="text-6xl sm:text-7xl font-bold text-gray-900 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md">
                12
              </span>
            </div>
          </motion.div>

          {/* Article Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
            {post.author && (
              <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <span className="font-medium">By</span>{" "}
                <span itemProp="name">{post.author}</span>
              </div>
            )}
            <time
              dateTime={
                typeof post.date === "string" ? post.date : format(new Date(post.date), "yyyy-MM-dd")
              }
              itemProp="datePublished"
              className="flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {formattedDate}
            </time>
            {post.category && (
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">
                {post.category}
              </span>
            )}
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-8 prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6"
            itemProp="articleBody"
          >
            {post.content.sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="mb-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.section>
            ))}
          </div>

          {/* Structured Data JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "@id": `/research/blogs/${post.slug}`,
                headline: post.title,
                image: post.image,
                datePublished: typeof post.date === "string" ? post.date : format(new Date(post.date), "yyyy-MM-dd"),
                author: post.author
                  ? {
                      "@type": "Person",
                      name: post.author,
                    }
                  : undefined,
                description: post.excerpt,
                articleBody: post.content.sections
                  .map((s) => s.paragraphs.join(" "))
                  .join(" "),
                publisher: {
                  "@type": "Organization",
                  name: "Kalyan",
                  logo: {
                    "@type": "ImageObject",
                    url: "/Logo/Logo.png",
                  },
                },
              }),
            }}
          />
        </article>

        {/* Sidebar - Right Column */}
        <aside className="lg:col-span-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RecentPosts posts={recentPosts} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Categories />
          </motion.div>
        </aside>
      </div>
    </div>
  );
}

