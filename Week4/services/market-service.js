const BaseService = require('./base-service')
const MarketModel = require('../models/market')

class MarketService extends BaseService {
    constructor() {
        super(MarketModel, `${__dirname}/../market-database.json`)
    }
}

module.exports = new MarketService()