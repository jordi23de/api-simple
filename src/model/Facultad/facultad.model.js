const { DataTypes } =require("sequelize")
const sequelize  =require("../../database/database.js")
const Docente  =require("../Usuarios/Docente/docente.model.js")
const FacultadEscuela  =require("../Facultad/facultadescuela.model.js")

const Facultad = sequelize.define(
  "tbl_facultad",
  {
    idFacultad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    facultad: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con FacultadEscuela

Facultad.hasMany(FacultadEscuela, {
  foreignKey: "idFacultad",
  sourceKey: "idFacultad",
});

FacultadEscuela.belongsTo(Facultad, {
  foreignKey: "idFacultad",
  targetId: "idFacultad",
});

//Relacion con Docente

Facultad.hasMany(Docente, {
  foreignKey: "idFacultad",
  sourceKey: "idFacultad",
});

Docente.belongsTo(Facultad, {
  foreignKey: "idFacultad",
  targetId: "idFacultad",
});

module.exports= Facultad 