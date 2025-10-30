import { NextResponse, type NextRequest } from "next/server"

function generateNonce() {
	return Buffer.from(crypto.randomUUID()).toString("base64")
}

function buildCsp(nonce: string) {
	const isProd = process.env.NODE_ENV === "production"
	const self = "'self'"
	const unsafeEval = "'unsafe-eval'"
	return [
		`default-src ${self}`,
		`script-src ${self} 'nonce-${nonce}'${isProd ? "" : ` ${unsafeEval}`}`,
		`style-src ${self} 'nonce-${nonce}' https://fonts.googleapis.com`,
		`img-src ${self} data: blob:`,
		`font-src ${self} https://fonts.gstatic.com`,
		`connect-src ${self}`,
		`frame-ancestors ${self}`,
		`base-uri ${self}`,
		`form-action ${self}`,
	].join("; ")
}

export function middleware(request: NextRequest) {
	const nonce = generateNonce()
	const response = NextResponse.next({ request: { headers: request.headers } })

	// Enforce HTTPS in production
	if (process.env.NODE_ENV === "production") {
		const proto = request.headers.get("x-forwarded-proto")
		if (proto && proto !== "https") {
			const url = new URL(request.url)
			url.protocol = "https:"
			return NextResponse.redirect(url.toString(), 308)
		}
	}

	const csp = buildCsp(nonce)
	response.headers.set("Content-Security-Policy", csp)
	response.headers.set("X-Content-Type-Options", "nosniff")
	response.headers.set("X-Frame-Options", "SAMEORIGIN")
	response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
	response.headers.set("Permissions-Policy", "geolocation=(), camera=(), microphone=()")
	response.headers.set("X-XSS-Protection", "0")
	response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
	response.headers.set("x-csp-nonce", nonce)

	// Same-origin CORS for API routes
	if (request.nextUrl.pathname.startsWith("/api")) {
		const origin = request.headers.get("origin") || ""
		const site = process.env.NEXT_PUBLIC_SITE_URL
		const allow = site && origin === site ? origin : ""
		if (allow) {
			response.headers.set("Access-Control-Allow-Origin", allow)
			response.headers.set("Vary", "Origin")
		}
		response.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
		response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, x-recaptcha-token")
	}

	return response
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|images|public).*)",
	],
}
