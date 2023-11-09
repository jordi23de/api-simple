const { Router } = require('express')
const getEstadoVital = require('../controllers/estadoVital.controller.js')

const router = Router()

router.get('/', getEstadoVital)

module.exports = router;