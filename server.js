const express = require('express');
const { get_products } = require('./functions.js');


const app = express();
app.use(express.json());



app.get("/ler_produtos", function(req, res) {
    products = get_products();
    res.send(products);
});

app.post("/adicionar_produto", function(req, res) {
    const { id, name, price, category } = req.body;
    console.log(id, name, price, category);
});


app.listen(3000, function () {
    console.log('Node app está funcionando!');
});