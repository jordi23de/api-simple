const { DataTypes }= require("sequelize")
const sequelize = require("../../database/database.js")

const FacultadEscuela = sequelize.define(
  "tbl_facultad_escuela",
  {
    idEscuela: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombreEscuela: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports= FacultadEscuela
/*FK:
  idFacultad*/