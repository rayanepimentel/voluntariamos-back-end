const express = require('express')
const router = express.Router()

const controller = require('../controllers/userController')

router.post('/criar', controller.criarUsuario)
router.patch('/editar/:id', controller.editarUsuario)

module.exports = router