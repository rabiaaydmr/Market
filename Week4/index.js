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
  // Now, my server knows that whenever it see ('/') then it reply this with ('Hello')
  // res.send('Hello')
  // res.sendFile(__dirname +'/index.html')
  res.render("index");
});

app.get("/customer/all", async (req, res) => {
  const customers = await customerService.findAll();
  // almost like console.log(), it is sending to the browser
  // res.send(customer)
  // it renders customer.pug  customer->array person->eachone
  res.render("customer", { customers });
});

app.get("/customer/:id", async (req, res) => {
  const id = req.params.id;
  const customer = await customerService.find(id);
  res.send(customer);
});

app.post("/customer", async (req, res) => {
  const customer = await customerService.add(req.body);
  res.send(customer);
});

app.delete("/customer/:id", async (req, res) => {
  const customer = await customerService.del(req.params.id);
  res.send(customer);
});

app.get("/market/all", async (req, res) => {
  const markets = await marketService.findAll();
  res.render("market", { markets });
});

app.get("/market/:id", async (req, res) => {
  const id = req.params.id;
  const market = await marketService.find(id);
  res.send(market);
});
app.post("/market", async (req, res) => {
  const market = await marketService.add(req.body);
  res.send(market);
});

app.delete("/market/:id", async (req, res) => {
  const market = await marketService.del(req.params.id);
  res.send(market);
});

app.get("/product/all", async (req, res) => {
  const products = await productService.findAll();
  res.render("product", { products });
});

app.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  const product = await productService.find(id);
  res.send(product);
});
app.post("/product", async (req, res) => {
  const product = await productService.add(req.body);
  res.send(product);
});

app.delete("/product/:id", async (req, res) => {
  const product = await productService.del(req.params.id);
  res.send(product);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
