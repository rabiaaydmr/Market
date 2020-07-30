const chalk = require("chalk");
const customerService = require("./services/customer-service");
const marketService = require("./services/market-service");
const productService = require("./services/product-service");
const Market = require("./models/market.js");
const Customer = require("./models/customer.js");
const Product = require("./models/product.js");

async function main() {
  const chips = new Product("chips");
  const apple = new Product("apple");
  const orange = new Product("orange");

  const migros = new Market("Migros", "OnderStreet");
  const carrefour = new Market("Carrefour", "AtaturkStreet");

  const armagan = new Customer("Armagan", "LiderStreet");
  const mert = new Customer("Mert", "OnderStreet");
  const rabia = new Customer("Rabia", "OnderStreet");

//   migros.makeOrder(armagan, [chips, apple, orange]);
//   migros.makeOrder(mert, [apple, orange]);
//   migros.report();

//   await customerService.add(mert);
//   await customerService.add(armagan);
//   await customerService.add(rabia);
//   await marketService.add(migros);
//   const product = await productService.add(chips);

//   console.log(product);
//   const people = await customerService.findAll();

//   console.log(people);

//   await customerService.del(2);

//   const newCustomer = await customerService.findAll();

//   console.log(newCustomer[0].name);
}

main();
