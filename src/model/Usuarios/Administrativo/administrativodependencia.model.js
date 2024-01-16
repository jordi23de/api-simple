const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")
const Administrativo = require("../Administrativo/administrativo.model.js")

const AdministrativoDependencia = sequelize.define(
  "tbl_adm_dependencia",
  {
    idDependencia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nomDependencia: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con Administrativo

AdministrativoDependencia.hasMany(Administrativo, {
  foreignKey: "idDependencia",
  sourceKey: "idDependencia",
  as: 'A'
});

Administrativo.belongsTo(AdministrativoDependencia, {
  foreignKey: "idDependencia",
  targetId: "idDependencia",
  as: 'AD'
});

module.exports = AdministrativoDependencia