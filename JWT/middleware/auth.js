const CustomError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomError("No token in headers", 401);
  }
  const token = authHeader.split(" ")[1];
  console.log(req.headers.authorization);
  next();
};
module.exports = authentication;
