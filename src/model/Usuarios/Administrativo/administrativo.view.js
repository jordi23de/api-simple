const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")

const AdministrativoView = sequelize.define(
  "view_administrativo",
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
      type: DataTypes.INTEGER
    },
    codAdm: {
      type: DataTypes.STRING,
    },
    numeroDocumento: {
      type: DataTypes.STRING,
    },
    fechaIngreso: {
      type: DataTypes.DATE,
    },
    nombCargo: {
      type: DataTypes.INTEGER
    },
    descripcionCargo: {
      type: DataTypes.STRING,
    },
    fechaInicioContrato: {
      type: DataTypes.DATE
    },
    fechaFinContrato: {
      type: DataTypes.DATE,
    },
    correoInstitucional: {
      type: DataTypes.STRING,
    },
    nombOficina: {
      type: DataTypes.STRING
    },
    nomDependencia: {
      type: DataTypes.STRING
    },
    gradoAcademico: {
      type: DataTypes.STRING
    },
    descripcionGradoAcademico: {
      type: DataTypes.STRING,
    },
    condicionLaboral: {
      type: DataTypes.STRING
    },
    regimenLaboral: {
      type: DataTypes.STRING,
    },
    contratoCategoria: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = AdministrativoView