import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	try {
		const url = new URL(request.url)
		const segments = url.pathname.split("/")
		const idRaw = segments[segments.length - 1] || ""
		const id = idRaw.replace(/[^a-zA-Z0-9_\-]/g, "")
		if (!id) {
			return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
		}

		return new NextResponse(
			JSON.stringify({ message: `Fetching Kundli with ID: ${id}` }),
			{
				headers: {
					"Content-Type": "application/json",
					"Cache-Control": "no-store",
				},
			}
		)
	} catch (error) {
		console.error("Error fetching Kundli:", error)
		return NextResponse.json({ error: "Failed to fetch Kundli" }, { status: 500 })
	}
}
