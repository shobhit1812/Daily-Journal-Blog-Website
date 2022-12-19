import jwt from "jsonwebtoken"
import User from "../model/user.model.js"

export const protect = async (req, res, next) => {
  var token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select("-password")
      next()
    } catch (error) {
      console.error(error)
      res.status(401).json({ msg: "Not authorized" })
    }
  }
}
