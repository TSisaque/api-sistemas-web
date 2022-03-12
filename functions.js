
const fs = require('fs');

function get_products() {

    let rawdata = fs.readFileSync('database.json');
    let products = JSON.parse(rawdata);
    
    return products;

}

module.exports = {
    get_products
}