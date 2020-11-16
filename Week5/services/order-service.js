const BaseService = require("./base-service");
const Order = require("../models/order");

class OrderService extends BaseService {
  model = Order
}

module.exports = new OrderService();
