import User from "../model/user.model.js"
import { generateToken } from "../utils/generateToken.js"
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
  const { name, email, password } = req.body
  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400).json({ msg: "user already exist" })
    throw new Error()
  }
  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(password, salt)
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401).json({ msg: "invalid user data" })
    throw new Error()
  }
}

//login
export const authUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    if (await bcryptjs.compare(password, user.password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(401).json({ msg: "wrong password" })
      throw new Error("Invalid Email or Password")
    }
  } else {
    res.status(401).json({ msg: "user not found" })
    throw new Error("User Not Found")
  }
}

//get user info
export const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (user) {
      res.status(200).send(user)
    }
  } catch (error) {
    res.status(400).json({ msg: "Unable to find user" })
  }
}
