"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      Usuario.belongsTo(models.Persona, { foreignKey: "idPersona" });
    }
  }
  Usuario.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      activo: DataTypes.BOOLEAN,
      eliminado: DataTypes.BOOLEAN,
      resetPasswordToken: DataTypes.STRING,
      registrationToken: DataTypes.STRING,
      avatarUrl: DataTypes.STRING,
      idPersona: DataTypes.INTEGER,
      idHospital: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
