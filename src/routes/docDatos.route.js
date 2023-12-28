const { Route } = require('express')
const { getDocenteCategoria, getDocenteCondicion, getRegimenPensiones } = require('../controllers/Usuarios/docente.controller')

const router = Route();

router.get('/condicion', getDocenteCondicion);
router.get('/categoria', getDocenteCategoria);
router.get('/pensiones', getRegimenPensiones);

module.exports = router;