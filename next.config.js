const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  outputFileTracingRoot: path.resolve(__dirname),
  
  // TypeScript and ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85, 90, 95, 100], // Required for Next.js 16 compatibility
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: [
      "react",
      "react-dom",
      "framer-motion",
      "gsap",
      "recharts",
      "lucide-react",
      "embla-carousel-react",
      "zustand",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
    ],
    // optimizeCss requires critters package - disabled for now
    // optimizeCss: true,
    // Partial prerendering for better performance
    ppr: false, // Can enable when stable
  },

  // Turbopack configuration (replaces experimental.turbo)
  turbopack: {
    resolveAlias: {
      'motion-dom': 'framer-motion/dist/es/value/index.mjs',
    },
  },

  // Webpack optimizations
  webpack: (config, { isServer, dev }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Framework chunk
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Framer Motion chunk
            framerMotion: {
              test: /[\\/]node_modules[\\/](framer-motion|motion-dom)[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              priority: 30,
              reuseExistingChunk: true,
            },
            // Three.js chunk (heavy)
            three: {
              test: /[\\/]node_modules[\\/](three|@react-three|ogl)[\\/]/,
              name: 'three',
              chunks: 'async',
              priority: 25,
            },
            // Recharts chunk
            recharts: {
              test: /[\\/]node_modules[\\/]recharts[\\/]/,
              name: 'recharts',
              chunks: 'async',
              priority: 20,
            },
            // GSAP chunk
            gsap: {
              test: /[\\/]node_modules[\\/]gsap[\\/]/,
              name: 'gsap',
              chunks: 'async',
              priority: 20,
            },
            // Radix UI chunk
            radix: {
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              name: 'radix-ui',
              chunks: 'all',
              priority: 15,
              reuseExistingChunk: true,
            },
            // Common libs
            lib: {
              test: /[\\/]node_modules[\\/](date-fns|zod|clsx|tailwind-merge|immer|zustand)[\\/]/,
              name: 'lib',
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
            },
            // Shared chunks
            commons: {
              name: 'commons',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }

    // Handle framer-motion and motion-dom compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    // Note: usedExports and sideEffects are handled by Next.js automatically
    // Manually setting them conflicts with Next.js 15's caching mechanism

    return config
  },

  // Security and performance headers
  async headers() {
    const securityHeaders = [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
      },
      {
        key: 'Cross-Origin-Opener-Policy',
        value: 'same-origin'
      },
      {
        key: 'Cross-Origin-Resource-Policy',
        value: 'same-origin'
      },
    ]

    // Content Security Policy
    const ContentSecurityPolicy = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-src 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join('; ')

    return [
      {
        source: '/(.*)',
        headers: [
          ...securityHeaders,
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy
          },
        ],
      },
      // Static assets caching
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, s-maxage=2592000" },
        ],
      },
      {
        source: "/(.*).(woff|woff2|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|ico|avif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:all*(css|js)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return []
  },
}

let config = nextConfig

// Bundle analyzer
if (process.env.ANALYZE === "true") {
  try {
    const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: true })
    config = withBundleAnalyzer(nextConfig)
  } catch (e) {
    // analyzer not installed; skip
  }
}

module.exports = config
