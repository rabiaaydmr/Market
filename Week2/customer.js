
const chalk = require('./node_modules/chalk');
class Customer {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.customerorder =[]
    }

    order(product, market) {
        
        //this.product=product.name
        market.prepare(this.name,product)
        this.customerorder.push(product)
        //market.order.push(product)
        
    }

}

module.exports = Customer