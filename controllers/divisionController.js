
const divisionController = (res,req) => {
    console.log(req.params.dividendo);

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

module.exports = {divisionController}