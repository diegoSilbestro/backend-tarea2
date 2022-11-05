const express = require('express')
const routerUsers = express.Router() //ruteador de express
const {userController} = require("../controllers/userController")


routerUsers.get('/:nombre', userController)

module.exports = routerUsers; 