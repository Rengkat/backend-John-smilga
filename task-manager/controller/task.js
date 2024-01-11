const Task = require("../model/task");
const asyncWrapper = require("../middleware/async");
const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const singleTask = await Task.findOne({ _id: taskID });
  if (!singleTask) {
    return res.status(4040).json({ msg: `no task with id ${taskID}` });
  } else {
    res.status(200).json({ task: singleTask });
  }
});
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    res.status(4040).json({ msg: "No such task" });
  } else {
    res.status(200).json({ tasks });
  }
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ task: taskID });
  const tasks = await Task.find({});
  if (!task) {
    res.status(4040).json({ msg: "No such task" });
  } else {
    res.status(200).json({ tasks });
  }
});
module.exports = { getTasks, getTask, createTask, deleteTask, editTask };
