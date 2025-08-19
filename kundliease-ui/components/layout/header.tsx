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
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
  Store,
} from "lucide-react"
import { useKundliStore } from "@/lib/store"
import Logo from "@/public/Logo/Logo.svg";

const nav = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Match Making", href: "/match-making", icon: HeartHandshake },
  { name: "Blogs", href: "/blogs", icon: FileText },
  { name: "Store", href: "/store", icon: Store },
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
          {/* Logo (K) */}
         <Link href="/" className="flex items-center gap-3">
      <span className="inline-flex items-center justify-center">
        <Image
          src={Logo}
          alt="K logo"
          width={40}   // ⬆️ Increased size
          height={40}
          className="pointer-events-none select-none w-10 h-10 md:w-12 md:h-12" 
          onError={(e) =>
            ((e.target as HTMLImageElement).style.display = "none")
          }
        />
      </span>
    </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 relative">
            <ul className="flex items-center gap-2">
              {nav.map(({ name, href, icon: Icon }) => {
                const active = isActive(href)
                return (
                  <li key={name} className="relative">
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className="group relative flex flex-col items-center justify-center px-4 py-2 h-12 w-[120px]
                                 text-xs font-medium text-black/70 transition-transform duration-150
                                 hover:scale-[1.03] focus-visible:outline-none"
                    >
                      {/* Animated active pill (Zoom-like) */}
                      {active && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                          transition={{ type: "spring", stiffness: 420, damping: 35, mass: 0.5 }}
                        />
                      )}

                      <span className="relative z-10 grid place-items-center gap-1">
                        <Icon className="h-5 w-5" />
                        <span className="leading-none">{name}</span>
                      </span>

                      {/* Hover glow */}
                      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.06) inset" }} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Profile/Menu (kept same) */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser?.avatar || "/placeholder.svg"} alt={currentUser?.name} />
                    <AvatarFallback>{currentUser?.name?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{currentUser?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{currentUser?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-300 py-3">
            <nav className="grid grid-cols-2 gap-2">
              {nav.map(({ name, href, icon: Icon }) => {
                const active = isActive(href)
                return (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition
                      ${active ? "bg-white shadow text-black" : "text-black/70 hover:bg-white/70"}`}
                  >
                    <Icon className="h-4 w-4" />
                    {name}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
