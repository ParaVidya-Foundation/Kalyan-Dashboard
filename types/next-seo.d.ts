declare module "next-seo" {
	import * as React from "react"
	export interface NextSeoProps { [key: string]: any }
	export interface DefaultSeoProps extends NextSeoProps {}
	export const DefaultSeo: React.FC<DefaultSeoProps>
	export const FAQPageJsonLd: React.FC<any>
	export const OrganizationJsonLd: React.FC<any>
	export const LogoJsonLd: React.FC<any>
	export const WebPageJsonLd: React.FC<any>
	export const SiteLinksSearchBoxJsonLd: React.FC<any>
}

declare module "@/next-seo.config" {
	const config: any
	export default config
}
