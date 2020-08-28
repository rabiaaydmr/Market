const express = require('express')
const router = express.Router()

const Product = require('../services/product-service')

router.get('/all', async (req, res) => {
  const products = await Product.findAll()
  res.render('list', { items: products, listName : "Products" })
})

router.get('/:id', async (req, res) => {
  const product = await Product.find(req.params.id)
  res.render('data', { data: product })
})

router.post('/', async (req, res) => {
  const product = await Product.add(req.body)
  res.send(product)
})

router.delete('/:id', async (req, res) => {
  const product = await Product.del(req.params.id)
  res.send(product)
})

module.exports = router