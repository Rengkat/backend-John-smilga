const CustomError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomError("Please enter all fields", 400);
  } //just for demo, normally provided by DB!!!!
  const id = new Date().getDate();
  //create token mage up of 1) user detail, 2) the secrete signature, 3) expiration
  const token = jwt.sign({ id, username }, process.env.JWT_SECRETE, { expiresIn: "30d" });
  console.log(username, password);
  res.status(200).json({ message: "Account sign up successfully", token });
};
const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomError("No token in headers", 401);
  }
  const token = authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRETE);
    console.log(decode);
  } catch (error) {
    throw new CustomError("Not authorized to access this route", 401);
  }
  //   const luckyNum = Math.floor(Math.random() * 100);
  //   res.send({ message: `Hello Alex`, secret: `Here is your luck number ${luckyNum}` });
};
module.exports = { login, dashboard };
