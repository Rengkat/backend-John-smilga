const { people } = require("../data");
const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  postPostman,
  deletePerson,
  editPeron,
} = require("../peopleController/people");
//now remove all the starting of /api/people
router.get("/", getPeople);
router.post("/", createPerson);
router.post("/postman", postPostman);
router.put("/:id", editPeron);
router.delete("/:id", deletePerson);

//or
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(postPostman);
router.route("/:id").put(editPeron).delete(deletePerson);
module.exports = router;
