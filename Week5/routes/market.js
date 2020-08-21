const express = require('express')
const router = express.Router()

const Market = require('../services/market-service')

router.get('/all', async (req, res) => {
  const markets = await Market.findAll()
  res.render('list', { items: markets })
})

router.get('/:id', async (req, res) => {
  const market = await Market.find(req.params.id)
  res.render('data', { data: market })
})

router.post('/', async (req, res) => {
  const market = await Market.add(req.body)
  res.send(market)
})

router.delete('/:id', async (req, res) => {
  const market = await Market.del(req.params.id)
  res.send(market)
})

module.exports = router