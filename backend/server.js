import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./src/lib/db.js"
import authRoutes from "./src/routes/auth.route.js"
import messageRoutes from "./src/routes/message.route.js"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5001

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
  console.log("server is running on port " + PORT)
  connectDB()
});