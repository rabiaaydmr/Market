const chalk = require('./node_modules/chalk');
const Customer = require('./customer');
module.exports = class Market {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.order = []
       
    }
    prepare(customername, product) {
        
        console.log(chalk.red("Prepared the " + product.name + " !"))
        
        this.order.push( product)
    }

    printOrder(order2) {
        this.order.forEach(printName)
    }

   

}