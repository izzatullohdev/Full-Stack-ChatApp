const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors = require("cors");
app.use(cors());

// Listen App file
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
