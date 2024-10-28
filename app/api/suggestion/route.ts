// app/api/users/route.ts
import { NextResponse } from "next/server";
import getConnection from "@/lib/db"; 
import { RowDataPacket } from "mysql2/promise";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export async function GET(req: Request) {
    const connection = await getConnection(); 
    const session = await getServerSession(authConfig); 
    const sessionUserId = session?.user?.id;

    try {
        const [users] = await connection.execute<RowDataPacket[]>(`
            SELECT id, name, email 
            FROM users 
            WHERE id != ?
            AND id NOT IN (
                SELECT sender_id FROM friends WHERE receiver_id = ?
            )
            AND id NOT IN (
                SELECT receiver_id FROM friends WHERE sender_id = ?
            )
        `, [sessionUserId, sessionUserId, sessionUserId]);

        return NextResponse.json({ 
            users: users.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email
            })) 
        }, { status: 200 });
    } catch (error) {
        console.error('Database fetch error:', error);
        return NextResponse.json({ message: "Error fetching users." }, { status: 500 });
    } finally {
        connection.release(); 
    }
}

export async function POST(req: Request) {
    const connection = await getConnection();
    const session = await getServerSession(authConfig);
    const sessionUserId = session?.user?.id;

    try {
        const { receiverId } = await req.json(); 
        const query = `
            INSERT INTO friends (sender_id, receiver_id, is_accepted, deleted_at, created_at, updated_at)
            VALUES (?, ?, 0, NULL, NOW(), NOW())
        `;
        const values = [sessionUserId, receiverId];

        const [result] = await connection.execute(query, values);
        console.log("Friend request sent:", result);

        return NextResponse.json({ message: "Friend request sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error('Error during POST:', error);
        return NextResponse.json({ message: "Error sending friend request." }, { status: 500 });
    } finally {
        connection.release();
    }
}