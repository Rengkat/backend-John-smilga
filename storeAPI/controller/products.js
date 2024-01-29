const asyncWrapper = require("../middleware/async");
const Products = require("../model/products");
const getProducts = async (req, res) => {
  const { featured, company } = req.query;
  const queryObj = {}; // creating new obj with the query if true
  if (featured) {
    queryObj.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObj.company = company;
  }
  const products = await Products.find(queryObj);
  res.status(200).json({ success: true, data: products });
};
module.exports = { getProducts };
