const { DataTypes } =require("sequelize")
const sequelize  =require("../../database/database.js")
const Usuario  =require("../Usuarios/usuario.model.js")

const Distrito = sequelize.define(
  "tbl_distrito",
  {
    idDistrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    distrito: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);



//Relacion con Usuario

Distrito.hasMany(Usuario, {
    foreignKey: "idDistrito",
    sourceKey: "idDistrito",
  });
  
  Usuario.belongsTo(Distrito, {
    foreignKey: "idDistrito",
    targetId: "idDistrito",
  });

  /*FK:
    idProvincia*/
    module.exports= Distrito