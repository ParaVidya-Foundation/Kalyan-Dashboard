"use client";

import React, { useEffect, useState, JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GeistSans } from "geist/font/sans";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  User,
  Settings,
  LogOut,
  Home as HomeIcon,
  HeartHandshake,
  FileText,
  Store as StoreIcon,
  GraduationCap,
  PenLine,
  FileSpreadsheet,
  Sparkles,
  Image as ImageIcon,
  Gem,
  Package,
  CircleDot,
  BookOpenCheck,
} from "lucide-react";
import { useKundliStore } from "@/lib/store";

type NavItem = {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
  dropdown?: { name: string; href: string; icon?: React.ComponentType<any> }[];
};

const NAV: NavItem[] = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Match Making", href: "/match-making", icon: HeartHandshake },
  {
    name: "Research",
    href: "/research",
    icon: FileText,
    dropdown: [
      { name: "Blogs", href: "/research/blogs", icon: PenLine },
      { name: "Research Papers", href: "/research/research-papers", icon: FileSpreadsheet },
      { name: "AI Blogs", href: "/research/aiblogs", icon: Sparkles },
    ],
  },
  {
    name: "Store",
    href: "/store",
    icon: StoreIcon,
    dropdown: [
      { name: "Perfume", href: "/store/perfume", icon: Sparkles },
      { name: "Poster", href: "/store/poster", icon: ImageIcon },
      { name: "Gems", href: "/store/gems", icon: Gem },
      { name: "Accessories", href: "/store/accessories", icon: Package },
      { name: "Bracelet", href: "/store/bracelet", icon: CircleDot },
    ],
  },
  {
    name: "Education",
    href: "/education",
    icon: GraduationCap,
    dropdown: [
      { name: "Books", href: "/education/Books", icon: BookOpenCheck },
      { name: "Test", href: "/education/test", icon: GraduationCap },
    ],
  },
];

export function Header(): JSX.Element {
  const pathname = usePathname() || "/";
  const store = useKundliStore();
  const currentUser = store?.currentUser;
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (name: string) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 
      bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl 
      supports-[backdrop-filter]:bg-white/50 transition-all duration-200 shadow-sm ${GeistSans.className}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <Image
              src="/Logo/Logo.svg"
              alt="Kalyan Logo"
              width={40}
              height={40}
              priority
              className="drop-shadow-md hover:scale-105 transition-transform duration-150"
            />
            <span className="hidden sm:block font-semibold tracking-wide text-gray-900 dark:text-gray-100 text-sm md:text-base">
              Kalyan
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 relative">
            <ul className="flex items-center gap-2">
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <li
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown((cur) => (cur === item.name ? null : cur))}
                  >
                    {!item.dropdown ? (
                      <Link
                        href={item.href}
                        className={`group relative flex flex-col items-center justify-center 
                        px-4 py-2 h-12 w-[120px] text-xs font-medium 
                        text-gray-800 dark:text-gray-100 transition-transform duration-150 hover:scale-[1.03]
                        rounded-xl overflow-hidden`}
                      >
                        {active && (
                          <motion.span
                            layoutId="active-pill"
                            className="absolute inset-0 rounded-xl bg-white/70 dark:bg-neutral-800 shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                            transition={{ type: "spring", stiffness: 420, damping: 35 }}
                          />
                        )}
                        <span className="relative z-10 flex flex-col items-center gap-1">
                          {item.icon && <item.icon className="h-5 w-5 opacity-80" />}
                          <span className="leading-none">{item.name}</span>
                        </span>
                      </Link>
                    ) : (
                      <div className="relative">
                        <div
                          className={`group relative flex flex-col items-center justify-center 
                          px-4 py-2 h-12 w-[120px] text-xs font-medium 
                          text-gray-800 dark:text-gray-100 transition-transform duration-150 hover:scale-[1.03] 
                          rounded-xl cursor-pointer`}
                          onClick={() => toggleDropdown(item.name)}
                        >
                          {active && (
                            <motion.span
                              layoutId="active-pill"
                              className="absolute inset-0 rounded-xl bg-white/70 dark:bg-neutral-800 shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                              transition={{ type: "spring", stiffness: 420, damping: 35 }}
                            />
                          )}
                          <span className="relative z-10 flex flex-col items-center gap-1">
                            {item.icon && <item.icon className="h-5 w-5 opacity-80" />}
                            <span>{item.name}</span>
                          </span>
                        </div>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 
                              bg-white/95 dark:bg-neutral-900 border border-gray-200/40 dark:border-white/10 
                              rounded-xl shadow-xl backdrop-blur-md z-50"
                            >
                              <ul className="py-2">
                                {item.dropdown.map((d) => (
                                  <li key={d.name}>
                                    <Link
                                      href={d.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-white/10 rounded-md transition"
                                    >
                                      {d.icon && <d.icon className="h-4 w-4 opacity-70" />}
                                      {d.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Profile + Mobile Menu */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0 rounded-full hover:scale-105 transition-transform">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser?.avatar ?? "/placeholder.svg"} alt={currentUser?.name ?? "User"} />
                    <AvatarFallback>{(currentUser?.name ?? "U").charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 backdrop-blur-lg bg-white/90 dark:bg-neutral-900/80 border border-white/20">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/20 py-3 overflow-hidden backdrop-blur-lg"
            >
              <ul className="grid grid-cols-2 gap-2">
                {NAV.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-white/10 transition"
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
