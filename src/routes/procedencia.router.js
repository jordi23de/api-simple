const {Router} =require('express')
const { getDepartamento,getProvincia,getDistrito } =require('../controllers/procedencia.controller')
const router = Router()
router.get("/",getDepartamento)
router.get("/:idDepartamento",getProvincia)

router.get("/:idDepartamento/:idProvincia",getDistrito)

module.exports= router