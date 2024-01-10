// const CORS_HEADERS = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "OPTIONS, POST",
//     "Access-Control-Allow-Headers": "Content-Type",
//   },
// };

import type { ServerWebSocket } from "bun";

const clients = new Set<ServerWebSocket>();

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

const server = Bun.serve({
  port: 3001,
  fetch(req, server) {
    return new Response("Success!");
  },
});

console.log(`서버 오픈!`);
