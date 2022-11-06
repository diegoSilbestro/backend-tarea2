
const userController = (req,res) =>{
    res.send(`Hola ${req.params.nombre}`)
}



module.exports = {userController};
