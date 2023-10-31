const { DataTypes } =require("sequelize")
const sequelize  =require("../../database/database.js")
const Usuario  =require("../Usuarios/usuario.model.js")
const Provincia  =require("./provincia.model.js")

const Departamento = sequelize.define(
  "tbl_departamento",
  {
    idDepartamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    departamento: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con Usuario

Departamento.hasMany(Usuario, {
  foreignKey: "idDepartamento",
  sourceKey: "idDepartamento",
});

Usuario.belongsTo(Departamento, {
  foreignKey: "idDepartamento",
  targetId: "idDepartamento",
});

//Relacion con Provincia
Departamento.hasMany(Provincia, {
  foreignKey: "idDepartamento",
  sourceKey: "idDepartamento",
});

Provincia.belongsTo(Departamento, {
  foreignKey: "idDepartamento",
  targetId: "idDepartamento",
});

module.exports = Departamento