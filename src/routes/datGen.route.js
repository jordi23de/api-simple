const { Router } = require('express')
const { getEstadoVital, getEstadoCivil, getGenero, getHijos } = require('../controllers/datGen.controller.js')

const router = Router()

router.get('/evital', getEstadoVital)
router.get('/ecivil', getEstadoCivil)
router.get('/genero', getGenero)
router.get('/hijos', getHijos)

module.exports = router;