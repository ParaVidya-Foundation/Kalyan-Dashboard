/******** next-sitemap configuration ********/
/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kalyan.example'

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	generateIndexSitemap: true,
	outDir: 'public',
	changefreq: 'weekly',
	priority: 0.7,
	transform: async (config, path) => {
		return {
			loc: path,
			changefreq: config.changefreq,
			priority: path === '/' ? 1.0 : config.priority,
			lastmod: new Date().toISOString(),
			images: [],
		}
	},
	robotsTxtOptions: {
		policies: [
			{ userAgent: '*', allow: '/' },
			{ userAgent: '*', disallow: ['/api/', '/_next/'] },
		],
		extraSitemaps: [`${siteUrl}/sitemap.xml`],
	},
}
