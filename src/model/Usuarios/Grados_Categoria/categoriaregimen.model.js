const { DataTypes } =require("sequelize")
const sequelize  =require("../../../database/database")

const CategoriaRegimen = sequelize.define(
    'tbl_categoria_regimen',
    {
        idRegimen:{
            type: DataTypes.INTEGER
        },
        nombRegimen: {
            type: DataTypes.STRING
        },
        descripcionRegimen: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
module.exports= CategoriaRegimen