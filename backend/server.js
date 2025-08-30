import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./src/lib/db.js"
import authRoutes from "./src/routes/auth.route.js"

dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5001

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log("server is running on port " + PORT)
  connectDB()
});