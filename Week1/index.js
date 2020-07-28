class Market {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.orders= [];
  }

  printOrders() {
    console.log(JSON.stringify(this.orders, null, 2));
  }
  makeOrder(customer, productList){
     const newOrder =new Order(customer, productList);
     this.orders.push(newOrder)
  }
  printOrdersByCustomer(customer){
    const result = this.orders.filter(order => order.customer === customer);
    console.log(result)
  }
}


class Order{
  constructor(customer, productList) {
  this.customer=customer;
  this.productList=productList;
  }
}
class Product{
  constructor(name) {
    this.name = name;
  }
}
class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

}


printName = (product) => console.log(product.name);



const chips = new Product("chips");
const apple = new Product("apple");
const orange = new Product("orange");

const migros = new Market("Migros", "OnderStreet");
const carrefour = new Market("Carrefour", "AtaturkStreet");

const armagan = new Customer("Armagan", "LiderStreet");
const mert = new Customer("Mert", "OnderStreet");


migros.makeOrder(armagan, [chips, apple, orange])
migros.makeOrder(armagan, [chips, apple, orange])
migros.makeOrder(armagan, [orange, orange, orange, orange, orange])
migros.makeOrder(mert, [apple, orange])
migros.printOrders()
// migros.printOrdersByCustomer(mert)
// migros.printOrdersByCustomer(armagan)

// const armagansOrder = armagan.order(chips, migros);
// const tomato = new Product("tomato");
// const mertsOrder = mert.order(tomato, carrefour);
// const rabia = new Customer("Rabia", "BagdatStreet");
// const patato = new Product("patato");
// const rabiasOrder = rabia.order(patato, carrefour);
// console.log(armagan);
// migros.printOrder();
// carrefour.printOrder();
