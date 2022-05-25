const { errorHandler } = require("../helpers/errorHandler");
const models = require("../models");

const obtenerUsuarios = async (req, res) => {
  try {
    let users = await models.Usuario.findAll({
      include: [
        {
          model: models.Persona,
        },
      ],
    });
    res.send(users);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports = {
  obtenerUsuarios
};
