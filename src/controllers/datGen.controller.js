const EstadoVital = require('../model/Usuarios/estadovital.model.js')
const { estadoCivil, genero, hijos } = require('../helpers/dGenerales.js')
const getEstadoVital = async (req, res) => {
    const resp = await EstadoVital.findAll();
    res.send(resp)
}

const getHijos = async (req, res) => {
    const resp = hijos;
    res.send(resp)
}

const getEstadoCivil = async (req, res) => {
    const resp = estadoCivil;
    res.send(resp)
}

const getGenero = async (req, res) => {
    const resp = genero;
    res.send(resp)
}

module.exports = { getEstadoVital, getEstadoCivil, getGenero, getHijos }
