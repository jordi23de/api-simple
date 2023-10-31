const fs = require("fs")
const path = require('path')

const carpeta = (datos) => {
    const rutaCarpeta = path.join(global.rutaBase, 'escalafon', datos.facultad, datos.escuela, datos.usuario, datos.lugar); console.log(rutaCarpeta);
    if (!fs.existsSync(rutaCarpeta)) {
        fs.mkdirSync(rutaCarpeta, { recursive: true });
        return "carpeta creada";
    } else {
        console.log("la carpeta ya existe");
        return "la carpeta ya existe";
    }
}

module.exports = carpeta