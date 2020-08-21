const express = require("express");
const bodyParser = require("body-parser");
const customerRouter = require("./routes/customer");
const productRouter = require("./routes/product");
const marketRouter = require("./routes/market");

require('./mongo-connection')

const app = express();


app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/customer', customerRouter)
app.use('/market', marketRouter)
app.use('/product', productRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(7000, () => {
  console.log('Server listening on port 7000')
})