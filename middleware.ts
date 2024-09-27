import { NextResponse, type NextRequest } from "next/server";
import { auth } from "./middlewares/auth";
import { guest } from "./middlewares/guest";

export function middleware(request: NextRequest) {
  if (
    request.cookies.has("token") &&
    request.nextUrl.pathname.startsWith("/login")
  ) {
    return auth(request);
  }

  if (
    !request.cookies.has("token") &&
    !request.nextUrl.pathname.startsWith("/login")
  ) {
    return guest(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile", "/home", "/login"],
};
