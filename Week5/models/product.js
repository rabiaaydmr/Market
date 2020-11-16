const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
})

productSchema.plugin(require('mongoose-autopopulate'))

const ProductModel= mongoose.model('Product', productSchema)

module.exports = ProductModel