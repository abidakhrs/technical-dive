const express = require("express")
const cors = require("cors")
const jsonServer = require("json-server")
require('dotenv').config()

const authRoutes = require("./routes/authRoute")
const dashboardRoutes = require("./routes/dashboardRoute")

const server = express()
server.use(cors())
server.use(express.json())
// Serve React static files
// server.use(express.static(path.join(__dirname, "../myapp/dist")));

// // Catch-all: return index.html for React Router
// server.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../myapp/dist/index.html"));
// });

server.use("/auth", authRoutes)
server.use("/dashboard", dashboardRoutes)
const router = jsonServer.router("db.json")
server.use("/api", router)

// server.post("/test", (req, res) => res.send("works"))

server.get("/", (req, res) => {
    res.json({ message: "API running" })
  })

server.listen(4000, () => console.log("Backend running on http://localhost:4000"))
