import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { RowDataPacket } from 'mysql2'; 
import getConnection from './db';

interface ExtendedUser extends User {
  id: string; 
}

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Received credentials:", credentials);
        
        if (!credentials || !credentials.email || !credentials.password) {
          return null; 
        }

        const connection = await getConnection();
        const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM users WHERE email = ?', [credentials.email]);
        
        if (Array.isArray(rows) && rows.length > 0) {
          const user = rows[0];

          if (user.password === credentials.password) {
            const { password, ...userWithoutPassword } = user;
            console.log("User without password:", userWithoutPassword);
            return {
                
              id: String(user.id), 
              ...userWithoutPassword,
            } as ExtendedUser; 
          }
        }
        return null; 
      }
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; 
      }
      return token;
    },
    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id as string; 
      }
      return session;
    }
  }
};
