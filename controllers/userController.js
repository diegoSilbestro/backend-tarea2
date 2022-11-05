
const userController = (req,res) =>{
    console.log(req.params.nombre);
    res.send(`Hola ${req.params.nombre}`)
}

module.exports = {userController};
