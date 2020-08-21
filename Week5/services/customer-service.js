const BaseService = require("./base-service");
const Customer = require("../models/customer");

class CustomerService extends BaseService {
  model = Customer
  async attendMeetup(customer, market) {
    customer.meetups.push(market)
    market.attendees.push(customer)
    await customer.save()
    await market.save()
  }
}

module.exports = new CustomerService();
