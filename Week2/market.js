const Order = require("./orders.js");
module.exports = class Market {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.orders = [];
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
};
