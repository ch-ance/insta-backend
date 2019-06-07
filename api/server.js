const express = require("express");
const cors = require("cors");

const users = require("../routers/users-router");
const auth = require("../routers/auth-router");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/users", users);
server.use("/api/auth", auth);

module.exports = server;
