const fs = require('fs');


function get_products() {
    let rawdata = fs.readFileSync('database.json');
    let products = JSON.parse(rawdata);

    return products;
}

function add_product(product){
    let rawdata = fs.readFileSync('database.json');
    let database = JSON.parse(rawdata);

    database.products.push(product);

    fs.writeFile("database.json", JSON.stringify(database), 'utf8', function (err) {
        if (err) {
            console.log("Um erro aconteceu ao escrever no arquivo.");
            return console.log(err);
        }
     
        console.log("Produto adicionado.");
    });

}


function delete_product(product_id){
    let rawdata = fs.readFileSync('database.json');
    let database = JSON.parse(rawdata);

    database.products = database.products.filter(({ id }) => id !== product_id);

    fs.writeFile("database.json", JSON.stringify(database), 'utf8', function (err) {
        if (err) {
            console.log("Um erro aconteceu ao escrever no arquivo.");
            return console.log(err);
        }
     
        console.log("Produto removido.");
    });

}


module.exports = {
    get_products,
    add_product,
    delete_product
}