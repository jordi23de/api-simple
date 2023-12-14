const { Router } = require('express')
const { getCargoAdministrativo, getCondicionAdministrativo, getCondicionLaboralAdministrativo, getDependenciaAdministrativo, getMaxGradoAdministrativo, getOficinaAdministrativo } = require('../controllers/Usuarios/administrativo.controller.js')

const router = Router()

router.get('/cargo', getCargoAdministrativo)
router.get('/condicion', getCondicionAdministrativo)
router.get('/condicion-laboral', getCondicionLaboralAdministrativo)
router.get('/dependecia', getDependenciaAdministrativo)
router.get('/oficina', getOficinaAdministrativo)
router.get('/grado-maximo', getMaxGradoAdministrativo)
//
module.exports = router;