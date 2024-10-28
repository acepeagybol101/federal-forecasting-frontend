import { NextResponse } from "next/server";
import getConnection from "@/lib/db"; 
import { RowDataPacket } from "mysql2/promise";

export async function GET(req: Request) {
    const connection = await getConnection(); 

    const { searchParams } = new URL(req.url);
    const userId = Number(searchParams.get('userId'));

    try {
        // Simplified query to select only the user's id and name
        const [users] = await connection.execute<RowDataPacket[]>(`
            SELECT id, name 
            FROM users 
            WHERE id = ? 
        `, [userId]); 

        if (users.length === 0) {
            console.error("No user found with this userId");
            return NextResponse.json({ message: "User not found." }, { status: 404 });
        }

        console.log("result: ", users);
        return NextResponse.json({ 
            user: {
                id: users[0].id,
                name: users[0].name
            }
        }, { status: 200 });
    } catch (error) {
        console.error('Database fetch error:', error);
        return NextResponse.json({ message: "Error fetching user." }, { status: 500 });
    } finally {
        connection.release(); 
    }
}