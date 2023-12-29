const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false })); //middleware to add the user obj to the req body
app.post("/login", (req, res) => {
  const { name } = req.body;
  //validation
  if (name) {
    res.status(200).send(`<h1>Welcome ${name}</h1>`);
  } else {
    res.status(401).send("<h1>Please enter name</h1>");
  }
});
app.get("/api/people", (req, res) => {
  res.status(200).send({ success: true, data: people });
});
app.listen(3000, () => console.log("listing on port 3000"));
