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
        const [doce, created] = await Docente.findOrCreate({
            where: { numDocumento: docData.numDocumento },
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

module.exports = {
    getDocenteCategoria,
    getDocenteCondicion,
    getRegimenPensiones,
    postSaveDoc
}