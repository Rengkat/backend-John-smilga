const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  const { name } = req.body;
  //validation
  if (name) {
    res.status(200).send(`<h1>Welcome ${name}</h1>`);
  } else {
    res.status(401).send("<h1>Please enter name</h1>");
  }
});
module.exports = router;
