"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Menu,
  User,
  Settings,
  LogOut,
  Home as HomeIcon,
  HeartHandshake,
  FileText,
  Store as StoreIcon,
  Book,
  FlaskConical,
  Gem,
  ScrollText,
  PenLine,
  ShoppingBag,
  GraduationCap,
  BookOpenCheck,
  FileSpreadsheet,
  Sparkles,
  Image as ImageIcon,
  Package,
  CircleDot,
} from "lucide-react"
import { useKundliStore } from "@/lib/store"
import Logo from "@/public/Logo/Logo.svg"

const nav = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Match Making", href: "/match-making", icon: HeartHandshake },
  {
    name: "Research",
    href: "/research",
    icon: FileText,
    dropdown: [
      { name: "Blogs", href: "/research/blogs", icon: PenLine },
      { name: "Research Papers", href: "/research/ResearchPapers", icon: FileSpreadsheet },
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
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { currentUser } = useKundliStore()
  const pathname = usePathname()
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-gray-200/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src={Logo} alt="Logo" width={40} height={40} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 relative">
            <ul className="flex items-center gap-2">
              {nav.map(({ name, href, icon: Icon, dropdown }) => {
                const active = isActive(href)
                return (
                  <li key={name} className="relative group">
                    {!dropdown ? (
                      <Link
                        href={href}
                        className="group relative flex flex-col items-center justify-center px-4 py-2 h-12 w-[120px]
                        text-xs font-medium text-black/70 transition-transform duration-150 hover:scale-[1.03]"
                      >
                        {active && (
                          <motion.span
                            layoutId="active-pill"
                            className="absolute inset-0 rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                            transition={{ type: "spring", stiffness: 420, damping: 35 }}
                          />
                        )}
                        <span className="relative z-10 grid place-items-center gap-1">
                          <Icon className="h-5 w-5" />
                          <span className="leading-none">{name}</span>
                        </span>
                      </Link>
                    ) : (
                      <div className="relative">
                        <div
                          className="group relative flex flex-col items-center justify-center px-4 py-2 h-12 w-[120px]
                          text-xs font-medium text-black/70 transition-transform duration-150 hover:scale-[1.03] cursor-pointer"
                        >
                          {active && (
                            <motion.span
                              layoutId="active-pill"
                              className="absolute inset-0 rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                              transition={{ type: "spring", stiffness: 420, damping: 35 }}
                            />
                          )}
                          <span className="relative z-10 grid place-items-center gap-1">
                            <Icon className="h-5 w-5" />
                            <span>{name}</span>
                          </span>
                        </div>

                        {/* Dropdown on hover */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-white border rounded-xl shadow-md w-48 z-50">
                          <ul className="py-2">
                            {dropdown.map(({ name, href, icon: DIcon }) => (
                              <li key={name}>
                                <Link
                                  href={href}
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-black/80 hover:bg-gray-100"
                                >
                                  <DIcon className="h-4 w-4 text-black/70" />
                                  {name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Profile & Mobile */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser?.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{currentUser?.name?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-300 py-3">
            <nav className="grid grid-cols-2 gap-2">
              {nav.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-black/80 hover:bg-white"
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
