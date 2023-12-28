const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")

const Administrativo = sequelize.define(
  "tbl_administrativo",
  {
    codAdm: {
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
    idCargo: {
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
    contraseña: {
      type: DataTypes.STRING,
    },
    idOficina: {
      type: DataTypes.INTEGER
    },
    idDependencia: {
      type: DataTypes.INTEGER
    },
    idMaxGradoAcademico: {
      type: DataTypes.INTEGER
    },
    descripcionGradoAcademico: {
      type: DataTypes.STRING,
    },
    idCondicionLaboral: {
      type: DataTypes.INTEGER
    },
    regimenLaboral: {
      type: DataTypes.STRING,
    },
    contratoCategoria: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.BOOLEAN,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

/*FK:
    idCargo,idOficina,idDependencia,idMaxGradoAcademico,idCondicionLaboral*/
module.exports = Administrativo