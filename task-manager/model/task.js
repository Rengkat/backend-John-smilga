const mangoose = require("mongoose");
const TaskSchema = new mangoose.Schema({
  name: {
    type: String,
    required: [true, "Most provide task name"],
    maxlength: [20, "must not be more than 20 characters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mangoose.model("Task", TaskSchema);
