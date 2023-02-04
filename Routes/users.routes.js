const { loginUser, registerUser } = require("../controllers/users.controller")

const usersRoute = require("express").Router()

usersRoute.post('/users',loginUser)
usersRoute.post('/users/register',registerUser)


module.exports={usersRoute}