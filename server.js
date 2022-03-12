const express = require('express');


const app = express();


app.get("/ler_produtos", function (req, res) {
    res.send("oi");
});


app.listen(3000, function () {
    console.log('Node app está funcionando!');
});