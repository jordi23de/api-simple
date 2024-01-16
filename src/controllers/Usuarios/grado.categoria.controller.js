const { GradoEscuela, GradoTecnico, CategoriaRegimen, GradoUniversidad } = require('../../model/Usuarios/Grados_Categoria/index.model.grados.categoria.js')

const postSaveUni = async (req, res) => {
    try {
        const uniData = req.body;
        console.log(uniData)
        const [uni, created] = await GradoUniversidad.findOrCreate({
            where: { numeroDocumento: uniData.numeroDocumento },
            defaults: uniData,
        });
        if (created) {
            console.log({ mensaje: 'Grado de estudio guardado', estado: '1' })
            return res.send({ mensaje: 'Grado de estudio guardado', estado: '1' }); // This will certainly be 'Technical Lead JavaScript'
        } else {
            console.log({ mensaje: 'Grado de estudio ya existe', estado: '2' })
            return res.send({ mensaje: 'Grado de estudio ya existe', estado: '2' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ mensaje: error });
    }
}

module.exports = {
    postSaveUni
}