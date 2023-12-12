const { Administrativo, AdministrticoCargo, AdministrativoCondLab, AdministrativoCondicion, AdministrativoDependencia, AdministrativoMaxGrado, AdministrativoOficina } = require('../../model/Usuarios/Administrativo/index.model.Administrativo.js')

const getCargoAdministrativo = async (req, res) => {
    const resp = await AdministrticoCargo.findAll();
    res.send(resp);
}

module.exports = {
    getCargoAdministrativo
}

