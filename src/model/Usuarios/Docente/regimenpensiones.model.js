const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")
const Docente = require("../Docente/docente.model.js")

const RegimenPensiones = sequelize.define(
  "tbl_regimen_pensiones",
  {
    idRegimen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    regimen: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con Docente

RegimenPensiones.hasMany(Docente, {
  foreignKey: "idRegimenPensiones",
  sourceKey: "idRegimen",
  as: 'D'
});

Docente.belongsTo(RegimenPensiones, {
  foreignKey: "idRegimenPensiones",
  targetId: "idRegimen",
  as: 'RP'
});
module.exports = RegimenPensiones