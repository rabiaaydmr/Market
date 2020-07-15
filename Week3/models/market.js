
const chalk = require('chalk');
module.exports = class Market {
    constructor(name, address, order= [], id) {
        this.name = name
        this.address = address
        this.order= order
        this.id=id
    }
    prepare(product) {
        console.log(chalk.red("Prepared the " + product + " !"))
        this.order.push(product)
    }

    report(){
        console.log(chalk.blue(this.name), 'market is at ',chalk.green(this.address),'and number of orders are', this.order.length)
    }

   /* printOrder(order1) {
        this.order1.forEach(printName)
    }*/

    static create({ name, address, order, id }) {
        return new Market(name, address, order, id)
    }


}