export const signup = (req, res) => {
  const {fullname, email, password} = req.body
  try{
    // const user

  } catch(err){

  }
};

export const login = (req, res) => {
  res.send("Login route")
};

export const logout = (req, res) => {
  res.send("Logout route")
};