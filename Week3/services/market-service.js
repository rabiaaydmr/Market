const BaseService = require("./base-service");
const Market = require("../models/market");

class MarketService extends BaseService {
  constructor() {
    super(Market, `${__dirname}/../market-database.json`);
  }
}

module.exports = new MarketService();
