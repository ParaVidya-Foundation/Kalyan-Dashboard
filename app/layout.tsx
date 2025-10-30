import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { headers } from "next/headers"
import DefaultSEO from "@/components/seo/default-seo"
import StructuredData from "@/components/seo/structured-data"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.kundlipro.example"),
  title: {
    default: "KundliPro - Professional Vedic Astrology",
    template: "%s | KundliPro",
  },
  description: "Generate accurate Kundli charts with detailed predictions and astrological analysis.",
  applicationName: "KundliPro",
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  keywords: [
    "Kundli",
    "Vedic astrology",
    "horoscope",
    "birth chart",
    "kundali generator",
    "match making",
  ],
  authors: [{ name: "KundliPro" }],
  creator: "KundliPro",
  publisher: "KundliPro",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "KundliPro",
    title: "KundliPro - Professional Vedic Astrology",
    description: "Generate accurate Kundli charts with detailed predictions and astrological analysis.",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "KundliPro preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KundliPro - Professional Vedic Astrology",
    description: "Generate accurate Kundli charts with detailed predictions and astrological analysis.",
    images: ["/placeholder.jpg"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
  category: "technology",
  icons: {
    icon: [{ url: "/Logo/Logo.png" }],
    shortcut: ["/Logo/Logo.png"],
    apple: ["/Logo/Logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const nonce = (headers() as unknown as Headers).get("x-csp-nonce") || undefined
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style nonce={nonce}>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen bg-gray-50">
        <DefaultSEO />
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
