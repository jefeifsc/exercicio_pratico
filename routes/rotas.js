const express = require("express");
const controller = require("../controllers/controller");

const rotas = express.Router();
  
rotas.get("/",controller.getAll);
rotas.get("/:id", controller.getById);

module.exports = rotas