const express = require("express");
const { get } = require("mongoose");
const { getProducts } = require("../controller/products");
const router = express.Router();
router.route("/").get(getProducts);
module.exports = router;
