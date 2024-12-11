const express = require("express");
const http = require("http");
const WebSocket = require("ws");
require("dotenv").config();
const app = express();
const server = http.createServer(app);
const wss = new WebSocket(server);
const cors = require("cors");
const connectDB = require("./config/db");
connectDB();
cors();

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 5000");
});
