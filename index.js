const express = require("express");
const path = require("node:path");
const app = express();
const { products } = require("./data");

// the html can be added to the public folder and use the middleware
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1><a href='/api/products'>Get api<a/>");
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, image, name } = product;
    return { id, image, name };
  });
  res.send(newProducts);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((pro) => pro.id === Number(req.params.id));
  if (!product) {
    return res.status(404).send("Product does not exist");
  } else {
    res.send(product);
  }
});
//query
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((pro) => {
      return pro.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send({ success: true, message: "No product of such term" });
  }
  res.status(200).json(sortedProducts);
});
app.all("*", (req, res) => {
  res.status(404).send("Sorry, 404 error");
});
app.listen(3000, () => console.log("listen...."));
