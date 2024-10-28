// app/api/posts/route.ts
import { NextResponse } from "next/server";
import getConnection from "@/lib/db"; 
import { RowDataPacket } from "mysql2/promise";

export async function GET(req: Request) {
    const connection = await getConnection(); 

    try {
        // Query to get posts
        const [posts] = await connection.execute<RowDataPacket[]>(`
            SELECT p.*, u.name as userName 
            FROM post p 
            JOIN users u ON p.user_id = u.id 
            ORDER BY p.created_at DESC
        `);

        if (posts.length === 0) {
            console.error("No posts yet");
        }

        console.log("result: ", posts);
        return NextResponse.json({ 
            posts: posts.map(post => ({
                id:post.id,
                user_id: post.user_id,
                title: post.title,
                image: post.image,
                audio: post.audio,
                video: post.video,
                userName: post.userName,
                created_at: post.created_at,
            })) 
        }, { status: 200 });
    } catch (error) {
        console.error('Database fetch error:', error);
        return NextResponse.json({ message: "Error fetching posts." }, { status: 500 });
    } finally {
        connection.release(); 
    }
}
