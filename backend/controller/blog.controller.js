import Blog from "../model/blog.model.js"

//post blog
export const postBlog = async (req, res) => {
  const { title, desc, picture, userId, category, createdDate } = req.body

  try {
    const newBlog = await Blog.create({
      title: title,
      desc: desc,
      picture: picture,
      userId: userId,
      category: category,
      createdDate: createdDate,
    })
    if (newBlog) {
      const savedBlog = await newBlog.save()
      res.status(200).send(savedBlog)
    }
  } catch (error) {
    res.status(400).json({ msg: "Unable to post blog" })
  }
}

//delete blog
export const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id

    const blog = await Blog.findByIdAndDelete(id)
    if (blog) {
      res.status(200).send(blog)
    }
  } catch (error) {
    res.status(400).json({ msg: "Unable to delete blog" })
  }
}

//get blog by id
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
    if (blog) {
      res.status(200).send(blog)
    }
  } catch (error) {
    res.status(400).json({ msg: "Unable to find blog" })
  }
}

//get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({})
    res.status(200).send(blogs)
  } catch (error) {
    res.status(400).json({ msg: "Unable to fetch blogs" })
  }
}

//get my blogs
export const myBlogs = async (req, res) => {
  try {
    const id = req.params.id
    const blogs = await Blog.find({ userId: id })
    res.status(200).send(blogs)
  } catch (error) {
    res.status(400).json({ msg: "Unable to fetch your blogs" })
  }
}
