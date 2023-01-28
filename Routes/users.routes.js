const { loginUser, registerUser } = require("../controllers/users.controller")

const usersRoute = require("express").Router()

usersRoute.get('users',loginUser)
usersRoute.post('users',registerUser)


module.exports={usersRoute}