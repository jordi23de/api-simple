const { Router } = require('express')
const { getDocenteCategoria, getDocenteCondicion, getRegimenPensiones, postSaveDoc, getDocentes, getViewDoc } = require('../controllers/Usuarios/docente.controller')

const router = Router();

router.get('/condicion', getDocenteCondicion);
router.get('/categoria/:idCondicion', getDocenteCategoria);
router.get('/pensiones', getRegimenPensiones);
router.post('/save', postSaveDoc);
router.get('/docentes', getDocentes)
router.get('/getViewDoce', getViewDoc)

module.exports = router;