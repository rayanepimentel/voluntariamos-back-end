const express = require('express')
const router = express.Router()

const controller = require('../controllers/userController')

router.post('/criar', controller.criarUsuario)
router.patch('/editar/:id', controller.editarUsuario)
router.post('/criarEvento', controller.criarEvento)


module.exports = router