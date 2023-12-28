const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")
const Administrativo = require("../Administrativo/administrativo.model.js")

const AdministrativoOficina = sequelize.define(
  "tbl_adm_oficina",
  {
    idOficina: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombOficina: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con Administrativo

AdministrativoOficina.hasMany(Administrativo, {
  foreignKey: "idOficina",
  sourceKey: "idOficina",
});

Administrativo.belongsTo(AdministrativoOficina, {
  foreignKey: "idOficina",
  targetId: "idOficina",
});

module.exports = AdministrativoOficina