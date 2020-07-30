class Product {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  static create({ name, id }) {
    return new Product(name, id);
  }
}
module.exports = Product;
