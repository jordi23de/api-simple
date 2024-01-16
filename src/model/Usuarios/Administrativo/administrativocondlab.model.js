const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")
const Administrativo = require("../Administrativo/administrativo.model.js")

const AdministrativoCondLab = sequelize.define(
  "tbl_adm_condicion_laboral",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    condicionLaboral: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con Administrativo

AdministrativoCondLab.hasMany(Administrativo, {
  foreignKey: "idCondicionLaboral",
  sourceKey: "id",
  as: 'A'
});

Administrativo.belongsTo(AdministrativoCondLab, {
  foreignKey: "idCondicionLaboral",
  targetId: "id",
  as: 'ACL'
});

module.exports = AdministrativoCondLab