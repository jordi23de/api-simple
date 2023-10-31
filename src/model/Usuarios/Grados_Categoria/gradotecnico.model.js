const { DataTypes } =require("sequelize")
const sequelize  =require("../../../database/database")

const GradoTecnico = sequelize.define(
    'tbl_grado_tecnico',
    {
        numDocumento: {
            type: DataTypes.STRING
        },
        pais: {
            type: DataTypes.STRING
        },
        carrera: {
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

module.exports= GradoTecnico