const express = require('express')
const router = express.Router()

const controller = require('../controllers/usuarioController')

router.post('/criar', controller.criarUsuario)


module.exports = router