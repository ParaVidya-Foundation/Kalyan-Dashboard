"use client"

import { useKundliStore } from "@/lib/store"
import dynamic from "next/dynamic"

const KundliProfile = dynamic(() => import("@/components/dashboard/info").then(m => m.KundliProfile), { ssr: true })
const Aisection = dynamic(() => import("@/components/dashboard/AI-section"), { ssr: false })
const Dashasection = dynamic(() => import("@/components/dashboard/Dasha-section"), { ssr: false })
const Chartsection = dynamic(() => import("@/components/dashboard/chart-section").then(m => m.Chartsection), { ssr: false })

export function DashboardOverview() {
	const { currentKundli } = useKundliStore()

	if (!currentKundli) {
		return (
			<div className="flex items-center justify-center h-64">
				<p className="text-muted-foreground">No Kundli data available</p>
			</div>
		)
	}

	return (
		<div className="flex flex-col w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
			{/* Profile Section */}
			<section className="p-6">
				<KundliProfile
					name={currentKundli.name ?? "Unknown"}
					dateOfBirth={currentKundli.dateOfBirth ?? "N/A"}
					timeOfBirth={currentKundli.dateOfBirth ?? "N/A"}
					placeOfBirth={currentKundli.placeOfBirth ?? "N/A"}
				/>
			</section>

			{/* Divider */}
			<div className="border-t border-gray-200" />

			{/* Charts Section */}
			<section className="p-6">
				<Chartsection />
			</section>

			{/* Divider */}
			<div className="border-t border-gray-200" />

			{/* Dasha Section */}
			<section className="p-6">
				<Dashasection />
			</section>

			{/* Divider */}
			<div className="border-t border-gray-200" />

			{/* AI Section */}
			<section className="p-6">
				<Aisection />
			</section>
		</div>
	)
}
