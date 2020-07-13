
const chalk = require('chalk');
class Customer {
    constructor(name, address, order =[], id) {
        this.name = name
        this.address = address
        this.customerorder =[]
        this.id=id
    

    }

    order(product, market) {
        market.prepare(this.name,product)
        this.customerorder.push(product)
    }
    static create({ name, address, order, id }) {
        return new Customer(name, address, order, id);
    }


}

module.exports = Customer