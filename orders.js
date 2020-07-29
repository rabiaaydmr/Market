const chalk = require("./node_modules/chalk");
const Customer = require("./customer");
const Order = require("./orders.js");
module.exports = class Order {
  constructor(customer, productList) {
    this.customer = customer;
    this.productList = productList;
  }
};
