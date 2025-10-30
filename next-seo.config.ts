import { type NextSeoProps } from "next-seo"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kundlipro.example"

const config: NextSeoProps = {
	titleTemplate: "%s | KundliPro",
	defaultTitle: "KundliPro - Professional Vedic Astrology",
	description:
		"Generate accurate Kundli charts with detailed predictions and astrological analysis.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: "KundliPro",
		images: [
			{
				url: `${siteUrl}/placeholder.jpg`,
				width: 1200,
				height: 630,
				alt: "KundliPro preview",
			},
		],
	},
	twitter: {
		cardType: "summary_large_image",
		handle: "@kundlipro",
		site: "@kundlipro",
	},
	additionalLinkTags: [
		{ rel: "icon", href: "/Logo/Logo.png" },
	],
	additionalMetaTags: [
		{ name: "application-name", content: "KundliPro" },
		{ name: "theme-color", content: "#ffffff" },
	],
}

export default config
