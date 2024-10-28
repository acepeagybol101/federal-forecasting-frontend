// app/api/posts/route.ts
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
        const userId = Number(sessionUserId); 
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


export async function POST(req: Request) {
    const connection = await getConnection();
    try {
        const { postId } = await req.json();

        if (!postId) {
            return NextResponse.json({ message: "Post ID is required." }, { status: 400 });
        }

        const query = `
            DELETE FROM post 
            WHERE id = ?
        `;
        
        const values = [postId];

        const [result] = await connection.execute(query, values);

        console.log("post removed:", result); 
        return NextResponse.json({ message: "Post removed successfully!" }, { status: 200 });
    } catch (error) {
        console.error('Error during DELETE:', error);
        return NextResponse.json({ message: "Error removing post." }, { status: 500 });
    } finally {
        connection.release();
    }
}

export async function PUT(req: Request) {
    const connection = await getConnection();
    const session = await getServerSession(authConfig); 
    const sessionUserId = session?.user?.id;

    try {
        const updatedPost = await req.json(); 
        const { id, title, image, audio, video } = updatedPost;

        // Validate session user ID
        if (!sessionUserId) {
            return NextResponse.json({ message: "Unauthorized: User session is required." }, { status: 401 });
        }

        // Validate post ID
        if (!id) {
            return NextResponse.json({ message: "Post ID is required." }, { status: 400 });
        }

        const fieldsToUpdate: string[] = [];
        const values: any[] = [];

        // Prepare fields to update
        if (title !== undefined) {
            fieldsToUpdate.push("title = ?");
            values.push(title);
        }

        if (image !== undefined) {
            fieldsToUpdate.push("image = ?");
            values.push(image);
        }

        if (audio !== undefined) {
            fieldsToUpdate.push("audio = ?");
            values.push(audio);
        }

        if (video !== undefined) {
            fieldsToUpdate.push("video = ?");
            values.push(video);
        }

        // Check if there are fields to update
        if (fieldsToUpdate.length === 0) {
            return NextResponse.json({ message: "No fields to update." }, { status: 400 });
        }

        values.push(id); // Add post ID to the values array
        values.push(sessionUserId); // Add user ID to the values array

        // Construct and execute the update query
        const query = `
            UPDATE post 
            SET ${fieldsToUpdate.join(", ")} 
            WHERE id = ? AND user_id = ?
        `;

        const [result] = await connection.execute(query, values);


        return NextResponse.json({ message: "Post updated successfully!" }, { status: 200 });
    } catch (error) {
        console.error('Error during update:', error);
        return NextResponse.json({ message: "Error updating post." }, { status: 500 });
    } finally {
        connection.release();
    }
}