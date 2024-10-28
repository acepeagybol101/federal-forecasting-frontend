import { NextResponse } from "next/server";
import getConnection from "@/lib/db"; 
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { RowDataPacket } from "mysql2/promise";

export async function GET(req: Request) {
    const connection = await getConnection();

    try {
        const query = `
            SELECT 
                post_id,
                user_id
            FROM 
                post_likes
        `;

        const [likes] = await connection.execute<RowDataPacket[]>(query);

        return NextResponse.json({
            likes: likes.map(like => ({
                post_id: like.post_id,
                user_id: like.user_id, 
            })),
        }, { status: 200 });
    } catch (error) {
        console.error('Database fetch error:', error);
        return NextResponse.json({ message: "Error fetching likes." }, { status: 500 });
    } finally {
        connection.release();
    }
}

export async function POST(req: Request) {
    const connection = await getConnection();
    const session = await getServerSession(authConfig);
    const sessionUserId = session?.user?.id;

    try {
        const { postId } = await req.json();

        if (!postId) {
            return NextResponse.json({ message: "Post ID is required." }, { status: 400 });
        }

        const query = `
            INSERT INTO post_likes (post_id, user_id, deleted_at, created_at, updated_at) 
            VALUES (?, ?, NULL, NOW(), NULL)
        `;
        
        const values = [postId, sessionUserId];

        const [result] = await connection.execute(query, values);
        console.log("Like added:", result); 

        return NextResponse.json({ message: "Like added successfully!" }, { status: 200 });
    } catch (error) {
        console.error('Error during POST:', error);
        return NextResponse.json({ message: "Error sending like." }, { status: 500 });
    } finally {
        connection.release();
    }
}

// Handle DELETE request to remove a like
export async function DELETE(req: Request) {
    const connection = await getConnection();
    const session = await getServerSession(authConfig);
    const sessionUserId = session?.user?.id;

    try {
        const { postId } = await req.json();

        if (!postId) {
            return NextResponse.json({ message: "Post ID is required." }, { status: 400 });
        }

        const query = `
            DELETE FROM post_likes 
            WHERE post_id = ? AND user_id = ?
        `;
        
        const values = [postId, sessionUserId];

        const [result] = await connection.execute(query, values);
        console.log("Like removed:", result); 

        return NextResponse.json({ message: "Like removed successfully!" }, { status: 200 });
    } catch (error) {
        console.error('Error during DELETE:', error);
        return NextResponse.json({ message: "Error removing like." }, { status: 500 });
    } finally {
        connection.release();
    }
}


