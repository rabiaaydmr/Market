const BaseService = require("./base-service");
const Product = require("../models/product");

class ProductService extends BaseService {
  constructor() {
    super(Product, `${__dirname}/../product-database.json`);
  }
}

module.exports = new ProductService();
