const express = require("express");
const router = express.Router();
const { obtenerUsuarios } = require("../controllers/user");

// Lista Usuarios
router.get("/", obtenerUsuarios);


module.exports = router;
