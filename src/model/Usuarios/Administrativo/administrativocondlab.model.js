const { DataTypes } =require("sequelize")
const sequelize  =require("../../database/database.js")
const Administrativo  =require("../Administrativo/administrativo.model.js")

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

AdministrativoCondLab.hasMany(Administrativo,{
    primaryKey:"idCondicionLaboral",
    sourceKey:"id",
});

Administrativo.belongsTo(AdministrativoCondLab,{
    foreignKey:"idCondicionLaboral",
    targetId:"id",
});

module.exports= AdministrativoCondLab