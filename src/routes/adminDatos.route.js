const { Router } = require('express')
const { getCargoAdministrativo } = require('../controllers/Usuarios/administrativo.controller.js')

const router = Router()

router.get('/cargo', getCargoAdministrativo)

module.exports = router;