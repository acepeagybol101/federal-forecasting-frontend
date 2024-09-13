import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const user = await request.json();
    const newUser = {
        email: user.email,
        password: user.password,
    };

    console.log(newUser);

    return new NextResponse(JSON.stringify(newUser), { status: 200 });
}
