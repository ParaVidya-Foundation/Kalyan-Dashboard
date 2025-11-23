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
  preload: true,
  adjustFontFallback: true,
  fallback: ["serif"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
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
    "Generate accurate Kundli charts with detailed predictions and astrological analysis. AI-enabled Vedic astrology platform for precise birth charts, matchmaking, and spiritual insights.",
  keywords: [
    "vedic astrology",
    "kundli",
    "birth chart",
    "horoscope",
    "astrology calculator",
    "matchmaking",
    "dasha predictions",
    "astrological analysis",
  ],
  authors: [{ name: "Kalyan" }],
  creator: "Kalyan",
  publisher: "Kalyan",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kalyan",
    title: "Kalyan - Professional Vedic Astrology",
    description:
      "Generate accurate Kundli charts with detailed predictions and astrological analysis. AI-enabled Vedic astrology platform.",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Kalyan - Professional Vedic Astrology",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kalyan",
    site: "@kalyan",
    title: "Kalyan - Professional Vedic Astrology",
    description: "Generate accurate Kundli charts with detailed predictions and astrological analysis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-gray-50 flex flex-col">
        {/* <DefaultSEO /> */}
        {/* <StructuredData /> */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
