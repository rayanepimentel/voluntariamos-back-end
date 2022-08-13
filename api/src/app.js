const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const user = require('./routers/usuarioRouter') // chamando a rota do usuario

app.use(bodyParser.json())

app.use('/', user) // estou dizendo que aqui é como se fosse um conjunto de rotas que estão em usuarioRouter.js

module.exports = app //exportando


