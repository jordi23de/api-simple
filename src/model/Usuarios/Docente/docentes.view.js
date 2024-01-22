const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")

const DocenteView = sequelize.define(
  "view_docentes",
  {
    tipoDocumento: {
      type: DataTypes.STRING
    },
    DNI: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    apellidoPat: {
      type: DataTypes.STRING
    },
    apellidoMat: {
      type: DataTypes.STRING
    },
    nombres: {
      type: DataTypes.STRING
    },
    genero: {
      type: DataTypes.STRING
    },
    estadoCivil: {
      type: DataTypes.STRING
    },
    numHijos: {
      type: DataTypes.INTEGER
    },
    fechaNacimiento: {
      type: DataTypes.DATE
    },
    departamento: {
      type: DataTypes.STRING
    },
    provincia: {
      type: DataTypes.STRING
    },
    distrito: {
      type: DataTypes.STRING
    },
    direccion: {
      type: DataTypes.STRING
    },
    direccionReferencia: {
      type: DataTypes.STRING
    },
    correoPersonal: {
      type: DataTypes.STRING
    },
    celular: {
      type: DataTypes.CHAR
    },
    celular2: {
      type: DataTypes.CHAR
    },
    telefono: {
      type: DataTypes.STRING
    },
    idEstadoVital: {
      type: DataTypes.BOOLEAN
    },
    codDocente: {
      type: DataTypes.STRING,
    },
    facultad: {
      type: DataTypes.STRING,
    },
    fechaIngreso: {
      type: DataTypes.DATE,
    },
    periodo: {
      type: DataTypes.STRING
    },
    nombCondicion: {
      type: DataTypes.STRING,
    },
    nombCategoria: {
      type: DataTypes.STRING
    },
    investigador: {
      type: DataTypes.BOOLEAN,
    },
    pregrado: {
      type: DataTypes.BOOLEAN
    },
    postgrado: {
      type: DataTypes.BOOLEAN
    },
    regimen: {
      type: DataTypes.STRING
    },
    // correoInstitucional: {
    //   type: DataTypes.STRING,
    // },
    horasTotal: {
      type: DataTypes.INTEGER,
    },
    horasElectivas: {
      type: DataTypes.INTEGER
    },
    horasNoElectivas: {
      type: DataTypes.INTEGER,
    },
    numeroResolucion: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = DocenteView