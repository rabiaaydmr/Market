const mongoose = require('mongoose')

const MarketSchema = new mongoose.Schema({
    name: String,
    address: String,
    orders: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Orders',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

MarketSchema.plugin(require('mongoose-autopopulate'))

const MarketModel= mongoose.model('Market', MarketSchema)

module.exports = MarketModel
