"use client"

import type React from "react"
import Sidebar from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white">
      <Sidebar />
      <main className="flex-1 md:ml-72 ml-0 transition-all duration-300">
        <Navbar />
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
