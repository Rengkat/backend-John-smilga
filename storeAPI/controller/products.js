const Products = require("../model/products");
const getProducts = async (req, res) => {
  const products = await Products.find({});
  res.status(200).json({ success: true, data: products });
};
module.exports = { getProducts };
