const {Router} =require('express')
const { getFacultad ,getEscuela} =require('../controllers/facultad.controller.js')

const router= Router()

router.get('/', getFacultad)

router.get('/:idFacultad', getEscuela)

module.exports= router;