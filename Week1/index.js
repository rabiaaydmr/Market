const Market = class {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.order1 = []
    }
    prepare(food) {
        console.log("Prepared the " + food.name + " !")
        this.order1.push(food)
    }
    printOrder(order1) {
        console.log(order1)
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

    order(food, cafe) {
        cafe.prepare(food)
    }

}

const Vegetables = class {
    constructor(name) {
        this.name = name
    }
}

const hamburger = new FastFood("Hamburger")
const Midpoint = new Market("Midpoint", "OnderStreet")
const armagan = new Customer("Armagan", "LiderStreet")
const orderx = armagan.order(hamburger, Midpoint)

console.log(armagan)


