const express = require ('express')
const routerList = express.Router()
const {listController, postController} = require ("../controllers/listController")


routerList.get ('', listController)
routerList.post ("/crear", postController)

module.exports = routerList