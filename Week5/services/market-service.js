const BaseService = require("./base-service");
const Market = require("../models/market");

class MarketService extends BaseService {
  model = Market
}

module.exports = new MarketService();
