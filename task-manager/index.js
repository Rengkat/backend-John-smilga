const express = require("express");
const app = express();
const tasks = require("./router/task");
const port = process.env.PORT || 3000;
app.use(express.static("./public"));
app.use(express.json());
//routes
app.use("/api/v1/tasks", tasks);
app.listen(port, () => console.log("Server listening on port 3000..."));
