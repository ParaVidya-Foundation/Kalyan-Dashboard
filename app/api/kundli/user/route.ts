import { NextResponse } from "next/server"
import { sampleKundliData, additionalSampleKundlis } from "@/lib/dummy-data"

export async function GET() {
	try {
		const userKundlis = [sampleKundliData, ...additionalSampleKundlis]
		return new NextResponse(JSON.stringify(userKundlis), {
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "private, max-age=60",
			},
		})
	} catch (error) {
		console.error("Error fetching user Kundlis:", error)
		return NextResponse.json({ error: "Failed to fetch Kundlis" }, { status: 500 })
	}
}
