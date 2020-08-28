const mongoose = require('mongoose')

const marketSchema = new mongoose.Schema({
    name: String,
    address: String,
    orders: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Order',
        //require: true,
        autopopulate: {
          select: '-market',
          maxDepth: 2
        }
    }]
})


marketSchema.plugin(require('mongoose-autopopulate'))

const MarketModel= mongoose.model('Market', marketSchema)

module.exports = MarketModel
