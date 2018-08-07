var inquirer = require('inquirer');
var mysql =require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'bamazon'
});
var selectedID;

connection.connect(function(err) {
    if (err) throw err;
    // console.log('connected as id '+connection.threadId);
    displayStock();
});

function displayStock() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        for (let i=0;i<res.length;i++){
            console.log('ID: '+res[i].item_id+' || Product: '+res[i].product_name+' || Price: $'+res[i].price);
        }
        runSearch();
    });
}

function runSearch() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the ID of the product you wish to buy?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'How many do you wish to buy?',
            name: 'quantity',
        }
    ]).then(function(ans) {
        connection.query('SELECT stock_quantity,price FROM products WHERE item_id=?',[parseInt(ans.id)], function(err,res) {
            if (err) throw err;
            selectedID = parseInt(ans.id);
            checkQuantity(parseInt(ans.quantity), res[0].stock_quantity,parseFloat(res[0].price));
        });
    });
}

function checkQuantity(desiredAmount,remainingStock,price) {
    if (desiredAmount <= remainingStock) {
        let newQuantity = remainingStock-desiredAmount;
        makeTransaction(newQuantity,price,desiredAmount);
    } else {
        console.log(`Insufficient quantity! Only ${remainingStock} remain.`);
        connection.end();
    }
}

function makeTransaction(quantity,price,purchasedAmount) {
    connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [quantity,selectedID], function(err,res) {
        if (err) throw err;
        console.log('Your total is: $'+purchasedAmount*price+'.');
        connection.end();
    });
}