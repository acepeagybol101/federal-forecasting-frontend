import { NextResponse, type NextRequest } from "next/server";

export function guest(request: NextRequest)
{
    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: 
    [
        '/profile',
        '/home'
    ]
}