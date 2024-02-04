const asyncWrapper = require("../middleware/async");
const Products = require("../model/products");
const getProducts = async (req, res) => {
  const { featured, company, name, sort, field, limit } = req.query;
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
  let result = Products.find(queryObj);
  if (sort) {
    //a time the sort string might be more than one so use
    const sortList = sort.split(",").join("");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  //select
  if (field) {
    const fieldList = sort.split(",").join("");
    result = result.sort(fieldList);
  } else {
  }
  if (limit) {
    result = result.limit(limit); // the limit of data
  }
  const products = await result; // this is to avoid await before sorting
  res.status(200).json({ success: true, data: products });
};
module.exports = { getProducts };
