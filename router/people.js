const { people } = require("../data");
const express = require("express");
const router = express.Router();
//now remove all the starting of /api/people
router.get("/", (req, res) => {
  res.status(200).send({ success: true, data: people });
});
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(201).json({ success: true, person: name });
    return name;
  } else {
    res.status(400).json({ success: false, msg: "Please enter details" });
  }
});
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "Please enter name" });
  }
  res.status(200).json({ success: true, data: [...people, name] });
});
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const person = people.map((person) => person.id === Number(id));
  if (!person) {
    return res.status(400).json({ success: false, data: "Person not found" });
  } else {
    const newPeople = people.filter((per) => per.id !== Number(id));
    return res.status(200).json({ success: true, data: newPeople });
  }
});
module.exports = router;
