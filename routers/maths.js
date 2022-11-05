const express = require('express')
const routerMaths = express.Router() //ruteador de express
const {divisionController} = require("../controllers/divisionController")
const {additionController} = require("../controllers/additionController")


routerMaths.get ('/:dividendo/:divisor', divisionController)

routerMaths.get ('/:a/:b', additionController)

module.exports = routerMaths;
