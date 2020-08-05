const express = require("express");
const bodyParser = require("body-parser");
const customerService = require("./services/customer-service");
const productService = require("./services/product-service");
const marketService = require("./services/market-service");

const app = express();

app.use(bodyParser.json());
app.set("view engine", "pug");

// Implementation for express framework, first parametre is the name of the path that we are gone respond to
// and the second parametre is the callback function to tell our web server about how to respond to that :)
app.get("/", (req, res) => {
  // res.send('Hello')   // Now, my server knows that whenever it see ('/') then it reply this with ('Hello')
  // res.sendFile(__dirname +'/index.html')
  res.render("index");
});

app.get("/customer/all", async (req, res) => {
  const user = await customerService.findAll();
  // res.send(customer)  // almost like console.log(), it is sending to the browser
  // it renders customer.pug  customer->array person->eachone
  res.render("customer", { customer: user });
});

app.get("/customer/:id", async (req, res) => {
  const id = req.params.id;
  const user = await customerService.find(id);
  res.send(user);
});

app.post("/customer", async (req, res) => {
  const user = await customerService.add(req.body);
  res.send(user);
});

app.delete("/customer/:id", async (req, res) => {
  const user = await customerService.del(req.params.id);
  res.send(user);
});

app.get("/market/all", async (req, res) => {
  const uniqueMarket = await marketService.findAll();
  res.render("market", { market: uniqueMarket });
});

app.get("/market/:id", async (req, res) => {
  const id = req.params.id;
  const markets = await marketService.find(id);
  res.send(markets);
});
app.post("/market", async (req, res) => {
  const markets = await marketService.add(req.body);
  res.send(markets);
});

app.delete("/market/:id", async (req, res) => {
  const markets = await marketService.del(req.params.id);
  res.send(markets);
});

app.get("/product/all", async (req, res) => {
  const products = await productService.findAll();
  res.render("product", { product: products });
});

app.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  const products = await productService.find(id);
  res.send(products);
});
app.post("/product", async (req, res) => {
  const products = await productService.add(req.body);
  res.send(products);
});

app.delete("/product/:id", async (req, res) => {
  const products = await productService.del(req.params.id);
  res.send(products);
});

app.listen(3000, () => {
  console.log("Server listening");
});
