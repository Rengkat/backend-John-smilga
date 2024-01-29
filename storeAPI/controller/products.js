const asyncWrapper = require("../middleware/async");
const Products = require("../model/products");
const getProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObj = {}; // creating new obj with the query if true
  if (featured) {
    queryObj.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObj.company = company;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "i" }; //using regex to fine product by name that contains the letter from the query
  }
  const products = await Products.find(queryObj);
  res.status(200).json({ success: true, data: products });
};
module.exports = { getProducts };
