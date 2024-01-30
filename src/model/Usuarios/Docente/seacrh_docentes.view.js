const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")

const SearchDocenteView = sequelize.define(
  "view_search_docentes",
  {
    codigo: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = SearchDocenteView