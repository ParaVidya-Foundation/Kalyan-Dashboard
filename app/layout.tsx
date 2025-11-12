import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Poppins } from "next/font/google"
import "./globals.css"

import { Footer } from "@/components/layout/footer"
import Header from "@/components/layout/header"
// SEO components removed for build stability; can be re-added later

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kalyan.example"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kalyan - Professional Vedic Astrology",
    template: "%s | Kalyan",
  },
  description:
    "Generate accurate Kundli charts with detailed predictions and astrological analysis.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kalyan",
    title: "Kalyan - Professional Vedic Astrology",
    description:
      "Generate accurate Kundli charts with detailed predictions and astrological analysis.",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Kalyan preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kalyan",
    site: "@kalyan",
  },
}

// Force dynamic rendering for the whole app to avoid SSG issues with client-only components

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {/* <DefaultSEO /> */}
        {/* <StructuredData /> */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
