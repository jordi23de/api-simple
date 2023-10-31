const { DataTypes } =require("sequelize")
const sequelize  =require("../../database/database.js")
const Usuario =require("./usuario.model.js")

const EstadoVital = sequelize.define(
  "tbl_estado_vital",
  {
    idEstadoVital: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    estadoVital: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

//Relacion con Usuario

EstadoVital.hasMany(Usuario, {
  foreignKey: "idEstadoVital",
  sourceKey: "idEstadoVital",
});

Usuario.belongsTo(EstadoVital,{
  foreignKey: "idEstadoVital",
  targetId: "idEstadoVital",  
});

module.exports= EstadoVital