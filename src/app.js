const { PORT } = require("./config.js")
const express = require("express")
// const morgan = require("morgan")
const cors = require('cors')
const router = require('./routes/index.routers.js')
const routerhome = require("./utils/rutasPosibles.js")
/*const {pool} =require("../database/database.js"
*/
const app = express()
app.use(cors())
//Settingsssssss
app.set("port", PORT);

//Middlewares
// app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router)
app.use("/", routerhome)

module.exports = app;