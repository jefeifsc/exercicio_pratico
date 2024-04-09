const express = require("express");
const controller = require("../controllers/controller");

const rotas = express.Router();
  
rotas.get("/",controller.getAll);

module.exports = rotas