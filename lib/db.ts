// lib/db.js or lib/db.ts
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  connectionLimit: 10, 
  waitForConnections: true, 
  queueLimit: 0, 
});

const getConnection = async () => {
  const connection = await pool.getConnection();
  return connection;
};

export default getConnection; // Default export
