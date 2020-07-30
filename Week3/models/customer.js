class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.customerorder = [];
  }

  static create({ name, address, order, id }) {
    return new Customer(name, address, order, id);
  }
}

module.exports = Customer;
