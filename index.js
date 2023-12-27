const express = require("express");
const path = require("node:path");
const app = express();
//middleware
app.use(express.static("./public"));
// the html can be added to the public folder and use the middleware
// app.get("/", (req, res) => {
//use send file which is base on the extension of the file
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });
app.all("*", (req, res) => {
  res.status(404).send("Sorry, 404 error");
});
app.listen(3000, () => console.log("listen...."));
