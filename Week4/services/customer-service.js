const BaseService = require("./base-service");
const Customer = require("../models/customer");

class CustomerService extends BaseService {
  constructor() {
    super(Customer, `${__dirname}/../customer-database.json`);
  }
}

module.exports = new CustomerService();
