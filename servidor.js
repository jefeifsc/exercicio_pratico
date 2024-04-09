const express = require("express");
const rotas = require("./routes/rotas");

const servidor = express();
servidor.use(express.json());
servidor.use(rotas);

servidor.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
})