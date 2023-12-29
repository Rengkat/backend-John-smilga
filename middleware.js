const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
//how middleware works===>  req -> middleware -> res
//to avoid repetition use app.use()
//if the middleware is much, put them in an array
// to make the middleware in only some route
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});
app.get("/api/products", [logger, authorize], (req, res) => {
  //can now access the user from the req obj
  console.log(req.user);
  res.send("Products");
});
app.get("/api/users", (req, res) => {
  res.send("<h1>users</h1>");
});
app.listen(3000, () => console.log("listing on port 3000"));
