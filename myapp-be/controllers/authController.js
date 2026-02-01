const fs = require("fs")
const { createToken } = require("../utils/jwt")

function getUsers() {
  const db = JSON.parse(fs.readFileSync("./db.json", "UTF-8"))
  return db.users
}

function login(req, res) {
  const { email, password } = req.body
  console.log("LOGIN HIT")
  console.log("BODY:", req.body)

  const user = getUsers().find(u => u.email === email && u.password === password)
  if (!user) return res.status(401).json({ message: "Invalid credentials" })

  const accessToken = createToken({ id: user.id, email: user.email })
  res.json({ accessToken })
}

module.exports = { login }
