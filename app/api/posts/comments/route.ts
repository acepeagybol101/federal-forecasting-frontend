import { NextResponse } from "next/server";
import getConnection from "@/lib/db"; 
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { RowDataPacket } from "mysql2/promise";

export async function POST(req: Request) {
    const connection = await getConnection();
    const session = await getServerSession(authConfig);
    const sessionUserId = session?.user?.id;

    try {
        const { postId, comment } = await req.json();

        if (!postId || !comment) {
            return NextResponse.json({ message: "Post ID and comment are required." }, { status: 400 });
        }

        const query = `
            INSERT INTO post_comments (post_id, user_id, comment, status, created_at, updated_at) 
            VALUES (?, ?, ?, '1', NOW(), NULL)
        `;
        
        const values = [postId, sessionUserId, comment];

        const [result] = await connection.execute(query, values);
        console.log("Comment added:", result); 

        return NextResponse.json({ message: "Comment added successfully!" }, { status: 200 });
    } catch (error) {
        console.error('Error during POST:', error);
        return NextResponse.json({ message: "Error adding comment." }, { status: 500 });
    } finally {
        connection.release();
    }
}

export async function GET(req: Request) {
    const connection = await getConnection(); 

    try {
        const query = `
            SELECT 
                c.id AS commentId, 
                c.comment, 
                u.id AS userId, 
                u.name AS userName,
                c.post_id  -- Include post_id from post_comments
            FROM 
                post_comments c 
            JOIN 
                users u ON c.user_id = u.id 
            ORDER BY 
                c.created_at DESC
        `;

        const [comments] = await connection.execute<RowDataPacket[]>(query);
        console.log("comments:", comments);
        return NextResponse.json({ 
            comments: comments.map(comment => ({
                id: comment.commentId,  
                comment: comment.comment,
                userID: comment.userId,
                userName: comment.userName,
                post_id: comment.post_id,  
            })) 
        }, { status: 200 });
    } catch (error) {
        console.error('Database fetch error:', error);
        return NextResponse.json({ message: "Error fetching comments." }, { status: 500 });
    } finally {
        connection.release(); 
    }
}


export async function DELETE(req: Request) {
    const connection = await getConnection();
    try {
        const { commentId } = await req.json();

        if (!commentId) {
            return NextResponse.json({ message: "Post ID is required." }, { status: 400 });
        }

        const query = `
            DELETE FROM post_comments
            WHERE id = ?
        `;
        
        const values = [commentId];

        const [result] = await connection.execute(query, values);

        console.log("comment removed:", result); 
        return NextResponse.json({ message: "comment removed successfully!" }, { status: 200 });
    } catch (error) {
        console.error('Error during DELETE:', error);
        return NextResponse.json({ message: "Error removing comment." }, { status: 500 });
    } finally {
        connection.release();
    }
}

export async function PUT(req: Request) {
    const connection = await getConnection();
    const session = await getServerSession(authConfig);
    const sessionUserId = session?.user?.id;

    try {
        const { commentId, comment } = await req.json();

        if (!commentId || !comment) {
            return NextResponse.json({ message: "Comment ID and new comment are required." }, { status: 400 });
        }

        // Update comment only if it belongs to the current user
        const query = `
            UPDATE post_comments
            SET comment = ?, updated_at = NOW()
            WHERE id = ? AND user_id = ?
        `;

        const values = [comment, commentId, sessionUserId];
        const [result] = await connection.execute(query, values);

        console.log("Comment updated:", result);

        return NextResponse.json({ message: "Comment updated successfully!" }, { status: 200 });
    } catch (error) {
        console.error('Error during PUT:', error);
        return NextResponse.json({ message: "Error updating comment." }, { status: 500 });
    } finally {
        connection.release();
    }
}