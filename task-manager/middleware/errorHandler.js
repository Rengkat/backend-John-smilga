const { CustomError } = require("../error/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ success: false, msg: err.message });
  } else {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};
module.exports = errorHandlerMiddleware;
