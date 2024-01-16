const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")
const Docente = require("../Docente/docente.model.js")

const DocenteCategoria = sequelize.define(
  "tbl_docente_categoria",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombCategoria: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Relacion con Docente

DocenteCategoria.hasMany(Docente, {
  foreignKey: "idCondicion",
  sourceKey: "id",
  as: 'D'
});

Docente.belongsTo(DocenteCategoria, {
  foreignKey: "idCondicion",
  targetId: "id",
  as: 'Ca'
});

module.exports = DocenteCategoria