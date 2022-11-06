const express = require('express')
const routerMaths = express.Router() //ruteador de express
const {divisionController, additionController, accessController} = require("../controllers/mathController")


routerMaths.get ('/division/:dividendo/:divisor', divisionController)

routerMaths.get ('/sumar/:a/:b', additionController)

routerMaths.get ('/acceso/', accessController)

module.exports = routerMaths;
