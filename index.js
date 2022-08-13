const http = require('http')
const PORT = 8000

const app = require('./api/src/app')


http.createServer(app).listen(PORT, () => console.log('Servidor esta rodando'))