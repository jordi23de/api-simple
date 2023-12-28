const { Router } = require('express')
const { postSaveUser } = require('../controllers/Usuarios/usuario.controller.js')

const router = Router()

router.post('/save', postSaveUser)

module.exports = router;