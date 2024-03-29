const { Op } = require('sequelize');
const { Administrativo, AdministrticoCargo, AdministrativoCondLab, AdministrativoCondicion, AdministrativoDependencia, AdministrativoMaxGrado, AdministrativoOficina, AdministrativoView, SearcAdministrativoView } = require('../../model/Usuarios/Administrativo/index.model.Administrativo.js');
const { paginate } = require('../paginacion.js');

const getCargoAdministrativo = async (req, res) => {
    const resp = await AdministrticoCargo.findAll();
    res.send(resp);
}
const getSearcAdministrativoView = async (req, res) => {
    try {
        const resp = await SearcAdministrativoView.findAll();

        res.status(200).send(resp);
    } catch (error) {
        res.status(400).send({ value: '', label: 'ocurrio un error' })
    }
}

const getViewAdm = async (req, res) => {
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

        const administrativos = await paginate(AdministrativoView, page, limit, buscar, orden);

        if (administrativos.error) {
            if (page > administrativos.totalPage) {
                return res.status(400).send({
                    estado: 2,
                    mensaje: `La pagina ${page} no esxite`,
                    result: administrativos
                })
            } else {
                return res.status(400).send({
                    estado: 3,
                    mensaje: 'Datos de administrativo no obtenidos',
                    result: administrativos
                })
            }
        } else {
            return res.status(200).send({
                estado: 1,
                mensaje: 'Datos de administrativo obtenidos',
                result: administrativos
            })
        }


    } catch (error) {
        res.status(400).send({ estado: '0', mensaje: error })
    }
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

//ya no se usa getAdmin reemplazado por getViewAdmin
const getAdmin = async (req, res) => {
    try {
        const resp = await AdministrativoView.findAll();
        res.status(200).send(resp);
    } catch (error) {
        res.status(400).send({ estado: '0', mensaje: error })
    }
}

module.exports = {
    getCargoAdministrativo,
    getDependenciaAdministrativo,
    getOficinaAdministrativo,
    getMaxGradoAdministrativo,
    getCondicionLaboralAdministrativo,
    getCondicionAdministrativo,
    postSaveAdmin,
    getAdmin,
    getViewAdm,
    getSearcAdministrativoView,
}

