const express = require('express')
const routerUsers = express.Router() //ruteador de express
const {userController} = require("../controllers/userController")


routerUsers.get('/users/:nombre', userController)



module.exports = routerUsers; 