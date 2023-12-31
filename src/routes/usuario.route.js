const { Router } = require('express')
const { postSaveUser, getUser } = require('../controllers/Usuarios/usuario.controller.js')

const router = Router()

router.post('/save', postSaveUser)
router.get('/findOne/:dni', getUser)

module.exports = router;