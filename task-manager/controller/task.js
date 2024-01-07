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
const editTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(4040).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete({ task: taskID });
    const tasks = await Task.find({});
    if (!task) {
      res.status(4040).json({ msg: "No such task" });
    } else {
      res.status(200).json({ tasks });
    }
  } catch (error) {
    res.status(4040).json({ msg: error });
  }
};
module.exports = { getTasks, getTask, createTask, deleteTask, editTask };
