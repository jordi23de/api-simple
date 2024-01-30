const { Router } = require('express')
const { getDocenteCategoria, getDocenteCondicion, getRegimenPensiones, postSaveDoc, getDocentes, getViewDoc, getSearchDocenteView } = require('../controllers/Usuarios/docente.controller')

const router = Router();

router.get('/condicion', getDocenteCondicion);
router.get('/categoria/:idCondicion', getDocenteCategoria);
router.get('/pensiones', getRegimenPensiones);
router.post('/save', postSaveDoc);
router.get('/docentes', getDocentes)
router.get('/getViewDoce', getViewDoc)
router.get('/getViewSearch', getSearchDocenteView)

module.exports = router;