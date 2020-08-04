const chalk = require("chalk");
const Order = require("./orders.js");

module.exports = class Market {
  constructor(name, address, orders = [], id) {
    this.name = name;
    this.address = address;
    this.orders = orders;
    this.id = id;
  }

  report() {
    console.log(`${chalk.blue(this.name)} market is at ${chalk.green(this.address)} and number of orders are ${this.orders.length}`);
  }

  printOrders() {
    console.log(JSON.stringify(this.orders, null, 2));
  }
  makeOrder(customer, productList) {
    const newOrder = new Order(customer, productList);
    this.orders.push(newOrder);
  }
  printOrdersByCustomer(customer) {
    const result = this.orders.filter((order) => order.customer === customer);
    console.log(result);
  }

  static create({ name, address, orders, id }) {
    return new Market(name, address, orders, id);
  }
};
