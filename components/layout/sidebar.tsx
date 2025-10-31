"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  Home,
  BarChart3,
  FileText,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ShoppingCart,
  BookOpen,
  Layers,
  PieChart,
  Cpu,
  SunMoon,
  LogOut,
  Grid,
  MapPin,
  Database,
  Layers2,
  Menu,
} from "lucide-react";
import clsx from "clsx";

/* Utility classnames helper */
function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

/* Icon registry */
const Icons: Record<string, React.ComponentType<any>> = {
  Search,
  Home,
  BarChart3,
  FileText,
  User,
  Settings,
  Calendar,
  ShoppingCart,
  BookOpen,
  Layers,
  PieChart,
  Cpu,
  SunMoon,
  LogOut,
  Grid,
  MapPin,
  Database,
  Layers2,
  Menu,
};

/* Type definitions */
type NavItem = {
  name: string;
  href?: string;
  icon?: keyof typeof Icons;
  children?: NavItem[];
};

const SIDEBAR_SECTIONS: { title?: string; items: NavItem[] }[] = [

  {
    title: "Main",
    items: [
      { name: "Home", href: "/", icon: "Home" },
      { name: "Profile", href: "/profile", icon: "User" },
      { name: "Store", href: "/store", icon: "ShoppingCart" },
      { name: "Blogs", href: "/blogs", icon: "FileText" },
      { name: "Research", href: "/research", icon: "Grid" },
      { name: "Education", href: "/education", icon: "BookOpen" },
    ],
  },
  {
    title: "Kundli & Charts",
    items: [

          { name: "D1 - Lagna Chart", href: "/charts/d1" },
          { name: "Planetary Positions", href: "/charts/planets" },
          { name: "House Report", href: "/charts/houses" },
          { name: "Aspects & Conjunctions", href: "/charts/aspects" },
          { name: "Yogas & Doshas", href: "/charts/yogas" },
  
    ],
  },
  {
    title: "Divisional Charts",
    items: [
      { name: "D2 - Hora", href: "/charts/d2" },
      { name: "D3 - Drekkana", href: "/charts/d3" },
      { name: "D4 - Chaturthamsa", href: "/charts/d4" },
      { name: "D7 - Saptamsa", href: "/charts/d7" },
      { name: "D9 - Navamsa", href: "/charts/d9" },
      { name: "D10 - Dasamsa", href: "/charts/d10" },
      { name: "D12 - Dwadashamsa", href: "/charts/d12" },
      { name: "D16 - Kalamsa", href: "/charts/d16" },
      { name: "D20 - Vimsamsa", href: "/charts/d20" },
      { name: "D24 - Chaturvimshamsa", href: "/charts/d24" },
      { name: "D30 - Trimshamsa", href: "/charts/d30" },
      { name: "D45 - Akshavedamsa", href: "/charts/d45" },
      { name: "D60 - Shashtiamsa", href: "/charts/d60" },
    ],
  },
  {
    title: "Advanced Charts",
    items: [
      { name: "Life Prediction Chart", href: "/advanced/life-prediction" },
      { name: "Cosmic DNA Chart", href: "/advanced/cosmic-dna" },
      { name: "Rectification Tools", href: "/advanced/rectification" },
      { name: "Famous Comparison", href: "/advanced/celebrity-compare" },
    ],
  },
  {
    title: "Dasha System",
    items: [
      { name: "All Dasha Overview", href: "/dasha" },
      { name: "Vimshottari Dasha", href: "/dasha/vimshottari" },
      { name: "Chara Dasha", href: "/dasha/chara" },
      { name: "Yogini Dasha", href: "/dasha/yogini" },
      { name: "Varshphal (Annual)", href: "/dasha/varshphal" },
    ],
  },
  {
    title: "AI Features",
    items: [
      { name: "AI Kundli Analysis", href: "/ai/kundli" },
      { name: "AI Matchmaking", href: "/ai/matchmaking" },
      { name: "AI Dasha Predictions", href: "/ai/dasha" },
      { name: "AI Remedies & Solutions", href: "/ai/remedies" },
      { name: "AI Chatbot", href: "/ai/chat" },
      { name: "PDF Summary Generator", href: "/ai/pdf" },
      { name: "Cloud Storage", href: "/ai/cloud" },
    ],
  },
  {
    title: "Learning & Research",
    items: [
      { name: "Courses & Tutorials", href: "/learn/courses" },
      { name: "Books & PDFs", href: "/learn/books" },
      { name: "Research Papers", href: "/learn/research" },
      { name: "Community Forum", href: "/community" },
    ],
  },
  {
    title: "Store",
    items: [
      { name: "All Products", href: "/store/all" },
      { name: "Gemstones", href: "/store/gemstones" },
      { name: "Rudraksha", href: "/store/rudraksha" },
      { name: "Cart", href: "/store/cart" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { name: "Settings", href: "/settings", icon: "Settings" },
      { name: "Help Center", href: "/help" },
      { name: "Account & Security", href: "/account" },
    ],
  },
];

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", collapsed.toString());
  }, [collapsed]);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };


  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md md:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      )}

      <aside
        className={clsx(
          "fixed top-0 left-0 z-40 flex flex-col h-screen transition-all duration-300",
          collapsed && !isMobile ? "w-20" : "w-72",
          "bg-white border-r border-gray-200 dark:bg-neutral-900 dark:border-neutral-800 shadow-sm",
          isMobile && !mobileOpen && "-translate-x-full",
          className
        )}
      >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 dark:border-neutral-800">
        <div className={clsx("flex items-center", collapsed && "justify-center w-full")}>
          {!collapsed ? (
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-md flex items-center justify-center text-white font-semibold">
                K
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Kalyan
              </span>
            </Link>
          ) : (
            <div className="h-9 w-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-md flex items-center justify-center text-white font-semibold">
              K
            </div>
          )}
        </div>
        {!isMobile && (
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        )}
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-gray-100 dark:border-neutral-800">
        <form onSubmit={handleSearchSubmit} className="relative">
          {!collapsed && (
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-md border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-orange-300 focus:outline-none"
            />
          )}
          <Search
            onClick={() => !collapsed && handleSearchSubmit()}
            className={clsx(
              "absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500",
              collapsed && "left-1/2 -translate-x-1/2"
            )}
            size={18}
          />
        </form>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-4" role="navigation" aria-label="Sidebar">
        {SIDEBAR_SECTIONS.map((section, i) => (
          <div key={section.title || `section-${i}`}>
            {i > 0 && <div className="h-px bg-gray-200 dark:bg-neutral-800 my-2" />}
            {section.title && (
              <div className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {section.title}
              </div>
            )}

            <div className="mt-1 space-y-1">
              {section.items.flatMap((item) => {
                const Icon = item.icon ? Icons[item.icon] : null;
                const entries = item.children && item.children.length > 0 ? item.children : [item];
                return entries.map((linkItem) => {
                  const targetHref = linkItem.href || item.href || "#";
                  const isActive = pathname === targetHref;
                  return (
                    <Link
                      key={`${item.name}-${linkItem.name || targetHref}`}
                      href={targetHref}
                      className={clsx(
                        "flex items-center gap-3 px-2 py-2 rounded-md text-sm transition-all",
                        isActive
                          ? "bg-orange-100 text-orange-700 font-medium"
                          : "text-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-800",
                        collapsed && "justify-center"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {!collapsed && (linkItem.name || item.name)}
                    </Link>
                  );
                });
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-gray-100 dark:border-neutral-800 space-y-2">

        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 transition w-full text-sm text-gray-700 dark:text-gray-200"
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
    </>
  );
}
