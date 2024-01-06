const Task = require("../model/task");
const getTasks = (req, res) => {
  res.status(200).json({ success: true, data: "All task" });
};
const getTask = (req, res) => {
  res.send("Hello get a task");
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const editTask = (req, res) => {
  res.send("edit task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
module.exports = { getTasks, getTask, createTask, deleteTask, editTask };
