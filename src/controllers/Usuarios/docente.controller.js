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


module.exports = {
    getDocenteCategoria,
    getDocenteCondicion,
    getRegimenPensiones
}