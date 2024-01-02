const getTasks = (req, res) => {
  res.status(200).json({ success: true, data: "All task" });
};
const getTask = (req, res) => {
  //   const { id } = req.params;
  //   const task = tasks.filter((task) => task.id === Number(id));
  //   if (task) {
  //     return res.status(200).json({ success: true, data: task });
  //   } else {
  //     return res.status(404).json({ success: false, msg: "Task not found" });
  //   }
  res.send("Hello get a task");
};
const createTask = (req, res) => {
  res.send("post task");
};
const editTask = (req, res) => {
  res.send("edit task");
  //   const { name } = req.body;
  //   const { id } = req.params;
  //   const task = tasks.filter((task) => task.id === Number(id));
  //   if (task) {
  //     res.status(200).json({ success: true, msg: "" });
  //   } else {
  //     res.status(400).json({});
  //   }
};
const deleteTask = (req, res) => {
  //   const { id } = req.params;

  //   const task = tasks.filter((task) => task.id === id);
  res.send("delete task");
};
module.exports = { getTasks, getTask, createTask, deleteTask, editTask };
