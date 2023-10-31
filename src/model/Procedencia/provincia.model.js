const { DataTypes } =require("sequelize")
const sequelize  =require("../../database/database.js")
const Usuario  =require("../Usuarios/usuario.model.js")
const  Distrito =require("../Procedencia/distrito.model.js")

const Provincia = sequelize.define(
  "tbl_provincia",
  {
    idProvincia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    provincia: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);



//Relacion con Usuario

Provincia.hasMany(Usuario, {
    foreignKey: "idProvincia",
    sourceKey: "idProvincia",
  });
  
  Usuario.belongsTo(Provincia, {
    foreignKey: "idProvincia",
    targetId: "idProvincia",
  });
  
  //Relacion con Distrito
  Provincia.hasMany(Distrito, {
    foreignKey: "idProvincia",
    sourceKey: "idProvincia",
  });
  
  Distrito.belongsTo(Provincia, {
    foreignKey: "idProvincia",
    targetId: "idProvincia",
  });

  /*FK: 
    idDepartameto*/
    module.exports= Provincia