import { pool } from '../db.js'

export const buscar_tareas = async (req, res) => {
    try {
        const { id_encargado } = req.body
        const [result] = await pool.query("SELECT t.id_incidencias as id , a.nom_area as area, ti.nom_tipo_incidencia as t_inci,DATE_FORMAT(t.fecha_incidencia, '%Y-%m-%d') as f_inci, t.estado_incidencia as e_inci , DATE_FORMAT(t.fecha_solucion, '%Y-%m-%d') as f_sol, t.tiempo_resolucion as t_sol , t.descripcion_incidencia as detalle, u.nom_usuario as usua FROM `tb_incidencias` t inner join tb_usuarios u on u.id_usuario = t.id_usuario inner join tb_tipo_incidencia ti on ti.id_tipo_incidencia = t.id_tipo_incidencia inner join tb_area a on a.id_area = t.id_area where t.id_encargado=? ORDER by t.id_incidencias;", [id_encargado])
        res.send(result)
    } catch (error) {
        return res.send({ message: error })
    }
}

export const resolver_incidencia = async (req, res) => {
    try {
        const { id_incidencias, estado_incidencia, fecha_solucion, tiempo_resolucion, id_encargado } = req.body
        const [rows] = await pool.query('UPDATE tb_incidencias SET estado_incidencia = ? , fecha_solucion = ?, tiempo_resolucion=? WHERE id_incidencias = ? and id_encargado = ?;',
            [estado_incidencia, fecha_solucion, tiempo_resolucion, id_incidencias, id_encargado])
        res.send({ message: 'Incidencia resuelta correctamente' })
    } catch (error) {
        return res.send({ message: 'Ocurrio un error al guardar, verifique los campos' })
    }
}