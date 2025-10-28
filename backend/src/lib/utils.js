import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: "7d"
  })

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true, // prevent client-side JS from accessing the cookie & XSS attacks from cross-site scripting attacks
    sameSite: "none", // CSRF attacks from cross-site request forgery attacks
    secure: true
  })
  
  return token
}