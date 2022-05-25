"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    
    static associate(models) {
      Persona.hasOne(models.Usuario, {
        foreignKey: "idPersona",
        as: "usuario",
      });
    }
  }
  Persona.init(
    {
      nombres: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      genero: DataTypes.ENUM("MASCULINO", "FEMENINO", "OTRO"),
      fechaNacimiento: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Persona",
    }
  );
  return Persona;
};
