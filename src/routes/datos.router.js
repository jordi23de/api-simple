import { Router } from 'express'
import { tb_encargado, tb_area, tb_tipo_incidencias, insert_incidencia, cantidad_incidencia_agrupado, cantidad_incidencias, incidencia_mas_frecuente, area_mas_incidencia, listado_tabla, actualizar_incidencia, incidencias_resueltas, promedio_resolucion } from '../controllers/datos.controller.js'
import { buscar_tareas, resolver_incidencia } from '../controllers/encargado.controller.js'
const router = Router()

router.get('/datos/encargado', tb_encargado)
router.get('/datos/areas', tb_area)
router.get('/datos/tipo-incidencias', tb_tipo_incidencias)
router.post('/datos/nueva-incidencia', insert_incidencia)
router.post('/datos/update-incidencia', actualizar_incidencia)
router.get('/datos/cantidad-incidencia-agrupado', cantidad_incidencia_agrupado)
router.get('/datos/cantidad-incidencias', cantidad_incidencias)
router.get('/datos/promedio-resolucion', promedio_resolucion)
router.get('/datos/incidencias-resueltas', incidencias_resueltas)
router.get('/datos/incidencia-mas-frecuente', incidencia_mas_frecuente)
router.get('/datos/area-mas-incidencia', area_mas_incidencia)
router.get('/datos/listado-tabla', listado_tabla)
router.post('/encargado/buscar', buscar_tareas)
router.post('/encargado/resolver', resolver_incidencia)



router.post('/datos/enviar', (req, res) => {
    console.log(req.body)
    console.log(req.files);

    res.json(req.body)
})

export default router


