
import { NextResponse } from "next/server";
import getConnection from "@/lib/db"; 
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
    const connection = await getConnection();
    const session = await getServerSession(authConfig);
    const sessionUserId = session?.user?.id;
  
    try {
      const { receiverId } = await req.json();
  
      const query = `
        DELETE FROM friends 
        WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)
      `;
      const values = [sessionUserId, receiverId, receiverId, sessionUserId];
  
      await connection.execute(query, values);
      console.log("Friend request removed for:", receiverId);
  
      return NextResponse.json({ message: "Friend request removed successfully!" }, { status: 200 });
    } catch (error) {
      console.error('Error during POST:', error);
      return NextResponse.json({ message: "Error removing friend request." }, { status: 500 });
    } finally {
      connection.release();
    }
  }