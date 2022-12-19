import express from "express"
import { authUser, getUserInfo, signup } from "../controller/user.controller.js"
import { protect } from "../middleware/auth.js"
const router = express.Router()

router.route("/signup").post(signup)
router.route("/login").post(authUser)
router.route("/:id").get(getUserInfo)

export default router
