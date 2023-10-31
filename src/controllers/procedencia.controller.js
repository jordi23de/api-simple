const {Distrito,Provincia,Departamento}  =require('../model/Procedencia/index.models.Procedencia.js')

const getDepartamento = async (req,res)=>{
    const resp = await Departamento.findAll();
    res.send(resp)
}

const getProvincia = async (req,res)=>{
    const id = req.params.idDepartamento
    const resp = await Provincia.findAll({include: Departamento, where:{ idDepartamento:id}});
    res.send(resp)
}

const getDistrito = async (req,res)=>{
    const {idDepartamento, idProvincia} = req.params
    const resp = await Distrito.findAll({include: Provincia, where:{ idProvincia:idProvincia}});
    res.send(resp)
}

module.exports= {
    getDepartamento,
    getProvincia,
    getDistrito
}