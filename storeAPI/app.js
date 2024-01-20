const express = require("express");
const notFound = require("./middleware/not-found");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(notFound);
const start = async () => {
  try {
    app.listen(port, () => console.log("Server running on port 3000"));
  } catch (error) {}
};
start();
