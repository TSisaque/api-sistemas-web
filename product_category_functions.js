const fs = require('fs');


function get_categories() {
    let rawdata = fs.readFileSync('database.json');
    let database = JSON.parse(rawdata);

    return database.categories;
}

function add_category(category){
    let rawdata = fs.readFileSync('database.json');
    let database = JSON.parse(rawdata);

    database.categories.push(category);

    fs.writeFile("database.json", JSON.stringify(database), 'utf8', function (err) {
        if (err) {
            console.log("Um erro aconteceu ao escrever no arquivo.");
            return console.log(err);
        }
    });

}

function delete_category(category_id){
    let rawdata = fs.readFileSync('database.json');
    let database = JSON.parse(rawdata);

    database.categories = database.categories.filter(({ id }) => id !== category_id);

    fs.writeFile("database.json", JSON.stringify(database), 'utf8', function (err) {
        if (err) {
            console.log("Um erro aconteceu ao escrever no arquivo.");
            return console.log(err);
        }
    });
}

function update_category(category){
    let rawdata = fs.readFileSync('database.json');
    let database = JSON.parse(rawdata);

    let up_category = database.categories.filter(({ id }) => id === category.id)[0];

    up_category.name = category.name;
    
    database.categories = database.categories.filter(({ id }) => id !== category.id);
    database.categories.push(up_category);

    fs.writeFile("database.json", JSON.stringify(database), 'utf8', function (err) {
        if (err) {
            console.log("Um erro aconteceu ao escrever no arquivo.");
            return console.log(err);
        }
    });

}




module.exports = {
    get_categories,
    add_category,
    delete_category,
    update_category
}