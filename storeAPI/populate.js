const connectDB = require("./db/connect");
require("dotenv").config();
const jsonProducts = require("./products.json");
const Products = require("./model/products");
const start = async () => {
  try {
    await connectDB(process.env.MANGO_URI);
    await Products.deleteMany();
    await Products.create(jsonProducts);
    console.log("Success!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
