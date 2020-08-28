
const express = require('express')
const router = express.Router()

const Customer = require('../services/customer-service')
const Market = require('../services/market-service')

router.get('/all', async (req, res) => {
  const customers = await Customer.findAll()
  res.render('list', { items: customers, listName : "Customers" })
})

router.get('/:id', async (req, res) => {
  const customer = await Customer.find(req.params.id)
  res.render('data', { data: customer })
})

router.post('/', async (req, res) => {
  const customer = await Customer.add(req.body)
  res.send(customer)
})

router.delete('/:id', async (req, res) => {
  const customer = await Customer.del(req.params.id)
  res.send(customer)
})

router.post('/:id/market', async (req, res) => {
  const customer = await Customer.find(req.params.id)
  const market = await Market.find(req.body.meetup)
  await Customer.attendMeetup(customer, market)

  res.send(customer)
})

router.get('/:id/peers-over-18', async (req, res) => {
  const customer = await Customer.find(req.params.id)
  const peers = await user.findPeersOver18()
  res.send(peers)
})

module.exports = router