const {Facultad, FacultadEscuela} =require('../model/Facultad/index.models.Faculad.js')

const getFacultad= async (req, res) =>{
    const resp = await Facultad.findAll();
    res.send(resp)
}

const  getEscuela = async (req,res)=>{
    const {idFacultad} = req.params
    const resp = await FacultadEscuela.findAll({include : Facultad, 
        where:{
            idFacultad:idFacultad
        }});
    res.send(resp)
}

module.exports={
    getFacultad,
    getEscuela
}