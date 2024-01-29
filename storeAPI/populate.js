const connectDB = require("./db/connect");
require("dotenv").config();
const jsonProducts = require("./products.json");
const Products = require("./model/products");
const start = async () => {
  try {
    await connectDB(process.env.MANGO_URI);
    await Products.deleteMany(); // remove any product first
    await Products.create(jsonProducts); //now create the product using the json products
    console.log("Success!!");
    process.exit(0); //everything went well so exit
  } catch (error) {
    console.log(error);
    process.exit(1); // something is wrong
  }
};
start();
