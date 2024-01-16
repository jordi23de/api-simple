const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database")

const GradoEscuela = sequelize.define(
    'tbl_grado_escuela',
    {
        numeroDocumento: {
            type: DataTypes.STRING
        },
        nivel: {
            type: DataTypes.STRING
        },
        escuela: {
            type: DataTypes.STRING
        },
        fecha: {
            type: DataTypes.DATE
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = GradoEscuela