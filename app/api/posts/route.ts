import { NextResponse } from "next/server";
import getConnection from "@/lib/db"; 
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";

interface PostRequestBody {
  title: string;
  fileURL?: string;  
}

async function getFileType(url: string): Promise<string> {
  const response = await fetch(url, { method: 'HEAD' });
  return response.headers.get('Content-Type') || '';
}

export async function POST(req: Request) {
  let connection;
  const session = await getServerSession(authConfig);
  try {
    const { title, fileURL }: PostRequestBody = await req.json(); 
    connection = await getConnection(); 
    console.log("Session object:", session);
    const userId = session?.user.id;

    let image = '', audio = '', video = '';

    if (fileURL) {  
      const fileType = await getFileType(fileURL);

      if (fileType.startsWith('image/')) {
        image = fileURL;
      } else if (fileType.startsWith('audio/')) {
        audio = fileURL;
      } else if (fileType.startsWith('video/')) {
        video = fileURL;
      } else {
        return NextResponse.json({ message: "Unsupported file type." }, { status: 400 });
      }
    }

    const query = `
      INSERT INTO post (user_id, title, description, image, audio, video, video_thumbnail, status, deleted_at, created_at, updated_at) 
      VALUES (?, ?, '', ?, ?, ?, '', '0', NULL, NOW(), NOW())
    `;

    const values = [
      userId,
      title || '',  
      image || '',  
      audio || '',  
      video || '',  
    ];

    console.log('value', values);
    const [result] = await connection.execute(query, values);
    console.log("Insert Result:", result); 

    return NextResponse.json({ 
      message: "Post created successfully!", 
    }, { status: 200 });
  } catch (error) {
    console.error('Error during POST:', error); 
    return NextResponse.json({ message: "Error saving post." }, { status: 500 });
  } finally {
    if (connection) {
      connection.release(); 
    }
  }
}
