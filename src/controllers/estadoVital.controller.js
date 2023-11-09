const EstadoVital = require('../model/Usuarios/estadovital.model.js')

const getEstadoVital = async (req, res) => {
    const resp = await EstadoVital.findAll();
    res.send(resp)
}

module.exports = getEstadoVital
