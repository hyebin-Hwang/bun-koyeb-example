import postgres from "postgres";
import { Pool } from "pg";

const client = new Pool({
  host: import.meta.env.DATABASE_HOST,
  database: import.meta.env.DATABASE_NAME,
  user: import.meta.env.DATABASE_USER,
  password: import.meta.env.DATABASE_PASSWORD,
  ssl: true,
  port: Number(import.meta.env.DATABASE_PORT),
});

// const client = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
//   port: Number(process.env.DATABASE_PORT),
// });

client.connect((err) => {
  if (err) {
    console.log("Failed to connect db " + err);
  } else {
    console.log("Connect to db done!");
  }
});

export default client;
