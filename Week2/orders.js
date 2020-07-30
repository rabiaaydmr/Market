const chalk = require("./node_modules/chalk");
module.exports = class Order {
  constructor(customer, productList) {
    this.customer = customer;
    this.productList = productList;
  }
};
