
const chalk = require('./node_modules/chalk');
module.exports = class Market {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.order1 = []
    }
    prepare(product) {
        console.log(chalk.red("Prepared the " + product.name + " !"))
        this.order1.push(product)
    }

    printOrder(order1) {
        this.order1.forEach(printName)
    }

}