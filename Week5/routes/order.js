const express = require('express')
const router = express.Router()

const Order = require('../services/order-service')

router.get('/all', async (req, res) => {
  const orders = await Order.findAll()
  res.render('list', { items: orders })
})

router.get('/:id', async (req, res) => {
  const order = await Order.find(req.params.id)
  res.render('data', { data: order })
})

router.post('/', async (req, res) => {
  const order = await Order.add(req.body)
  res.send(order)
})

router.delete('/:id', async (req, res) => {
  const order = await Order.del(req.params.id)
  res.send(order)
})

module.exports = router