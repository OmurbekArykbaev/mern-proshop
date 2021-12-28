import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Omurbek Arykbaev",
    email: "omka@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jekshen Doenbaev",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
