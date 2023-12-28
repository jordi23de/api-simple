const { DataTypes } = require("sequelize")
const sequelize = require("../../database/database.js")

const Usuario = sequelize.define(
  "tbl_usuario",
  {
    tipoDocumento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DNI: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    apellidoPat: {
      type: DataTypes.STRING,
    },
    apellidoMat: {
      type: DataTypes.STRING,
    },
    nombres: {
      type: DataTypes.STRING,
    },
    genero: {
      type: DataTypes.STRING,
    },
    estadoCivil: {
      type: DataTypes.STRING,
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
    },
    numHijos: {
      type: DataTypes.INTEGER
    },
    direccion: {
      type: DataTypes.STRING,
    },
    direccionReferencia: {
      type: DataTypes.STRING,
    },
    correoPersonal: {
      type: DataTypes.STRING,
    },
    celular2: {
      type: DataTypes.CHAR,
    },
    celular: {
      type: DataTypes.CHAR,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    idEstadoVital: {
      type: DataTypes.INTEGER,
    },
    estado: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

/*FK:
  idDepartamento, idProvincia, idDistrito, idEstadoVital
*/
module.exports = Usuario