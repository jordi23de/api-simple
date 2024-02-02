const Facultad = require('../../model/Facultad/facultad.model');
const { Docente, DocenteCategoria, DocenteCondicion, RegimenPensiones, DocenteView, SearchDocenteView } = require('../../model/Usuarios/Docente/index.model.docente');
const { paginate } = require('../paginacion');

const getRegimenPensiones = async (req, res) => {
    const resp = await RegimenPensiones.findAll();
    res.send(resp);
}

const getDocenteCondicion = async (req, res) => {
    const resp = await DocenteCondicion.findAll();
    res.send(resp)
}

const getDocenteCategoria = async (req, res) => {
    const id = req.params.idCondicion
    const resp = await DocenteCategoria.findAll({ include: DocenteCondicion, where: { idCondicion: id } });
    res.send(resp);
}

const postSaveDoc = async (req, res) => {
    try {
        const docData = req.body;
        console.log(docData)
        const [doce, created] = await Docente.findOrCreate({
            where: { numeroDocumento: docData.numeroDocumento },
            defaults: docData,
        });
        if (created) {
            console.log({ mensaje: 'Docente creado', estado: '1' })
            return res.send({ mensaje: 'Docente creado', estado: '1' }); // This will certainly be 'Technical Lead JavaScript'
        } else {
            console.log({ mensaje: 'Docente ya existe', estado: '2' })
            return res.send({ mensaje: 'Docente ya existe', estado: '2' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ mensaje: error });
    }
}

const getDocentes = async (req, res) => {
    try {
        const resp = await DocenteView.findAll();
        res.status(200).send(resp);
    } catch (error) {
        console.log(error)
        return res.status(400).send({ estado: '0', error })
    }
}

const getViewDoc = async (req, res) => {
    try {
        //extraemos los parametros de la ruta
        const { q, page, limit, o_by, o_direc, rela } = req.query;

        let buscar = {};
        let orden = [];
        let include = [];

        //agregamos la busqueda a buscar{} si existe
        if (q) {
            buscar = {
                where: {
                    codAdm: {
                        [Op.like]: `%${q}%`
                    }
                }
            };
        }

        //agregamos el orden a orden[]
        if (o_by && o_direc) {
            orden.push([o_by, o_direc]);
        }

        const docentes = await paginate(DocenteView, page, limit, buscar, orden);

        if (docentes.error) {
            if (page > docentes.totalPage) {
                return res.status(400).send({
                    estado: 2,
                    mensaje: `La pagina ${page} no esxite`,
                    result: docentes
                })
            } else {
                return res.status(400).send({
                    estado: 3,
                    mensaje: 'Datos de administrativo no obtenidos',
                    result: docentes
                })
            }
        } else {
            return res.status(200).send({
                estado: 1,
                mensaje: 'Datos de administrativo obtenidos',
                result: docentes
            })
        }


    } catch (error) {
        res.status(400).send({ estado: '0', mensaje: error })
    }
}

const getSearchDocenteView = async (req, res) => {
    try {
        const resp = await SearchDocenteView.findAll();

        res.status(200).send(resp);
    } catch (error) {
        res.status(400).send({ value: '', label: 'ocurrio un error' })
    }
}

module.exports = {
    getDocenteCategoria,
    getDocenteCondicion,
    getRegimenPensiones,
    postSaveDoc,
    getDocentes,
    getViewDoc,
    getSearchDocenteView
}