const { DataTypes } =require("sequelize")
const sequelize =require("../../../database/database.js")

const AdministrativoCondicion = sequelize.define(
    'tbl_adm_condicion',
    {
        idCondicion: {
            type: DataTypes.INTEGER
        },
        nombCondicion: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamp: false
    }
);

module.exports= AdministrativoCondicion