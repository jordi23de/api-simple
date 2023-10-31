const express = require("express")
const cors = require("cors")
const multer = require("multer")
const datosRouter = require('./routes/datos.router.js')
const path = require('path')
const carpeta = require('./config/crearCarpetas.js')

const app = express();
app.use(cors());
const currentDir = __dirname
global.rutaBase = path.resolve(currentDir, '../');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        carpeta(req.body);
        cb(null, `escalafon/${req.body.facultad}/${req.body.escuela}/${req.body.usuario}/${req.body.lugar}`);
        // Carpeta donde se guardarán los archivos adjuntos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 150 * 1024 * 1024 // Tamaño máximo de archivo en bytes (150 MB)
    }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(upload.any());

app.use(datosRouter);

module.exports = app;