const express = require("express");
const notFound = require("./middleware/not-found");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const Products = require("./model/products");
const productRouter = require("./router/products");
const port = process.env.PORT || 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Store API:</h1> <a href="api/v1/products">Product Route</a>`);
});
app.use("/api/v1/products", productRouter);
app.use(notFound);
const start = async () => {
  try {
    await connectDB(process.env.MANGO_URI);
    app.listen(port, () => console.log("Server running on port 3000"));
  } catch (error) {}
};
start();
