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
    descripcionDelCargo: {
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
    descripcionGradoAcademico: {
      type: DataTypes.STRING,
    },
    regimenLaboral: {
      type: DataTypes.STRING,
    },
    contratoCategoria: {
      type: DataTypes.STRING,
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