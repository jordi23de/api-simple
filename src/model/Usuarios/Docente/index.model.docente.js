const Docente = require("./docente.model");
const DocenteCategoria = require("./docentecategoria.model");
const DocenteCondicion = require("./docentecondicion.model");
const RegimenPensiones = require("./regimenpensiones.model");
const DocenteView = require("./docentes.view");
const SearchDocenteView = require("./seacrh_docentes.view");


module.exports = {
    Docente, DocenteCategoria, DocenteCondicion, RegimenPensiones, DocenteView, SearchDocenteView
}
