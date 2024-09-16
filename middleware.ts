import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest)
{
    if (!request.cookies.has('token')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (request.cookies.has('token')) {
        return NextResponse.redirect('/home');
    }
}

export const config = {
    matcher: 
    [
        '/home'
    ]
}