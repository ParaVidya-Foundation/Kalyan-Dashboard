import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Force HTTPS in production
  const url = request.nextUrl
  if (process.env.NODE_ENV === "production") {
    const host = request.headers.get("host") || ""
    const proto = request.headers.get("x-forwarded-proto")
    const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1")
    if (!isLocal && proto && proto !== "https") {
      url.protocol = "https:"
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}


