const express = require('express');
const { products } = require('../delivery-mqtt/backend/db.js');
const { get_products, add_product, delete_product, update_product } = require('./functions.js');


const app = express();
app.use(express.json());



app.get("/ler_produtos", function(req, res) {
    let products = get_products();
    res.send(products);
});


app.post("/adicionar_produto", function(req, res) {
    const { id, name, price, category } = req.body;
    let product = {
        id,
        name,
        price,
        category
    }
    add_product(product);
    console.log("Produto adicionado com sucesso!");
    res.send("Produto adicionado com sucesso!");
});


app.delete("/remover_produto", function(req, res) {
    const { id } = req.body;
    delete_product(id);
    res.send("Produto removido com sucesso!");
    console.log("Produto removido com sucesso!");
});


app.put("/atualizar_produto", function(req, res) {
    const { id, name, price, category } = req.body;
    let product = {
        id,
        name,
        price,
        category
    }
    update_product(product);
    res.send("Produto atualizado com sucesso!");
    console.log("Produto atualizado com sucesso!");
});


app.listen(3000, function () {
    console.log('Node app está funcionando!');
});