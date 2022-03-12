const express = require('express');
const { get_products, add_product, delete_product, update_product } = require('./product_functions.js');
const { get_categories, add_category, delete_category, update_category,} = require('./category_functions.js');



const app = express();
app.use(express.json());



app.get("/ler_produtos", function(req, res) {
    let products = get_products();
    res.send(products);
});

app.get("/ler_categorias", function(req, res) {
    let categories = get_categories();
    res.send(categories);
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


app.post("/adicionar_categoria", function(req, res) {
    const { id, name} = req.body;
    let category = {
        id,
        name
    }
    add_category(category);
    console.log("Categoria adicionada com sucesso!");
    res.send("Categoria adicionada com sucesso!");
});


app.delete("/remover_produto", function(req, res) {
    const { id } = req.body;
    delete_product(id);
    res.send("Produto removido com sucesso!");
    console.log("Produto removido com sucesso!");
});


app.delete("/remover_categoria", function(req, res) {
    const { id } = req.body;
    delete_category(id);
    res.send("Categoria removida com sucesso!");
    console.log("Categoria removida com sucesso!");
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


app.put("/atualizar_categoria", function(req, res) {
    const { id, name } = req.body;
    let category = {
        id,
        name
    }
    update_category(category);
    res.send("Categoria atualizada com sucesso!");
    console.log("Categoria atualizada com sucesso!");
});

app.listen(3000, function () {
    console.log('Node app está funcionando!');
});