const { DataTypes } =require("sequelize")
const sequelize  =require("../../../database/database.js")

const Docente = sequelize.define(
  "tbl_docente",
  {
    codDocente: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    numDocumento: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    fechaIngreso: {
      type: DataTypes.DATE,
    },
    periodo: {
      type: DataTypes.STRING,
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
    contraseña: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

/*FK: 
  idFacultad, idCategoria, idCondicion, idRegimen*/

  module.exports= Docente