const connectDB = require("./db/connect");
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const app = express();
require("dotenv").config();
const tasks = require("./router/task");
const port = process.env.PORT || 3000;
app.use(express.static("./public"));
app.use(express.json());
//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound); //not found middleware
app.use(errorHandlerMiddleware); // error middleware
const start = async () => {
  try {
    await connectDB(process.env.MANGO_URI);
    app.listen(port, () => console.log("Server listening on port 3000..."));
  } catch (error) {
    console.log(error);
  }
};
start();
