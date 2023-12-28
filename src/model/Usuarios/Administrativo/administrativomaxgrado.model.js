const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")
const Administrativo = require("../Administrativo/administrativo.model.js")

const AdministrativoMaxGrado = sequelize.define(
  "tbl_adm_max_gradoacademico",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    gradoAcademico: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con Administrativo

AdministrativoMaxGrado.hasMany(Administrativo, {
  foreignKey: "idMaxGradoAcademico",
  sourceKey: "id",
});

Administrativo.belongsTo(AdministrativoMaxGrado, {
  foreignKey: "idMaxGradoAcademico",
  targetId: "id",
});

module.exports = AdministrativoMaxGrado