import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next.js 16 shares `next-instant-navigation-testing` across all localhost ports.
// Anchor Fiscus (localhost:3001) can set this cookie and interfere with navigation here.
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  if (request.cookies.has("next-instant-navigation-testing")) {
    response.cookies.delete("next-instant-navigation-testing");
  }
  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon\\.ico).*)",
};
