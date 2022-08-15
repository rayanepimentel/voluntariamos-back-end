const express = require('express') //importando o express

const app = express() //executar o express:

const PORT = 3000 //porta

//criando rota get
app.get('/', function(req, res) {
    res.send('<h1>Bem-vindas!!!</h1>')
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`)) //iniciando o servidor