class Customer {
  constructor(name, address, id) {
    this.name = name;
    this.address = address;
    this.id = id;
  }

  static create({ name, address, id }) {
    return new Customer(name, address, id);
  }
}

module.exports = Customer;
