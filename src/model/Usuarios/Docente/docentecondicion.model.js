const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")
const Docente = require("../Docente/docente.model.js")
const DocenteCategoria = require("../Docente/docentecategoria.model.js")

const DocenteCondicion = sequelize.define(
  "tbl_docente_condicion",
  {
    idCondicion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombCondicion: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con Docente

DocenteCondicion.hasMany(Docente, {
  foreignKey: "idCondicion",
  sourceKey: "idCondicion",
  as: 'D'
});

Docente.belongsTo(DocenteCondicion, {
  foreignKey: "idCondicion",
  targetId: "idCondicion",
  as: 'Co'
});

//Relacion con DocenteCategoria

DocenteCondicion.hasMany(DocenteCategoria, {
  foreignKey: "idCondicion",
  sourceKey: "idCondicion",
});

DocenteCategoria.belongsTo(DocenteCondicion, {
  foreignKey: "idCondicion",
  targetId: "idCondicion",
});

module.exports = DocenteCondicion