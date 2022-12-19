import express from "express"
import {
  deleteBlog,
  getAllBlogs,
  getBlog,
  postBlog,
  myBlogs,
} from "../controller/blog.controller.js"
import { protect } from "../middleware/auth.js"
const router = express.Router()

router.route("/").post(protect, postBlog)
router.route("/:id").delete(deleteBlog)
router.route("/:id").get(getBlog)
router.route("/myblogs/:id").get(myBlogs)
router.route("/").get(getAllBlogs)

export default router
