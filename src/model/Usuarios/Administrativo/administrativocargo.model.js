const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")
const Administrativo = require("../Administrativo/administrativo.model.js")

const AdministrativoCargo = sequelize.define(
  "tbl_adm_cargo",
  {
    idCargo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombCargo: {
      type: DataTypes.STRING,
    },
    descripcionCargo: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con Administrativo

AdministrativoCargo.hasMany(Administrativo, {
  foreignKey: "idCargo",
  sourceKey: "idCargo",
});

Administrativo.belongsTo(AdministrativoCargo, {
  foreignKey: "idCargo",
  targetId: "idCargo",
});

module.exports = AdministrativoCargo