const { Router } = require('express');
const { postSaveUni } = require('../controllers/Usuarios/grado.categoria.controller');

const router = Router();

router.post('/saveUni', postSaveUni);

module.exports = router;