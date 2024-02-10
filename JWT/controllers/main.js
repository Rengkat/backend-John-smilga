const login = async (req, res) => {
  res.send("hello");
};
const dashboard = async (req, res) => {
  const luckyNum = Math.floor(Math.random() * 100);
  res.send({ message: `Hello Alex`, secret: `Here is your luck number ${luckyNum}` });
};
module.exports = { login, dashboard };
