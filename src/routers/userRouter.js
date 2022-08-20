const express = require('express')
const router = express.Router()

const controller = require('../controllers/userController')

router.post('/criar', controller.criarUsuario)


module.exports = router