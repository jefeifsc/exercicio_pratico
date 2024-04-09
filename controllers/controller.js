const controller = {};

let produtos = [
  {
  "id": 1,
  "descricao": "Camiseta",
  "preco": 29.99,
  "cores": ["preto", "branco", "cinza"]
  },
  {
  "id": 2,
  "descricao": "Calça Jeans",
  "preco": 79.99,
  "cores": ["azul claro", "azul escuro"]
  },
  {
  "id": 3,
  "descricao": "Tênis Esportivo",
  "preco": 149.99,
  "cores": ["preto", "branco", "cinza", "azul"]
  },
  {
  "id": 4,
  "descricao": "Jaqueta de Couro",
  "preco": 99.99,
  "cores": ["preto", "marrom"]
  }
 ];

controller.getAll = (req,res)=>{
    res.send(produtos);
}

module.exports = controller