
const Market = require('./models/market.js')
const Customer = require('./models/customer.js')
const CustomerService =require('./services/customer-service')
const MarketService =require('./services/market-service')
const chalk = require('chalk');

async function main() {
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
    
    const mert = new Customer('Mert', 'OnderStreet' )
    const armagan = new Customer('Armagan', "LiderStreet")
    const chips = new FastFood("chips");
    const tomato = new Vegetables("tomato");
    const Migros = new Market("Migros", "OnderStreet")
    armagan.order("chips",Migros)
    mert.order("tomato",Migros)
    Migros.report()
  
    await CustomerService.add(mert)
    await CustomerService.add(armagan)
  
    const people = await CustomerService.findAll()
  
    console.log(people[0].name)
  
    await CustomerService.del(1)
  
    const newCustomer = await CustomerService.findAll()
    
    console.log(newCustomer[0].name)
  }
  
  main()


/*console.log(chalk.blue('Hello world!'));

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

const chips = new FastFood("chips");
const Migros = new Market("Migros", "OnderStreet");
const Carrefour = new Market("Carrefour", "AtaturkStreet");
const armagan = new Customer("Armagan", "LiderStreet");
const order_Armagan = armagan.order(chips, Migros);
const tomato = new Vegetables("tomato");
const mert = new Customer("Mert", "OnderStreet");
const order_Mert = mert.order(tomato, Carrefour);
const rabia = new Customer("Rabia", "BagdatStreet");
const patato = new Vegetables("patato");
const order_Rabia = rabia.order(patato, Carrefour);

Database.datasaver('customer.json', armagan)
Database.datasaver('customer.json', mert)
Database.datasaver('market.json', Migros)


const printcustomer = Database.dataloader('customer.json')

console.log(printcustomer.name)

const printmarket = Database.dataloader('market.json')

console.log(printmarket)
*/

