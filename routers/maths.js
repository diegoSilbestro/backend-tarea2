const express = require('express')
const routerMaths = express.Router() //ruteador de express
const {divisionController} = require("../controllers/divisionController")
const {additionController} = require("../controllers/additionController")


//routerMaths.get ('/:dividendo/:divisor', divisionController)

routerMaths.get ('/:a/:b', (res,req) =>{
    
    let num1 = Number(req.params.a),
        num2 = Number (req.params.b);
    if (num1 < 0 || num2 < 0) {
        res.send ('No se deben enviar valores menores a 0')
    } else {
        res.json( (num1+num2))
    }
})

module.exports = routerMaths;
