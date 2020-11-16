const BaseService = require("./base-service");
const Customer = require("../models/customer");

class CustomerService extends BaseService {
  model = Customer
  async makeOrder(customer, market) {
    customer.orderFromMarket.push(market)
    market.orders.push(customer)
    await customer.save()
    await market.save()
  }
}

module.exports = new CustomerService();
