import { type NextRequest, NextResponse } from "next/server"
import type { KundliFormData, KundliData } from "@/lib/api"
import { verifyRecaptcha } from "@/lib/recaptcha"

function sanitizeString(value: unknown): string {
	return typeof value === "string" ? value.replace(/[<>]/g, "") : ""
}

function normalizeGender(value: unknown): "male" | "female" {
	const v = sanitizeString(value).toLowerCase()
	return v === "female" ? "female" : "male"
}

function sanitizeForm(data: any): KundliFormData {
	return {
		name: sanitizeString(data?.name),
		gender: normalizeGender(data?.gender),
		dateOfBirth: sanitizeString(data?.dateOfBirth),
		timeOfBirth: sanitizeString(data?.timeOfBirth),
		placeOfBirth: sanitizeString(data?.placeOfBirth),
	}
}

export async function POST(request: NextRequest) {
	try {
		const token = request.headers.get("x-recaptcha-token") || undefined
		const valid = await verifyRecaptcha(token)
		if (!valid) {
			return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 400 })
		}

		const payload = await request.json()
		const formData: KundliFormData = sanitizeForm(payload)

		const mockKundli: KundliData = {
			id: `kundli_${Date.now()}`,
			name: formData.name,
			dateOfBirth: formData.dateOfBirth,
			placeOfBirth: formData.placeOfBirth,
			generatedAt: new Date().toISOString(),
			personalInfo: formData,
			charts: {
				birthChart: [
					[7, 0, 0],
					[0, 1, 8],
					[6, 5, 4],
				],
				navamsa: [
					[3, 9, 2],
					[4, 1, 12],
					[5, 6, 11],
				],
				dashamsa: [
					[2, 3, 1],
					[11, 1, 5],
					[10, 9, 6],
				],
			},
			planetaryPositions: [
				{ planet: "Sun", sign: "Aries", degree: "15°30'", house: 1 },
				{ planet: "Moon", sign: "Taurus", degree: "22°45'", house: 2 },
				{ planet: "Mars", sign: "Gemini", degree: "8°12'", house: 3 },
				{ planet: "Mercury", sign: "Aries", degree: "28°55'", house: 1 },
				{ planet: "Jupiter", sign: "Sagittarius", degree: "12°30'", house: 9 },
				{ planet: "Venus", sign: "Pisces", degree: "5°18'", house: 12 },
				{ planet: "Saturn", sign: "Capricorn", degree: "18°42'", house: 10 },
				{ planet: "Rahu", sign: "Cancer", degree: "25°15'", house: 4 },
				{ planet: "Ketu", sign: "Capricorn", degree: "25°15'", house: 10 },
			],
			predictions: [
				{
					category: "Career & Finance",
					description: "Favorable period for steady growth and new opportunities.",
					strength: "medium",
				},
			],
		}

		return new NextResponse(JSON.stringify(mockKundli), {
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "private, max-age=0, must-revalidate",
			},
		})
	} catch (error) {
		console.error("Error generating Kundli:", error)
		return NextResponse.json({ error: "Failed to generate Kundli" }, { status: 500 })
	}
}
