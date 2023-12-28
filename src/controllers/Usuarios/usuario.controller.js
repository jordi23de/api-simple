const Usuario = require('../../model/Usuarios/usuario.model')

const postSaveUser = async (req, res) => {
    try {
        const userData = req.body;
        const [user, created] = await Usuario.findOrCreate({
            where: { DNI: userData.DNI },
            defaults: userData,
        });
        if (created) {
            console.log({ mensaje: 'Usuario creado', estado: '1' })
            return res.send({ mensaje: 'Usuario creado', estado: '1' }); // This will certainly be 'Technical Lead JavaScript'
        } else {
            console.log({ mensaje: 'Usuario ya existe', estado: '1' })
            return res.send({ mensaje: 'Usuario ya existe', estado: '1' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ mensaje: error });
    }
}

module.exports = { postSaveUser }