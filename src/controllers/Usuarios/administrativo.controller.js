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
const postSaveAdmin = async (req, res) => {
    try {
        const adminData = req.body;
        const [admin, created] = await Administrativo.findOrCreate({
            where: { numeroDocumento: adminData.numeroDocumento },
            defaults: adminData,
        });
        if (created) {
            console.log({ mensaje: 'Administrador creado', estado: '1' })
            return res.send({ mensaje: 'Administrador creado', estado: '1' }); // This will certainly be 'Technical Lead JavaScript'
        } else {
            console.log({ mensaje: 'Administrador ya existe', estado: '2' })
            return res.send({ mensaje: 'Administrador ya existe', estado: '2' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ mensaje: error });
    }
}

module.exports = {
    getCargoAdministrativo,
    getDependenciaAdministrativo,
    getOficinaAdministrativo,
    getMaxGradoAdministrativo,
    getCondicionLaboralAdministrativo,
    getCondicionAdministrativo,
    postSaveAdmin
}

