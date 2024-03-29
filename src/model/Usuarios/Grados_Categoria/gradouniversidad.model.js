const { DataTypes } = require("sequelize")
const sequelize = require("../../../database/database")

const GradoUniversidad = sequelize.define(
    'tbl_grado_universidad',
    {
        numeroDocumento: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        pais: {
            type: DataTypes.STRING
        },
        facultad: {
            type: DataTypes.STRING
        },
        carrera: {
            type: DataTypes.STRING
        },
        descripcionGrado: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = GradoUniversidad