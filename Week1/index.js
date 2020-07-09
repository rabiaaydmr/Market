class Market {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.order1 = [];
  }
  prepare(product) {
    console.log("Prepared the " + product.name + " !");
    this.order1.push(product);
  }

  printOrder(order1) {
    this.order1.forEach(printName);
  }
}
class FastFood {
  constructor(name) {
    this.name = name;
  }
}
class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  order(product, market) {
    market.prepare(product);
  }
}
class Vegetables {
  constructor(name) {
    this.name = name;
  }
}

printName = (product) => console.log(product.name);

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
console.log(armagan);
Migros.printOrder();
Carrefour.printOrder();
