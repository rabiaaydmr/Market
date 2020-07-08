
const chalk = require('./node_modules/chalk');
module.exports = class Customer {
    constructor(name, address) {
        this.name = name
        this.address = address

    }

    order(product, market) {
        market.prepare(product)
    }

}