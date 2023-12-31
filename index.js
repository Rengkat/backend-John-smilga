const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public")); //middleware for static pages
app.use(express.urlencoded({ extended: false })); //middleware to add the user obj to the req body
app.use(express.json()); //middleware for jason data
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
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(201).json({ success: true, person: name });
    return name;
  } else {
    res.status(400).json({ success: false, msg: "Please enter details" });
  }
});
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "Please enter name" });
  }
  res.status(200).json({ success: true, data: [...people, name] });
});
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please enter name" });
  } else {
    const person = people.find((x) => x.id === Number(id));
    person.name = name;
    //or
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        return (person.name = name);
      }
      return person;
    });
    return res.status(200).json({ success: true, data: people });
    // or res.status(200).json({ success: true, data: newPeople });
  }
});
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.map((person) => person.id === Number(id));
  if (!person) {
    return res.status(400).json({ success: false, data: "Person not found" });
  } else {
    const newPeople = people.filter((per) => per.id !== Number(id));
    return res.status(200).json({ success: true, data: newPeople });
  }
});
app.listen(3000, () => console.log("listing on port 3000"));
