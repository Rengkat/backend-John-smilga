const express = require("express");
const { getTasks, getTask, createTask, deleteTask, editTask } = require("../controller/task");
const router = express.Router();
router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.patch("/:id", editTask);
router.delete("/:id", deleteTask);

//or
router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).patch(editTask).delete(deleteTask);
module.exports = router;
