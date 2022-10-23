const router = require('express').Router()

const controller = require('../controllers/eventController')

router.post('/criar', controller.criarEvento)
router.patch('/editar/:id', controller.editarEvento)
router.get('/listar', controller.exibirEventos)
router.delete('/excluir/:id/:idEvento', controller.excluirEvento)

module.exports = router