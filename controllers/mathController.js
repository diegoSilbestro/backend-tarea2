
const divisionController = (req, res) => {

  if (req.params.divisor == 0) {
    res.json({
      error: "no se puede dividir por cero"
    })
  } else {
    let divid = Number(req.params.dividendo),
      divis = Number(req.params.divisor);
    res.json(
      (divid / divis)
    )
  }
  res.send(`Hola ${req.params.nombre}`)
}

const additionController = (req, res) => {

  let num1 = Number(req.params.a),
    num2 = Number(req.params.b);
  if (num1 < 0 || num2 < 0) {
    res.status(200).send('No se deben enviar valores menores a 0')
  } else {
    res.status(200).json((num1 + num2))
  }
}

const accessController = (req, res) => {

  let num = Number(req.query.num);
  if (num % 2 == 0) {
    res.status(200).send("Autorizado")
  } else {
    res.send("No autorizado")
  }
}

  module.exports = { divisionController, additionController, accessController }