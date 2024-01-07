const Task = require("../model/task");
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const singleTask = await Task.findOne({ _id: taskID });
    if (!singleTask) {
      return res.status(4040).json({ msg: `no task with id ${taskID}` });
    } else {
      res.status(200).json({ task: singleTask });
    }
  } catch (error) {
    res.status(4040).json({ msg: error });
  }
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
