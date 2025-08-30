import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const {fullname, email, password} = req.body
  try{
    if(password.length < 6 || password.length > 20){
      return res.status(400).json({ message: "Password must be between 6 and 20 characters" })
    }
    const user = await User.findOne({ email })
    if(user) return res.status(400).json({ message: "User already exists" })

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({ fullname, email, password: hashedPassword })
    if(newUser){
      // generate JWT token here
    } else {
      return res.status(400).json({ message: "Invalid user data" })
    }

  } catch(err){
    console.error(err)
  }
};

export const login = (req, res) => {
  co
};

export const logout = (req, res) => {
  res.send("Logout route")
};