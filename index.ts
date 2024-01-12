const CORS_HEADERS = {
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST",
    "Access-Control-Allow-Headers": "Content-Type",
  },
};

import type { ServerWebSocket } from "bun";
import client from "./db/connect";

// const clients = new Set<ServerWebSocket>();

// const server = Bun.serve({
//   port: 3001,
//   fetch(req, server) {
//     if (server.upgrade(req)) {
//       return; // do not return a Response
//     }
//     return new Response("Upgrade failed :(", { status: 500 });
//   },
//   websocket: {
//     message(ws, message) {
//       clients.forEach((client) => {
//         if (client.readyState === WebSocket.OPEN) {
//           client.send(message);
//         }
//       });
//     }, // a message is received
//     open(ws: ServerWebSocket) {
//       clients.add(ws);
//       console.log("OPEN WEBSOCKET?");
//     }, // a socket is opened
//     close(ws, code, message) {
//       console.log("CLOSE WEBSOCKET");
//     }, // a socket is closed
//     drain(ws) {
//       console.log("READY SOCKET");
//     }, // the socket is ready to receive more data
//   }, // handlers
// });

const createDBTable = async () => {
  const exampleQuery = "select * from employee";
  try {
    return new Promise((resolve, rejects) => {
      client.query(exampleQuery, (err, res) => {
        if (err) {
          rejects(err);
        }
        resolve(res);
        console.log("res=", res.rows);
      });
    });
  } catch (err) {
    throw err;
  }
};

const server = Bun.serve({
  port: process.env.DATABASE_PORT,
  async fetch(req, server) {
    await createDBTable();
    return new Response(JSON.stringify("Success!"), CORS_HEADERS);
  },
});

console.log(`서버 오픈!`);
