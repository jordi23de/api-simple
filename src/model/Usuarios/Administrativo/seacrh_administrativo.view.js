const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database.js")

const SearcAdministrativoView = sequelize.define(
  "view_search_administrativo",
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
module.exports = SearcAdministrativoView