const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")

const SearchDocenteView = sequelize.define(
  "view_search_docentes",
  {
    value: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    label: {
      type: DataTypes.STRING
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = SearchDocenteView