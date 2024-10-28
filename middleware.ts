import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasToken = request.cookies.has("next-auth.session-token") || request.cookies.has("__Secure-next-auth.session-token");
  
  if (hasToken && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!hasToken && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ["/", "/profile", "/home", "/login"], 
};