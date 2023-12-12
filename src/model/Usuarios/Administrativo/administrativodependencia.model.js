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
    nombDependencia: {
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
  primaryKey: "idDependencia",
  sourceKey: "idDependencia",
});

Administrativo.belongsTo(AdministrativoDependencia, {
  foreignKey: "idDependencia",
  targetId: "idDependencia",
});

module.exports = AdministrativoDependencia