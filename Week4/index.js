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
  //res.send('Hello')   // Now, my server knows that whenever it see ('/') then it reply this with ('Hello')

  //res.sendFile(__dirname +'/index.html')
  res.render("index");
});

app.get("/customer/all", async (req, res) => {
  const person = await customerService.findAll();
  // res.send(customer)  //almost like console.log(), it is sending to the browser
  //it render person.pug  customer->array person->eachone
  res.render("person", { customer: person });
});

app.get("/customer/:id", async (req, res) => {
  const id = req.params.id;
  const person = await customerService.find(id);
  res.send(person);
});
app.post("/customer", async (req, res) => {
  console.log(req.body);
  const person = await customerService.add(req.body);
  res.send(person);
});

app.delete("/customer/:id", async (req, res) => {
  const user = await customerService.del(req.params.id);
  res.send(user);
});

app.listen(3000, () => {
  console.log("Server listening");
});

app.get("/market/all", async (req, res) => {
  const uniqueMarket = await marketService.findAll();
  res.render("market", { market: uniqueMarket });
});

app.get("/market/:id", async (req, res) => {
  const id = req.params.id;
  const market = await marketService.find(id);
  res.send(market);
});
app.post("/market", async (req, res) => {
  console.log(req.body);
  const market = await marketService.add(req.body);
  res.send(market);
});

app.delete("/market/:id", async (req, res) => {
  const market = await marketService.del(req.params.id);
  res.send(market);
});

app.get("/product/all", async (req, res) => {
  const uniqueProduct = await productService.findAll();
  res.render("product", { product: uniqueProduct });
});

app.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  const market = await productService.find(id);
  res.send(product);
});
app.post("/product", async (req, res) => {
  console.log(req.body);
  const product = await productService.add(req.body);
  res.send(product);
});

app.delete("/product/:id", async (req, res) => {
  const product = await productService.del(req.params.id);
  res.send(product);
});
