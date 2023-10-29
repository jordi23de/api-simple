import express from "express";
import cors from "cors";
import multer from "multer";
import datosRouter from './routes/datos.router.js';
import { fileURLToPath } from 'url';
import path from 'path';
import { carpeta } from './config/crearCarpetas.js'

const app = express();
app.use(cors());
const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);
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

export default app;