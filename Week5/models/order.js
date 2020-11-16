const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Customer',
    required: true,
  //   autopopulate: {
  //     maxDepth: 2,
  //     select: "-myOrders"
  // }
  },
  productList: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Product',
      required: true,
      autopopulate: {
          maxDepth: 2

      }
  }],
  market: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Market',
    required: true,
    autopopulate: {
        maxDepth: 2,
        select: "-orders"
    }
  }
})

orderSchema.methods.deliver = function () {
   this.isDelivered= true
 };

orderSchema.plugin(require('mongoose-autopopulate'))

const OrderModel = mongoose.model('Order', orderSchema)

module.exports = OrderModel