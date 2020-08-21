const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
})

ProductSchema.plugin(require('mongoose-autopopulate'))

const ProductModel= mongoose.model('Product', ProductSchema)

module.exports = ProductModel