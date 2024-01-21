const asyncWrapper = require("../middleware/async");
const Products = require("../model/products");
const getProducts = asyncWrapper(async (req, res) => {
  const products = await Products.find({});
  res.status(200).json({ success: true, data: products });
});
module.exports = { getProducts };
