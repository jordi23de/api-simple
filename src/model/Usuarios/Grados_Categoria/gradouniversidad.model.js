const { DataTypes } =require("sequelize")
const sequelize  =require("../../../database/database")

const GradoUniversidad = sequelize.define(
    'tbl_grado_universidad',
    {
        numDocumento:{
            type: DataTypes.STRING
        },
        pais: {
            type: DataTypes.STRING
        },
        faculta: {
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

module.exports= GradoUniversidad