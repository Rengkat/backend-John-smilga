const Express = require("express");
const port = process.env.PORT || 3000;
const app = Express();
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});
app.get("/about", (req, res) => {
  res.send("ABOUT");
});
app.all("*", (req, res) => {
  res.status(400).send("404 ERROR");
});
app.listen(port, () => console.log("Server running"));
