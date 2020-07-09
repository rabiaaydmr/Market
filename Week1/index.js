const Market = class {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.order1 = []
    }
    prepare(product) {
        console.log("Prepared the " + product.name + " !")
        this.order1.push(product)
    }
 
    printOrder(order1)
    {
    this.order1.forEach(printName)
    }

}
const FastFood = class {
    constructor(name) {
        this.name = name
    }

}
const Customer = class {
    constructor(name, address) {
        this.name = name
        this.address = address

    }

    order(product, market) {
        market.prepare(product)
    }

}

const Vegetables = class {
    constructor(name) {
        this.name = name
    }
}

printName = product=> console.log(product.name)

const cips = new FastFood("cips")
const Migros = new Market("Migros", "OnderStreet")
const armagan = new Customer("Armagan", "LiderStreet")
const orderx = armagan.order(cips, Migros)
const ayva = new Vegetables("ayva")
const mert = new Customer("Mert","OnderStreet")
const ordery = mert.order(ayva,Migros)
console.log(armagan)
Migros.printOrder()
