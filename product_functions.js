const fs = require('fs');


function get_products() {
    let rawdata = fs.readFileSync('database.json');
    let database = JSON.parse(rawdata);

    return database.products;
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
    });
}

function update_product(product){
    let rawdata = fs.readFileSync('database.json');
    let database = JSON.parse(rawdata);

    let up_product = database.products.filter(({ id }) => id === product.id)[0];

    up_product.name = product.name;
    up_product.price = product.price;
    up_product.category = product.category;

    database.products = database.products.filter(({ id }) => id !== product.id);
    database.products.push(up_product);

    fs.writeFile("database.json", JSON.stringify(database), 'utf8', function (err) {
        if (err) {
            console.log("Um erro aconteceu ao escrever no arquivo.");
            return console.log(err);
        }
    });

}


module.exports = {
    get_products,
    add_product,
    delete_product,
    update_product
}