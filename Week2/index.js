const Market = require("./market.js");
const Customer = require("./customer.js");
const chalk = require("./node_modules/chalk");
const { dataSaver, dataLoader } = require("./database.js");
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

dataSaver("customer.json", armagan);
dataSaver("customer.json", mert);
dataSaver("market.json", migros);
dataSaver("market.json", carrefour);
dataSaver("products.json", chips);

const printCustomers = dataLoader("customer.json");

console.log(printCustomers);
const printMarket = dataLoader("market.json");

console.log(printMarket);
const printProducts = dataLoader("products.json");

console.log(printProducts);
