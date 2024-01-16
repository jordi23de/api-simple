const Facultad = require('../../model/Facultad/facultad.model');
const { Docente, DocenteCategoria, DocenteCondicion, RegimenPensiones } = require('../../model/Usuarios/Docente/index.model.docente')

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
        const { count, rows } = await Docente.findAndCountAll({
            include: [
                {
                    model: Facultad,
                    as: 'F'
                },
                {
                    model: DocenteCondicion,
                    as: 'Co'
                },
                {
                    model: DocenteCategoria,
                    as: 'Ca'
                },
                {
                    model: RegimenPensiones,
                    as: 'RP'
                }
            ],
        })
        console.log(rows);
        return res.send({ estado: '1', count, rows });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ estado: '0', error })
    }
}

module.exports = {
    getDocenteCategoria,
    getDocenteCondicion,
    getRegimenPensiones,
    postSaveDoc,
    getDocentes
}