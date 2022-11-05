const express = require('express')
const app = express()


const routerMaths = require("./routers/maths")

app.use('/dividir', routerMaths)

app.use('/sumar', routerMaths)

// app.get('/sumar/:a/:b', (req, res) => {
//   let num1 = Number(req.params.a),
//     num2 = Number (req.params.b);
//   if (num1 < 0 || num2 < 0) {
//     res.send ('No se deben enviar valores menores a 0')
//   } else {
//     res.json( (num1+num2))
//   }
// })

app.get('/acceso', (req, res) => {
  let num = Number(req.query.num);
  console.log(num);
  if (num%2 == 0) {
      res.send ("Autorizado")
  } else {
    res.send ("No autorizado")
  }
})

app.get ('/lista', (req, res) => {
  res.json({
    prod1: req.query.prod1,
    prod2: req.query.prod2,
    prod3: req.query.prod3,
    prod4: req.query.prod4,
    prod5: req.query.prod5
  })
})

const routerUsers = require("./routers/users")

app.use('/', routerUsers)


module.exports = app