const express = require("express");
const app = express();
const people = require("./peopleRouter/people");
const auth = require("./peopleRouter/Auth");
app.use(express.static("./methods-public")); //middleware for static pages
app.use(express.urlencoded({ extended: false })); //middleware to add the user obj to the req body
app.use(express.json()); //middleware for jason data
app.use("/api/people", people); //middleware to combine all routers that start from /api/people
app.use("/login", auth);
app.listen(3000, () => console.log("listing on port 3000"));
