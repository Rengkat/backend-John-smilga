const notFound = (req, res) => {
  res.status(404).json({ success: false, msg: "Sorry task not found" });
};
module.exports = notFound;
