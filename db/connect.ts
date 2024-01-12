import postgres from "postgres";
import { Pool } from "pg";

// const sql = postgres({
//   host: process.env.DATABASE_HOST,
//   database: process.env.DATABASE_NAME,
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   ssl: "require",
// });

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect((err) => {
  if (err) {
    console.log("Failed to connect db " + err);
  } else {
    console.log("Connect to db done!");
  }
});

export default client;
