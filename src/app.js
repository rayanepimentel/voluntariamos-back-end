const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const user = require('./routers/userRouter') //chamando a rota do usuario
const db = require('./database/mongooseConnect')


app.use(bodyParser.json())

app.use('/', user) 
db.connect()

module.exports = app //exportando