import { NextResponse, type NextRequest } from "next/server";

export function auth(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}
