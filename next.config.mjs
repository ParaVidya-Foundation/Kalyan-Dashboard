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
		return [
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
