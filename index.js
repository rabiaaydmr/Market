const Market = require("./market.js");
const Customer = require("./customer.js");
const chalk = require("./node_modules/chalk");
const Database = require("./database.js");
const Product = require("./products.js");
const Order = require("./orders.js");

console.log(chalk.blue("Hello world!"));

printName = (product) => console.log(chalk.cyan(product.name));

const chips = new Product("chips");
const apple = new Product("apple");
const orange = new Product("orange");

const migros = new Market("Migros", "OnderStreet");
const carrefour = new Market("Carrefour", "AtaturkStreet");

const armagan = new Customer("Armagan", "LiderStreet");
const mert = new Customer("Mert", "OnderStreet");

migros.makeOrder(armagan, [chips, apple, orange]);
migros.makeOrder(mert, [apple, orange]);
migros.printOrders();

Database.datasaver("customer.json", armagan);
Database.datasaver("customer.json", mert);
Database.datasaver("market.json", migros);
Database.datasaver("market.json", carrefour);

const printcustomer = Database.dataloader("customer.json");

console.log(printcustomer.name);
const printmarket = Database.dataloader("market.json");

console.log(printmarket);
