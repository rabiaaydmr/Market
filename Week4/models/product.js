const chalk = require('chalk');
const Customer = require('./customer.js')
class Product {

 constructor(name,customername)
 {
     this.name=name
     this.customername=Customer.name

 }
}

module.exports = Product
