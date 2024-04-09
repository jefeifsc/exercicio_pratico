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

controller.getById = (req,res)=>{
  prod = produtos.find(i => i.id == req.params.id);
  try {
    if(prod) {
      res.send(prod);
    }
  } catch(e) {
    res.send(console.error(`Erro : ${e}`));
  }
}

controller.create = (req,res)=>{
  produtos.push(req.body);
  res.redirect("/");
}

controller.update = (req,res)=>{
  console.log(req.body);
  produtos[req.params.id-1] = req.body;
  res.send("OK");
}

controller.delete((req,res) => {
  let id = req.params.id;
  produtos[id] = null;
  return res.json(produtos[id]);
});

module.exports = controller