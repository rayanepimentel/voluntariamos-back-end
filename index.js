const http = require('http')
const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.send('<h1>ok, esta funcionando!</h1>')
})


http.createServer(app).listen(8000, () => console.log('servidor esta rodando'))