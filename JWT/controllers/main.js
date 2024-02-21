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

  res.status(200).json({ message: "Account sign up successfully", token });
};
const dashboard = async (req, res) => {
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRETE);
    const luckyNum = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello ${decode.username}`,
      secret: `Here is your luck number ${luckyNum}`,
    });
  } catch (error) {
    throw new CustomError("Not authorized to access this route", 401);
  }
};
module.exports = { login, dashboard };
