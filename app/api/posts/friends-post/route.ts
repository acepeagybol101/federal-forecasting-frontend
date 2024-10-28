import { NextResponse } from "next/server";
import getConnection from "@/lib/db"; 
import { RowDataPacket } from "mysql2/promise";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

export async function GET(req: Request) {
    const connection = await getConnection(); 
    const session = await getServerSession(authConfig); 
    const sessionUserId = session?.user?.id;

    // Extract the userId from the request URL
    const { searchParams } = new URL(req.url);
    const userId = Number(searchParams.get('userId'));

    try {
        // Use the userId from the parameters in the query
        const [posts] = await connection.execute<RowDataPacket[]>(`
            SELECT p.*, u.name as userName 
            FROM post p 
            JOIN users u ON p.user_id = u.id 
            WHERE p.user_id = ? 
            ORDER BY p.created_at DESC
        `, [userId]); 

        if (posts.length === 0) {
            console.error("No posts found for this user");
        }

        console.log("result: ", posts);
        return NextResponse.json({ 
            posts: posts.map(post => ({
                id: post.id,
                user_id: post.user_id,
                title: post.title,
                image: post.image,
                audio: post.audio,
                video: post.video,
                userName: post.userName,
            })) 
        }, { status: 200 });
    } catch (error) {
        console.error('Database fetch error:', error);
        return NextResponse.json({ message: "Error fetching posts." }, { status: 500 });
    } finally {
        connection.release(); 
    }
}
