const express = require('express')
const app = express()

app.use(express.json());

const routerMaths = require("./routers/maths")
const routerList = require ("./routers/list")
const routerUsers = require("./routers/users")


app.use('/maths', routerMaths)

app.use ('/lista', routerList)

app.use('/api', routerUsers)


module.exports = app