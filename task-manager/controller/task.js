const Task = require("../model/task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../error/custom-error");
const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const singleTask = await Task.findOne({ _id: taskID });
  if (!singleTask) {
    return next(createCustomError(`no task with id ${taskID}`, 404));
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
    return next(createCustomError(`no task with id ${taskID}`, 404));
  } else {
    res.status(200).json({ tasks });
  }
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ task: taskID });
  const tasks = await Task.find({});
  if (!task) {
    return next(createCustomError(`no task with id ${taskID}`, 404));
  } else {
    res.status(200).json({ tasks });
  }
});
module.exports = { getTasks, getTask, createTask, deleteTask, editTask };
