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
  const luckyNum = Math.floor(Math.random() * 100);
  res.send({ message: `Hello Alex`, secret: `Here is your luck number ${luckyNum}` });
};
module.exports = { login, dashboard };
