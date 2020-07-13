
const chalk = require('./node_modules/chalk');
class Customer {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.order1 =[]
    }

    order(product, market) {
        
        //this.product=product.name
        market.prepare(this.name,product)
        this.order1.push(product)
        //market.order.push(product)
        
    }

}

module.exports = Customer