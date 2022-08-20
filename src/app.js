const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const user = require('./routers/userRouter') //chamando a rota do usuario

app.use(bodyParser.json())

//estou dizendo que aqui é como se fosse um conjunto de rotas que estão em usuarioRouter.js
app.use('/', user) 

module.exports = app //exportando