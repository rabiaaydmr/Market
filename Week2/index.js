
const Market = require('./market.js')
const Customer = require('./customer.js')
const chalk = require('./node_modules/chalk');
const Database = require('./database.js')


console.log(chalk.blue('Hello world!'));

const FastFood = class {
    constructor(name) {
        this.name = name
    }

}


const Vegetables = class {
    constructor(name) {
        this.name = name
    }
}

printName = product => console.log(chalk.cyan(product.name))

const cips = new FastFood("cips")
const Migros = new Market("Migros", "OnderStreet")
const armagan = new Customer("Armagan", "LiderStreet")
const orderx = armagan.order(cips, Migros)
const ayva = new Vegetables("ayva")
const mert = new Customer("Mert", "OnderStreet")
const ordery = mert.order(ayva, Migros)
console.log(armagan)
console.log(mert)
Migros.printOrder()

Database.datasaver('customer.json', armagan)
//Database.datasaver('customer.json', mert)
Database.datasaver('market.json', Migros)

const printcustomer = Database.dataloader('customer.json')

console.log(printcustomer.name)

const printmarket = Database.dataloader('market.json')

console.log(printmarket)


