"use client"

import React from "react"
import { OrganizationJsonLd, LogoJsonLd, WebPageJsonLd, SiteLinksSearchBoxJsonLd } from "next-seo"

export default function StructuredData() {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kundlipro.example"
	return (
		<>
			<OrganizationJsonLd
				name="KundliPro"
				url={siteUrl}
				logo={`${siteUrl}/Logo/Logo.png`}
				contactPoint={[{ contactType: "customer service", email: "support@kundlipro.example" }]}
			/>
			<LogoJsonLd logo={`${siteUrl}/Logo/Logo.png`} url={siteUrl} />
			<WebPageJsonLd
				id={`${siteUrl}/#webpage`}
				url={siteUrl}
				title="KundliPro - Professional Vedic Astrology"
				description="Generate accurate Kundli charts with detailed predictions and astrological analysis."
				isPartOf={{ id: `${siteUrl}/#website` }}
			/>
			<SiteLinksSearchBoxJsonLd
				url={siteUrl}
				potentialActionTargets={[`${siteUrl}/?q`]} // Adjust when search is added
			/>
		</>
	)
}
