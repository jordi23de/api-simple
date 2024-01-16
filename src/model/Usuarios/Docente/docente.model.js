const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")

const Docente = sequelize.define(
  "tbl_docente",
  {
    codDocente: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    numeroDocumento: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    fechaIngreso: {
      type: DataTypes.DATE,
    },
    periodo: {
      type: DataTypes.STRING,
    },
    idCondicion: {
      type: DataTypes.INTEGER
    },
    idCategoria: {
      type: DataTypes.INTEGER
    },
    investigador: {
      type: DataTypes.BOOLEAN,
    },
    pregrado: {
      type: DataTypes.BOOLEAN,
    },
    postgrado: {
      type: DataTypes.BOOLEAN,
    },
    idRegimenPensiones: {
      type: DataTypes.INTEGER
    },
    horasTotal: {
      type: DataTypes.INTEGER,
    },
    horasElectivas: {
      type: DataTypes.INTEGER,
    },
    horasNoElectivas: {
      type: DataTypes.INTEGER,
    },
    numeroResolucion: {
      type: DataTypes.STRING,
    },
    // contraseña: {
    //   type: DataTypes.STRING,
    // },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

/*FK: 
  idFacultad, idCategoria, idCondicion, idRegimen*/

module.exports = Docente