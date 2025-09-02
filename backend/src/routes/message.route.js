import express from "express"
import ProtectRoute from "../middleware/auth.middleware"
import { getMessages, getUsersForSidebar } from "../controllers/message.controller"

const router = express.Router()

router.get("/users", ProtectRoute, getUsersForSidebar)
router.get("/:id", ProtectRoute, getMessages)

export default router