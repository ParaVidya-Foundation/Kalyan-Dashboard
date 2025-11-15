"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  HeartHandshake,
  FileText,
  Store,
  GraduationCap,
  Home,
  Send,
} from "lucide-react";
import { GeistSans } from "geist/font/sans";

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${GeistSans.className} relative bg-white border-t border-gray-100 overflow-hidden`}>
      {/* Techy ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/40 via-transparent to-white" />
        {/* soft orbs */}
        <motion.div
          className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl"
          animate={{ x: [0, 20, -10, 0], opacity: [0.4, 0.7, 0.5, 0.4] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-yellow-500/15 blur-3xl"
          animate={{ x: [0, -15, 10, 0], opacity: [0.3, 0.6, 0.4, 0.3] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          variants={containerVariants as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10"
        >
          {/* Brand + Social */}
          <motion.div variants={itemVariants as unknown as Variants} className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 4 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 380, damping: 18 }}
                className="relative"
              >
                <div className="relative h-11 w-11 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/Logo/Logo.svg"
                    alt="Kalyan Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </div>
              
              </motion.div>
              <span className="text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-[#FFF000] transition-colors duration-300">
                Kalyan
              </span>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-6">
              AI-enabled Vedic astrology & research platform. Generate precise Kundlis, explore
              spiritual analytics, and discover insights at the intersection of{" "}
              <span className="font-medium text-[#FFF000]">ancient wisdom</span> and{" "}
              <span className="font-medium text-[#FFF000]">modern intelligence</span>.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="group relative p-2.5 rounded-xl bg-gray-50/80 backdrop-blur-sm border border-gray-100 hover:bg-[#FFF000] hover:border-[#FFF000] transition-all duration-300"
                >
                  <social.icon className="h-4 w-4 text-gray-600 group-hover:text-[#FFF000] transition-colors duration-300" />
                  <span className="sr-only">{social.label}</span>
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-[#FFF000]/15 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants as unknown as Variants}>
            <h3 className="text-xs font-semibold text-gray-900 mb-4 tracking-[0.18em] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home", icon: Home },
                { href: "/match-making", label: "Match Making", icon: HeartHandshake },
                { href: "/research", label: "Research", icon: FileText },
                { href: "/store", label: "Store", icon: Store },
                { href: "/education", label: "Education", icon: GraduationCap },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 hover:text-[#FFF000] transition-all duration-300"
                  >
                    <link.icon className="h-4 w-4 text-gray-400 group-hover:text-yellow-600 transition-colors duration-300" />
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-[#FFF000] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product / Learning map */}
          <motion.div variants={itemVariants as unknown as Variants}>
            <h3 className="text-xs font-semibold text-gray-900 mb-4 tracking-[0.18em] uppercase">
              Ecosystem
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.16em]">
                  Research
                </span>
                <ul className="mt-2 space-y-1.5">
                  {[
                    { href: "/research/blogs", label: "Blogs" },
                    { href: "/research/research-papers", label: "Papers" },
                    { href: "/research/aiblogs", label: "AI Blogs" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="pl-2 text-xs text-gray-500 hover:text-[#FFF000] transition-colors duration-300"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="pt-2">
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.16em]">
                  Store
                </span>
                <ul className="mt-2 space-y-1.5">
                  {[
                    { href: "/store/perfume", label: "Perfume" },
                    { href: "/store/poster", label: "Posters" },
                    { href: "/store/gems", label: "Gems" },
                    { href: "/store/accessories", label: "Accessories" },
                    { href: "/store/bracelet", label: "Bracelets" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="pl-2 text-xs text-gray-500 hover:text-[#FFF000] transition-colors duration-300"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="pt-2">
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.16em]">
                  Learning
                </span>
                <ul className="mt-2 space-y-1.5">
                  {[
                    { href: "/education/books", label: "Books" },
                    { href: "/education/test", label: "Astro Test" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="pl-2 text-xs text-gray-500 hover:text-[#FFF000] transition-colors duration-300"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </motion.div>

          {/* Contact + Newsletter */}
          <motion.div variants={itemVariants as unknown as Variants} className="lg:col-span-1">
            <h3 className="text-xs font-semibold text-gray-900 mb-4 tracking-[0.18em] uppercase">
              Contact
            </h3>
            <ul className="space-y-2.5 mb-5 text-sm text-gray-600">
              {[
                { icon: Mail, text: "support@kalyan.com", href: "mailto:support@kalyan.com" },
                { icon: Phone, text: "+91-98765-43210", href: "tel:+919876543210" },
                { icon: MapPin, text: "New Delhi, India", href: "#" },
              ].map((c, i) => (
                <li key={i}>
                  <a
                    href={c.href}
                    className="group flex items-start gap-3 hover:text-[#FFF000] transition-colors duration-300"
                  >
                    <c.icon className="h-4 w-4 mt-0.5 text-gray-400 group-hover:text-[#FFF000] transition-colors duration-300 flex-shrink-0" />
                    <span className="leading-relaxed">{c.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <h4 className="text-xs font-semibold text-gray-900 mb-2 tracking-[0.16em] uppercase">
                Astro • AI Newsletter
              </h4>
              <p className="text-xs text-gray-500 mb-3">
                Monthly drops on cosmic trends, research updates, and product releases. No spam.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-2"
              >
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400 transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97, y: 0 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-xl shadow-[0_10px_30px_rgba(234,179,8,0.35)] hover:shadow-[0_14px_38px_rgba(202,138,4,0.5)] transition-all duration-300"
                >
                  <span>Subscribe</span>
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 pt-6 border-t border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} Kalyan. Crafted at the intersection of code & cosmos.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-gray-500 hover:text-yellow-700 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-500 hover:text-yellow-700 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* thin glowing bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-70" />
    </footer>
  );
}
