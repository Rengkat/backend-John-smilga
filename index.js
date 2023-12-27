const express = require("express");
const app = express();
app.get("/", (req, res) => {});
app.all("*", (req, res) => {
  res.status(404).send("Sorry, 404 error");
});
app.listen(3000, () => console.log("listen...."));
