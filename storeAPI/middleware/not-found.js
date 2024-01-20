const notFound = (req, res) => {
  res.status(404).json({ msg: "Sorry, Not found!", success: false });
};
module.exports = notFound;
