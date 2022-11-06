

const listController = (req, res) => {
    res.status(200).json({
        prod1: req.query.prod1,
        prod2: req.query.prod2,
        prod3: req.query.prod3,
        prod4: req.query.prod4,
        prod5: req.query.prod5
    })
}

const postController = (req, res) => {
    res.status(201).json ({
        nombre: req.body.name,
        status: "success"
    })
}
 
module.exports = {listController, postController}