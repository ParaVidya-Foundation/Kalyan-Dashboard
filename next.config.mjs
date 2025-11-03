/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	eslint: {
		ignoreDuringBuilds: false,
	},
	typescript: {
		ignoreBuildErrors: false,
	},
	images: {
		unoptimized: false,
	},

	headers: async () => {
		const ContentSecurityPolicy = [
			"default-src 'self'",
			"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
			"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
			"img-src 'self' data: blob: https://*",
			"font-src 'self' https://fonts.gstatic.com",
			"connect-src 'self' https://*",
			"frame-ancestors 'none'",
		].join('; ')

		return [
			{
				source: '/(.*)',
				headers: [
					{ key: 'X-Frame-Options', value: 'DENY' },
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
					{ key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
					{ key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
					{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
					{ key: 'Content-Security-Policy', value: ContentSecurityPolicy },
				],
			},
			{
				source: "/:all*(svg|jpg|jpeg|png|gif|webp|ico)",
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
	webpack: (config, { isServer }) => {
		// Handle framer-motion and motion-dom compatibility issues
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				net: false,
				tls: false,
			};
		}
		
		// Optimize framer-motion for better HMR compatibility
		config.optimization = {
			...config.optimization,
			splitChunks: {
				...config.optimization.splitChunks,
				cacheGroups: {
					...config.optimization.splitChunks?.cacheGroups,
					framerMotion: {
						test: /[\\/]node_modules[\\/](framer-motion|motion-dom)[\\/]/,
						name: 'framer-motion',
						chunks: 'all',
						priority: 10,
					},
				},
			},
		};

		return config;
	},
	experimental: {
		// Disable turbopack temporarily to avoid HMR issues with framer-motion
		turbo: {
			resolveAlias: {
				'motion-dom': 'framer-motion/dist/es/value/index.mjs',
			},
		},
	},
}

export default nextConfig
