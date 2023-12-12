const { Administrativo, AdministrticoCargo, AdministrativoCondLab, AdministrativoCondicion, AdministrativoDependencia, AdministrativoMaxGrado, AdministrativoOficina } = require('../../model/Usuarios/Administrativo/index.model.Administrativo.js')

const getCargoAdministrativo = async (req, res) => {
    const resp = await AdministrticoCargo.findAll();
    res.send(resp);
}

const getDependenciaAdministrativo = async (req, res) => {
    const resp = await AdministrativoDependencia.findAll();
    res.send(resp);
}

const getOficinaAdministrativo = async (req, res) => {
    const resp = await AdministrativoOficina.findAll();
    res.send(resp);
}
const getMaxGradoAdministrativo = async (req, res) => {
    const resp = await AdministrativoMaxGrado.findAll();
    res.send(resp);
}
const getCondicionLaboralAdministrativo = async (req, res) => {
    const resp = await AdministrativoCondLab.findAll();
    res.send(resp);
}
const getCondicionAdministrativo = async (req, res) => {
    const resp = await AdministrativoCondicion.findAll();
    res.send(resp);
}

module.exports = {
    getCargoAdministrativo,
    getDependenciaAdministrativo,
    getOficinaAdministrativo,
    getMaxGradoAdministrativo,
    getCondicionLaboralAdministrativo,
    getCondicionAdministrativo
}

