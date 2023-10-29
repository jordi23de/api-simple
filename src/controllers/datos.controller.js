import { pool } from '../db.js'

export const tb_area = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM  tb_area;')
    res.send(result)
}

export const tb_encargado = async (req, res) => {
    const [result] = await pool.query('Select * from tb_encargado')
    res.send(result)
}

export const tb_tipo_incidencias = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM tb_tipo_incidencia;')
    res.send(result)
}

export const cantidad_incidencias = async (req, res) => {
    const [result] = await pool.query('SELECT count(*) as cantidad FROM `tb_incidencias` ;')
    res.send(result)
}

export const cantidad_incidencia_agrupado = async (req, res) => {
    const [result] = await pool.query('SELECT count(*) as cantidad, ti.nom_tipo_incidencia FROM `tb_incidencias` d inner join tb_tipo_incidencia ti on ti.id_tipo_incidencia= d.id_tipo_incidencia GROUP BY d.id_tipo_incidencia;')
    res.send(result)
}
export const incidencias_resueltas = async (req, res) => {
    const [result] = await pool.query('SELECT count(*) as cantidad, ti.nom_tipo_incidencia, ROUND(AVG(TIME_TO_SEC(d.tiempo_resolucion) / 60)) as promedio FROM tb_incidencias d INNER JOIN   tb_tipo_incidencia ti ON ti.id_tipo_incidencia = d.id_tipo_incidencia WHERE d.estado_incidencia = 2 GROUP BY d.id_tipo_incidencia, ti.nom_tipo_incidencia;')
    res.send(result)
}
export const promedio_resolucion = async (req, res) => {
    const [result] = await pool.query('SELECT ROUND(AVG(TIME_TO_SEC(tiempo_resolucion) / 60)) as cantidad FROM tb_incidencias;')
    res.send(result)
}


export const incidencia_mas_frecuente = async (req, res) => {
    const [result] = await pool.query('SELECT count(*) as otro, ti.nom_tipo_incidencia as cantidad FROM `tb_incidencias` d inner join tb_tipo_incidencia ti on ti.id_tipo_incidencia= d.id_tipo_incidencia GROUP BY d.id_tipo_incidencia limit 1;')
    res.send(result)
}

export const area_mas_incidencia = async (req, res) => {
    const [result] = await pool.query('SELECT count(*) as otro, a.nom_area as cantidad FROM `tb_incidencias` d inner join tb_area a on a.id_area= d.id_area GROUP BY d.id_area limit 1;')
    res.send(result)
}

export const listado_tabla = async (reg, res) => {
    const [result] = await pool.query("SELECT t.id_incidencias as id , a.nom_area as area, ti.nom_tipo_incidencia as t_inci,DATE_FORMAT(t.fecha_incidencia, '%Y-%m-%d') as f_inci, t.estado_incidencia as e_inci , t.id_encargado as enc, DATE_FORMAT(t.fecha_solucion, '%Y-%m-%d') as f_sol, t.tiempo_resolucion as t_sol , t.descripcion_incidencia as detalle, u.nom_usuario as usua FROM `tb_incidencias` t inner join tb_usuarios u on u.id_usuario = t.id_usuario inner join tb_tipo_incidencia ti on ti.id_tipo_incidencia = t.id_tipo_incidencia inner join tb_area a on a.id_area = t.id_area ORDER by t.id_incidencias;")
    res.send(result)
}

export const insert_incidencia = async (req, res) => {
    try {
        const { id_usuario, id_area, id_tipo_incidencia, descripcion_incidencia, fecha_incidencia, estado_incidencia } = req.body
        const [rows] = await pool.query('INSERT INTO tb_incidencias( id_usuario, id_area, id_tipo_incidencia, descripcion_incidencia, fecha_incidencia, estado_incidencia) values(?,?,?,?,?,?)',
            [id_usuario, id_area, id_tipo_incidencia, descripcion_incidencia, fecha_incidencia, estado_incidencia])
        res.send({ message: 'Incidencia guardada correctamente' })
    } catch (error) {
        return res.send({ message: 'Ocurrio un error al guardar el incidente, verifique los campos' })
    }
}

export const actualizar_incidencia = async (req, res) => {
    try {
        const { id_incidencias, estado_incidencia, fecha_designacion_encargado, id_encargado } = req.body
        const [rows] = await pool.query('UPDATE tb_incidencias SET estado_incidencia = ? , fecha_designacion_encargado = ?, id_encargado = ? WHERE id_incidencias = ?;',
            [estado_incidencia, fecha_designacion_encargado, id_encargado, id_incidencias])
        res.send({ message: 'Incidencia guardada correctamente' })
    } catch (error) {
        return res.send({ message: 'Ocurrio un error al actualizar el incidente, verifique los campos' })
    }
}