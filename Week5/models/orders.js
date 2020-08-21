const OrderSchema = new mongoose.Schema({
  customer: String,
  productList: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Product',
      autopopulate: {
          maxDepth: 1
      }
  }]
})

MarketSchema.plugin(require('mongoose-autopopulate'))

const MarketModel= mongoose.model('Market', MarketSchema)

module.exports = MarketModel